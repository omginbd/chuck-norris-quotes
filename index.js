$(() => {
  console.log('heloooooo')
  const quoteHolder = $('#quote')
  const button = $('#getQuoteButton')

  button.click(() => {
    $.getJSON(
      'http://api.forismatic.com/api/1.0/?method=getQuote&key=12345&format=json&lang=en',
      data => {
        console.log(data)
    })
  })
})