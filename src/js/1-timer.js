import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datePickerInput = document.querySelector(`#datetime-picker`);
const buttonElement = document.querySelector("button[data-start]");

const daysElement = document.querySelector("span[data-days]");
const hoursElement = document.querySelector("span[data-hours]");
const minutesElement = document.querySelector("span[data-minutes]");
const secondsElement = document.querySelector("span[data-seconds]");

let userSelectedDate;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose (selectedDates) {
  
      userSelectedDate = selectedDates[0];
      let currentDate = new Date();
      const isPastDate = userSelectedDate <= currentDate;
      buttonElement.disabled = isPastDate;
    
      if(isPastDate){
        iziToast.error({
            title: "Error",
            message: "Please choose a date in the future"
        });
      }
    },
};

window.addEventListener("load", (event) => {
    buttonElement.disabled = true;
    console.log("page is fully loaded");
});

flatpickr(datePickerInput, options);

buttonElement.addEventListener("click", startButtonClick);

function startButtonClick(event) {
    buttonElement.disabled = true;
    datePickerInput.disabled = true;

    startTimer().then( () => {
        datePickerInput.disabled = false;
        clearTimeout(intervalId);
    })
 
};

function startTimer() {

    return new Promise ((resolve) => {
        intervalId = setInterval(() => {
        
            const remainingTime = userSelectedDate - Date.now();
    
            if(remainingTime <= 0){
               resolve();
               return;
            }
            const formattedDateTime = convertMs(remainingTime);
            // console.log(formattedDateTime);test
            updateUIClock(formattedDateTime);
            
        }, 1000)
    })
}

function updateUIClock({ days, hours, minutes, seconds }){
    daysElement.textContent = pad(days);
    hoursElement.textContent = pad(hours);
    minutesElement.textContent = pad(minutes);
    secondsElement.textContent = pad(seconds);
};

function pad(value) { 
    return String(value).padStart(2, `0`);
}

function convertMs(ms) {

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;
 
   const days = Math.floor(ms / day);
   const hours = Math.floor((ms % day) / hour);
   const minutes = Math.floor((ms % day % hour) / minute);
   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
 
   return { days, hours, minutes, seconds };
 }