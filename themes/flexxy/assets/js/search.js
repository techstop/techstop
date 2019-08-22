/* global lunr $ */
let lunrIndex
let lunrResult
let pagesIndex

/**
 * A function for splitting a string into bigram.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @param {?object} metadata - Optional metadata to associate with every token
 * @returns {lunr.Token[]}
 */
const bigramTokeniser = (obj, metadata) => {
  if (obj == null || obj === undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map((t) => {
      return new lunr.Token(
        lunr.utils.asString(t).toLowerCase(),
        lunr.utils.clone(metadata)
      )
    })
  }

  let str = obj.toString().trim().toLowerCase()
  let tokens = []

  for (let i = 0; i <= str.length - 2; i++) {
    const tokenMetadata = lunr.utils.clone(metadata) || {}
    tokenMetadata['position'] = [i, i + 2]
    tokenMetadata['index'] = tokens.length
    tokens.push(
      new lunr.Token(
        str.slice(i, i + 2),
        tokenMetadata
      )
    )
  }
  return tokens
}

/**
 * A function for separating a string into bigram and join it with space.
 *
 * @static
 * @param {?string} query - The string to convert into tokens
 * @returns {string}
 */
const queryNgramSeparator = (query) => {
  const str = query.toString().trim().toLowerCase()
  const tokens = []

  for (let i = 0; i <= str.length - 2; i++) {
    tokens.push(str.slice(i, i + 2))
  }
  return tokens.join(' ')
}

/**
 * Preparation for using lunr.js
 */
const initLunr = () => {
  $.getJSON('index.json').done((index) => {
    pagesIndex = index
    lunrIndex = lunr(builder => {
      builder.tokenizer = bigramTokeniser
      builder.pipeline.reset()
      builder.ref('ref')
      builder.field('title', { boost: 10 })
      builder.field('tags', { boost: 6 })
      builder.field('cats', { boost: 4 })
      builder.metadataWhitelist = ['position']
      for (let page of pagesIndex) {
        builder.add(page)
      }
    })
  }).fail((jqxhr, textStatus, error) => {
    const err = textStatus + ', ' + error
    console.error('Error getting Hugo index flie:', err)
  })
}

/**
 * Searching pages using lunr
 * @param {String} query - Query string for searching
 * @return {Object[]} - Array of search results
 */
const search = (query) => {
  lunrResult = lunrIndex.search(queryNgramSeparator(query))
  return lunrResult.map((result) => {
    return pagesIndex.filter((page) => {
      return page.ref === result.ref
    })[0]
  })
}

/**
 * Setup UI for Search
 */
const initUI = () => {
  // Clear query when clear icon is clicked
  $('#searchBoxIcon').click(() => {
    $('#searchBoxInput').val('')
    $('#searchBoxInput').trigger('keyup')
  })

  // Event when chenging query
  $('#searchBoxInput').keyup(event => {
    const $searchResults = $('#searchResults')
    const query = $(event.currentTarget).val()

    // Icon switching
    if (query.length) {
      $('#searchBoxIcon').attr('src', '../img/clear.png')
      $('#searchBoxIcon').css('cursor', 'pointer')
    } else {
      $('#searchBoxIcon').attr('src', '../img/search.png')
      $('#searchBoxIcon').css('cursor', 'default')
    }

    // Only trigger a search when 2 chars. at least have been provided
    if (query.length < 2) {
      $searchResults.hide()
      return
    }

    // Display search results
    renderResults(search(query))
    $searchResults.show()
  })

  // Emit keyup event for when the query is already setted with browser back etc.
  $('#searchBoxInput').trigger('keyup')
}

/**
 * Rendering search results
 * @param {Object[]} results Array of search results
 */
const renderResults = (results) => {
  const $searchResults = $('#searchResults')
  const query = $('#searchBoxInput').val()
  const MAX_PAGES = 10

  // Clear search result
  $searchResults.empty()

  // Show message when results is empty
  if (!results.length) {
    $searchResults.append('<div class="searchResultPage">No results found for query "' + query + '"</div>')
    return
  }

  // Only show the ten first results
  results.slice(0, MAX_PAGES).forEach((result, idx) => {
    const $searchResultPage = $('<div class="searchResultPage">')

    $searchResultPage.append('<h2><a class="searchResultTitle" href="' + result.ref + '">' + result.title + '</a></h2>')
    
    if (result.cats != null) {
      $searchResultPage.append('<div class="searchResultBody">' + 'Categories: ' + result.cats + '</div>')
    }    
    
    if (result.tags != null) {
      $searchResultPage.append('<div class="searchResultBody">' + 'Tags: ' + result.tags + '</div>')
    }
    
    $searchResultPage.append('<hr>')
    $searchResults.append($searchResultPage)

    // Highlight keyword
    $('#searchResults').mark(query)
  })
}

initLunr()

$(() => {
  initUI()
})
