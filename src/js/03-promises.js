import Notify from 'notiflix/build/notiflix-notify-aio';

document
  .getElementById('promisesForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(document.getElementsByName('delay')[0].value);
    const step = parseInt(document.getElementsByName('step')[0].value);
    const amount = parseInt(document.getElementsByName('amount')[0].value);

    createPromises(amount, delay, step, showSuccess, showFailure);
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

function createPromises(
  amount,
  firstDelay,
  step,
  successCallback,
  failureCallback
) {
  for (let i = 1; i <= amount; i++) {
    const currentDelay = firstDelay + (i - 1) * step;

    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        successCallback(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        failureCallback(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}

// Custom success and failure callback functions
function showSuccess(message) {
  Notify.Success(message);
}

function showFailure(message) {
  Notify.Failure(message);
}
