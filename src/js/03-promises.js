import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notiflix.Notify.init({
  width: '300px',
  position: 'right-bottom',
  closeButton: false,
});

document
  .getElementById('promisesForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(document.getElementsByName('delay')[0].value);
    const step = parseInt(document.getElementsByName('step')[0].value);
    const amount = parseInt(document.getElementsByName('amount')[0].value);

    createPromises(amount, delay, step);
  });

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createPromises(amount, firstDelay, step) {
  for (let i = 1; i <= amount; i++) {
    const currentDelay = firstDelay + (i - 1) * step;

    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notify.Success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.Failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}
