import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const countdownTimer = (timeOff, countdown) => {
  const interval = setInterval(() => {
    const initTime = dayjs();
    const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
    const time = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
    const dia = dayjs.duration(time).days();
    dia > 0
    ? (countdown.value = dia + " día " + dayjs(time).format("HH:mm:ss [hrs.]"))
    : (countdown.value = dayjs(time).format("HH:mm:ss [hrs.]"));
    if (diffTime < 0) {
      countdown.value = "Apagada";
      clearInterval(interval);
    }
  }, 1000);
};
