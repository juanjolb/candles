import dayjs from "dayjs";

export const countdownTimer = (timeOff, countdown) => {
  const interval = setInterval(() => {
    const initTime = dayjs();
    const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
    const time = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
    countdown.value = dayjs(time).format("HH:mm:ss");
    if (diffTime < 0) {
      countdown.value = "Apagada";
      clearInterval(interval);
    }
  }, 1000);
};
