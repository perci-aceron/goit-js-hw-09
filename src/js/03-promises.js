function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function generatePromises() {
  const amount = parseInt(document.getElementById('amount').value, 10);
  const initialDelay = parseInt(
    document.getElementById('initialDelay').value,
    10
  );
  const step = parseInt(document.getElementById('step').value, 10);

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const delay = initialDelay + (i - 1) * step;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.Success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.Failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
