$(() => {
	const audioElement = document.createElement('audio')
	audioElement.setAttribute('src', 'http://soundbible.com/grab.php?id=996&type=mp3')
  const quoteHolder = $('#quote')
  const button = $('#getQuoteButton')
	const body = document.getElementsByTagName('body')[0]

  button.click(() => {
    $.getJSON(
			'http://api.icndb.com/jokes/random',
      ({value: {joke}}) => {
				body.style.backgroundImage = getRandomImage()
				audioElement.play()
				quoteHolder.text(`${joke}`)
    })
  })
})

function getRandomImage() {
	const i = Math.floor((Math.random() * 100) % 6)
	return `url(img/${i}.jpg)`
}
