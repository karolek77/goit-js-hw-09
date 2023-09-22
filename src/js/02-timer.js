/*import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const selectData = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
let msDifference;
let countdownInterval;
startButton.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectData = selectedDates[0];

    if (selectData < options.defaultDate) {
      //window.alert('Please choose a date in the future');
      //Notiflix.Notify.failure('Please choose a date in the future');
      console.log('zła data');
      // Notiflix.Notify.warning('Please choose a date in the future');
      startButton.setAttribute('disabled', true);
      clearInterval(countdownInterval);
    } else {
      msDifference = selectData.getTime() - options.defaultDate.getTime();
      const countdownData = convertMs(msDifference);
      daysElement.textContent = addLeadingZero(countdownData.days);
      hoursElement.textContent = addLeadingZero(countdownData.hours);
      minutesElement.textContent = addLeadingZero(countdownData.minutes);
      secondsElement.textContent = addLeadingZero(countdownData.seconds);
      clearInterval(countdownInterval);
      startButton.removeAttribute('disabled');
    }
  },
};
const fp = flatpickr(selectData, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function startCountdown() {
  msDifference -= 1000;
  if (msDifference <= 0) {
    clearInterval(countdownInterval);
    startButton.setAttribute('disabled', true);
    return;
  }
  const countdownData = convertMs(msDifference);

  daysElement.textContent = addLeadingZero(countdownData.days);
  hoursElement.textContent = addLeadingZero(countdownData.hours);
  minutesElement.textContent = addLeadingZero(countdownData.minutes);
  secondsElement.textContent = addLeadingZero(countdownData.seconds);
}

startButton.addEventListener('click', function () {
  countdownInterval = setInterval(startCountdown, 1000);
  startButton.setAttribute('disabled', true);
});*/

//console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const selectData = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
let msDifference;
let countdownInterval;
startButton.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectData = selectedDates[0];

    if (selectData < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startButton.setAttribute('disabled', true);
      clearInterval(countdownInterval);
    } else {
      msDifference = selectData.getTime() - options.defaultDate.getTime();
      const countdownData = convertMs(msDifference);
      daysElement.textContent = addLeadingZero(countdownData.days);
      hoursElement.textContent = addLeadingZero(countdownData.hours);
      minutesElement.textContent = addLeadingZero(countdownData.minutes);
      secondsElement.textContent = addLeadingZero(countdownData.seconds);
      clearInterval(countdownInterval);
      startButton.removeAttribute('disabled');
    }
  },
};
const fp = flatpickr(selectData, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function startCountdown() {
  msDifference -= 1000;
  if (msDifference <= 0) {
    clearInterval(countdownInterval);
    startButton.setAttribute('disabled', true);
    return;
  }
  const countdownData = convertMs(msDifference);

  daysElement.textContent = addLeadingZero(countdownData.days);
  hoursElement.textContent = addLeadingZero(countdownData.hours);
  minutesElement.textContent = addLeadingZero(countdownData.minutes);
  secondsElement.textContent = addLeadingZero(countdownData.seconds);
}

startButton.addEventListener('click', function () {
  countdownInterval = setInterval(startCountdown, 1000);
  startButton.setAttribute('disabled', true);
});

//console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
