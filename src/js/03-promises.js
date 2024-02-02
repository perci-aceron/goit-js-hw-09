// Import Notiflix library
const notiflix = require('notiflix');

// Initialize Notiflix
notiflix.Notify.Init({
  width: '300px',
  position: 'right-top',
  distance: '10px',
  timeout: 3000,
});

// Function to create a promise
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

// Handle form submission
const form = document.querySelector('.form');
form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const firstDelay = formData.get('delay');
  const delayStep = formData.get('step');
  const amount = formData.get('amount');

  if (isNaN(firstDelay) || isNaN(delayStep) || isNaN(amount)) {
    notiflix.Notify.Failure('Invalid input. Please enter a number.');
    return;
  }

  try {
    for (let i = 0; i < amount; i++) {
      const result = await createPromise(i + 1, firstDelay + i * delayStep);
      notiflix.Notify.Success(
        `Fulfilled promise ${result.position} in ${result.delay}ms`
      );
    }
  } catch (error) {
    notiflix.Notify.Failure(
      `Rejected promise ${error.position} in ${error.delay}ms`
    );
  }
});
