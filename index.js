$(() => {
  console.log('heloooooo')
  const quoteHolder = $('#quote')
  const button = $('#getQuoteButton')

  button.click(() => {
    $.getJSON(
			'http://api.icndb.com/jokes/random',
      ({value: {joke}}) => {
				quoteHolder.text(`${joke}`)
    })
  })
})
