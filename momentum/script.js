// const time = document.querySelector('.time')
// console.log(time)
// // time.textContent = 'TEXT'

// const date = new Date();
// const currentTime = date.toLocaleTimeString();
// console.log(currentTime)

// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
//https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=82bd84201c59e882498fe42a509c1616&units=metric

/*==ВРЕМЯ======================================================================*/

function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    document.querySelector('.time').innerHTML = currentTime;
    setTimeout(showTime,1000);
    showDate();
    getTimeOfDay();
}
showTime();



/*==ДАТА======================================================================*/

function showDate(){
    const date = new Date();
    const options = {month: 'long', day: 'numeric',weekday:'long'};
    const currentDate = date.toLocaleDateString('en-US', options);
    document.querySelector('.date').innerHTML = currentDate;

}
showDate();



/*==ВРЕМЯ СУТОК======================================================================*/

function getTimeOfDay(){
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();
  
    if(hours>=0 && hours<6){
        timeOfDay = `night`
    }
    else if(hours>=6 && hours<12){
        timeOfDay = `morning`
    }
    else if(hours>=12 && hours<18){
        timeOfDay = `afternoon`
    }
    else if(hours>=18 && hours<24){
        timeOfDay = `evening`
    }

 document.querySelector('.greeting').innerHTML = `Good ${timeOfDay},` ;
 return timeOfDay
}
getTimeOfDay();
console.log(getTimeOfDay())



/*==ВВОД И СОХРАНЕНИЕ ИМЕНИ======================================================================*/

function setLocalStorage() {

    const name = document.querySelector('.name')
    localStorage.setItem('name', name.value);
  }

  window.addEventListener('beforeunload', setLocalStorage)



  function getLocalStorage() {
    const name = document.querySelector('.name')
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }

  window.addEventListener('load', getLocalStorage)

/*=ФОНОВОЕ ИЗОБРАЖЕНИЕ ИЗ КОЛЛЕКЦИИ ИЗОБРАЖЕНИЙ========================================================================================= */
const body = document.querySelector('body')
// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";
// body.style.backgroundImage = "url('https://raw.githubusercontent.com/grinch-ira/stage1-tasks/assets/images/morning/06.jpg')"
// body.style.backgroundImage = `url(https://raw.githubusercontent.com/grinch-ira/stage1-tasks/assets/images/${getTimeOfDay()}/${bgNum}.jpg)`



let randomNum;

function getRandomNum(){
  return randomNum = Math.floor(Math.random()*20+1);
}


function setBg(){
  // let timeOfDay = getTimeOfDay();
  let num = getRandomNum().toString()
  let bgNum = num.padStart(2,'0')
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/grinch-ira/stage1-tasks/assets/images/${getTimeOfDay()}/${bgNum}.jpg`
  img.onload = ()=>{
    body.style.backgroundImage = `url(${img.src})`
  }
  return bgNum;
}

console.log(setBg())

/*=СЛАЙДЕР ИЗОБРАЖЕНИЙ================================================================================================== */

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getSlideNext(){
  randomNum++;
  if(randomNum>20){
    randomNum = 1;
  }
  let num = randomNum.toString().padStart(2,'0')
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/grinch-ira/stage1-tasks/assets/images/${getTimeOfDay()}/${num}.jpg`
  img.onload = ()=>{
    body.style.backgroundImage = `url(${img.src})`
  }
}
function getSlidePrev(){
  randomNum--;
  if(randomNum<1){
    randomNum = 20;
  }
  let num = randomNum.toString().padStart(2,'0')
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/grinch-ira/stage1-tasks/assets/images/${getTimeOfDay()}/${num}.jpg`
  img.onload = ()=>{
    body.style.backgroundImage = `url(${img.src})`
  }
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);


/*==ВИДЖЕТ ПОГОДЫ======================================================================*/
  
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const city = document.querySelector('.city');

async function getWeather() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=6ca4f8e8233d5ec397fcd5132046e186&units=metric`
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = Math.round((data.main.temp)) +` °C`;
  weatherDescription.textContent = data.weather[0].description;
  windSpeed.textContent = Math.round(data.wind.speed) + ` m/s`;
  humidity.textContent = Math.round(data.main.humidity) + ` %`;
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);



/*=СОХРАНЕНИЕ ВВЕДЕННОГО ГОРОДА========================================= */

function setLocalCityStorage() {
    const city = document.querySelector('.city')
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalCityStorage)



  function getLocalCityStorage() {
    const city = document.querySelector('.city')
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    }
  }
  window.addEventListener('load', getLocalCityStorage)




/*=ВИДЖЕТ ЦИТАТА ДНЯ==================================================================== */

async function getQuotes() {  
    const quotes = `https://type.fit/api/quotes`;
    const res = await fetch(quotes);
    const data = await res.json(); 

        let j = Math.floor(Math.random()*data.length)
        let quote = data[j].text;
        let author = data[j].author;
        document.querySelector('.quote').innerHTML = quote;
        document.querySelector('.author').innerHTML = author;
  }
  getQuotes();
  document.querySelector('.change-quote').addEventListener('click', getQuotes)
  

  /*=АУДИОПЛЕЕР======================================================================================== */
  
const player = document.querySelector('.player')
const playBtn = document.querySelector('.play')
const prevBtn = document.querySelector('.play-prev')
const nextBtn = document.querySelector('.play-next')
const audio = document.querySelector('.audio')
const title = document.querySelector('.audio-title')
const title1 = document.querySelector('.audio-title1')
const title2 = document.querySelector('.audio-title2')
const title3 = document.querySelector('.audio-title3')

const songs = ['Aqua Caelestis', 'River Flows In You', 'Nu Jazz Vibrations','Good Night Lovers'];
let songIndex = 0;


function loadSong(song){
  audio.src = `../momentum/audio/${song}.mp3`;
  // console.log(songIndex)
}
loadSong(songs[songIndex])


function playSong(){
  title.style.color = '#d4c36c'
  audio.currentTime = 0;
  playBtn.classList.add('pause')
  audio.play()
  if(songIndex==1){
    title.style.color = '#fff'
    title1.style.color = "#d4c36c";
  }
  else if(songIndex==2){
    title.style.color = '#fff'
    title1.style.color = "#fff";
    title2.style.color = '#d4c36c'
  }
  else if(songIndex==3){
    title.style.color = '#fff'
    title1.style.color = "#fff";
    title2.style.color = '#fff'
    title3.style.color = '#d4c36c'
  }
  else if(songIndex==0){
    // title.style.color = '#fff'
    title1.style.color = "#fff";
    title2.style.color = '#fff'
    title3.style.color = '#fff'
  }

}
function pauseSong(){
  playBtn.classList.remove('pause')
  audio.pause();
}


playBtn.addEventListener('click',()=>{
  const isPlay = playBtn.classList.contains('pause')
  if(isPlay){
    pauseSong()
  }else{

    playSong()
  }
})



function playNext(){
  songIndex++;
  if(songIndex>songs.length -1){
    songIndex = 0;
  }
  loadSong(songs[songIndex])
  playSong()
}

nextBtn.addEventListener('click', playNext)



function playPrev(){
  songIndex--;
  if(songIndex<0){
    songIndex = songs.length-1;
  }
  loadSong(songs[songIndex])
  playSong()
}

prevBtn.addEventListener('click', playPrev)





/*=ПЕРЕВОД ПРИЛОЖЕНИЯ НА ДВА ЯЗЫКА=============================================================================================================== */



