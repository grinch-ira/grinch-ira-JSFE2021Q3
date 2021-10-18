// const time = document.querySelector('.time')
// console.log(time)
// // time.textContent = 'TEXT'

// const date = new Date();
// const currentTime = date.toLocaleTimeString();
// console.log(currentTime)


function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    document.querySelector('.time').innerHTML = currentTime;
    setTimeout(showTime,1000);
    showDate();
    getTimeOfDay();
}
showTime();


function showDate(){
    const date = new Date();
    const options = {month: 'long', day: 'numeric',weekday:'long'};
    const currentDate = date.toLocaleDateString('en-US', options);
    document.querySelector('.date').innerHTML = currentDate;

}
showDate();

function getTimeOfDay(){
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();
    if(hours>=0 && hours<6){
        timeOfDay = `Night`
    }
    else if(hours>=6 && hours<12){
        timeOfDay = `Morning`
    }
    else if(hours>=12 && hours<18){
        timeOfDay = `Day`
    }
    else if(hours>=18 && hours<24){
        timeOfDay = `Evening`
    }
return document.querySelector('.greeting').innerHTML = `Good ${timeOfDay},` ;
}
getTimeOfDay();




// function setLocalStorage() {
//     localStorage.setItem('name', name.value);
//   }
//   window.addEventListener('beforeunload', setLocalStorage)

//   function getLocalStorage() {
//     if(localStorage.getItem('name')) {
//       name.value = localStorage.getItem('name');
//     }
//   }
//   window.addEventListener('load', getLocalStorage)