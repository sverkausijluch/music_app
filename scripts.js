const setMainPage = () => {
	const main_page = document.getElementById('main_page')
	let is_hidden = main_page.classList.contains("hide")
	if(is_hidden) {
		main_page.classList.remove('hide')
		const song_page = document.getElementById('song_page')
		song_page.classList.add('hide')
	}
	const cover = document.getElementById('song_cover')
	cover.setAttribute("src",'cover/main-cover.jpg')
}
const setSongPage = () => {
	const song_page = document.getElementById('song_page')
	let is_hidden = song_page.classList.contains("hide")
	if(is_hidden) {
		song_page.classList.remove('hide')
		const main_page = document.getElementById('main_page')
		main_page.classList.add('hide')
	}
	const audio_player = document.getElementById('audio_player')
	audio_player.autoplay = true
}
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const setSong = (type) => {
	setSongPage()
	let song = {}
	if(type=='funny'){
		let max_index = funny_songs.length-1
		const index = getRandomInt(0,max_index)
		song = funny_songs[index]
	} else if(type=='sad'){
		let max_index = funny_songs.length-1
		const index = getRandomInt(0,max_index)
		song = funny_songs[index]
	} else if(type=='thoughtful'){
		let max_index = funny_songs.length-1
		const index = getRandomInt(0,max_index)
		song = funny_songs[index]
	}
	const song_name = document.getElementById('song_name')
	const song_player = document.getElementById('audio_player')
	const song_description = document.getElementById('song_description')
	const song_cover = document.getElementById('song_cover')
	const song_audio_cover = document.getElementById('song_audio_cover')
	song_name.innerHTML = song.name
	song_player.setAttribute("src",'audio/'+song.name+'.mp3')
	song_description.innerHTML = song.description
	song_cover.setAttribute("src",'cover/'+song.name+'.jpg')
	song_audio_cover.setAttribute("src",'mini-cover/'+song.name+'.jpg')
}
const setBg = () => {
	const bgBtn = document.getElementById('bg_btn')
	const audioBtn = document.getElementById('audio_btn')
	const bg = document.getElementById('bg')
	bgBtn.classList.add('hide')
	audioBtn.classList.remove('hide')
	bg.classList.add('up-bg')
}
const setAudio = () => {
	const bgBtn = document.getElementById('bg_btn')
	const audioBtn = document.getElementById('audio_btn')
	const bg = document.getElementById('bg')
	bgBtn.classList.remove('hide')
	audioBtn.classList.add('hide')
	bg.classList.remove('up-bg')
}
const funny_songs = [
	{'name':'Mono - Cyclone',
	'description':'Ах как я хочу зимы, утонуть в надежды снегах!'},
]
const sad_songs = [
	{'name':'Mono - Cyclone',
	'description':'Ах как я хочу зимы, утонуть в надежды снегах!'},
]
const thoughtful_songs = [
	{'name':'Mono - Cyclone',
	'description':'Ах как я хочу зимы, утонуть в надежды снегах!'},
]