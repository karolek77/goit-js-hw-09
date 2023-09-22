import Notiflix from 'notiflix';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');

const form = document.querySelector('.form');
const submitButton = form.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const firstDelay = parseFloat(delayInput.value);
  const step = parseFloat(stepInput.value);
  const amount = parseFloat(amountInput.value);
  let completPromises = 0;

  for (let i = 0; i < amount; i++) {
    submitButton.setAttribute('disabled', true);
    const promiseDelay = firstDelay + i * step;

    createPromise(i + 1, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
      .finally(() => {
        completPromises++;
        if (completPromises === amount) {
          submitButton.removeAttribute('disabled');
        }
      });
  }
});
