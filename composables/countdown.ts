export const countdownTimer = (countdown) => {
  if (countdown.value > 0) {
    setTimeout(() => {
      countdown.value--;
      countdownTimer(countdown);
    }, 1000);
  } else {
    return countdown.value = 'Apagada';
  }
};
