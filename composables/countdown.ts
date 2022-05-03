import dayjs from 'dayjs'

export const countdownTimer = (timeOff, countdown) => {

  const interval = setInterval(() => {
      const initTime = dayjs();
      const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
      const time = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
      countdown.time = dayjs(time).format('HH:mm:ss');
      if (diffTime < 0) {
         countdown.time = 'Apagada';
         countdown.isActive = true;
         clearInterval(interval);
      }
    }, 1000);
    
} 
