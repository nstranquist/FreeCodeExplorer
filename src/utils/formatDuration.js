export const formatDuration = (duration) => {
  let result;
  if(duration <= 0) return;
  // if less than 1 hour
  if(duration / 60 < 1) {
    if(duration < 10)
      result = "0" + duration + "min"
    else
      result = duration + "min"
  }
  // if 1 hour or longer
  else {
    // get number of hours
    let resultHours = Math.floor(duration / 60);
    let resultMinutes = duration % 60;

    if(resultMinutes <= 0)
      result = resultHours + "hr"
    else
      result = resultHours + "hr " + resultMinutes + "min"
  }

  return result
}