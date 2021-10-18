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
}
showTime();


function showDate(){
    const date = new Date();
    const options = {month: 'long', day: 'numeric',weekday:'long'};
    const currentDate = date.toLocaleDateString('en-US', options);
    document.querySelector('.date').innerHTML = currentDate;

}
showDate();


