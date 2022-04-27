import dayjs from 'dayjs'

export const countdownTimer = (initTime, timeOff, countdown) => {
  setInterval(() => {
      initTime = dayjs();
      const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
      countdown.value = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
      countdown.value = dayjs(countdown.value).format('HH:mm:ss');
      if (diffTime < 0) {
        return countdown.value = 'Apagada';
      }
    }, 1000);

} 