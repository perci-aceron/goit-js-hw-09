function createPromise(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time <= 2000) {
        resolve({ position: time, value });
      } else {
        reject({ position: time, value });
      }
    }, time);
  });
}

Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  useGoogleFont: false,
  fontFamily: 'Quicksand',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
});

function callCreatePromise() {
  const delayInput = document.getElementById('delay');
  const amountInput = document.getElementById('amount');

  const delay = parseInt(delayInput.value);
  const amount = parseInt(amountInput.value);

  for (let i = 0; i < amount; i++) {
    const promise = createPromise(delay * i, delay * (i + 1));

    promise
      .then(({ position, value }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${value}ms`);
      })
      .catch(({ position, value }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${value}ms`);
      });
  }
}

document.getElementById('start').addEventListener('click', callCreatePromise);
