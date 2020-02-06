

export const getCurrentTimestamp = () => {
  if(!Date.now())
    return Date.getTime()

  return Date.now()
}

export const getCurrentTimestampSeconds = () => {
  if(!Date.now())
    return Math.round(Date.getTime()/1000)

  return Math.floor(Date.now()/1000)
}

export const getDateFromTimestamp = (timestamp) => {
  return new Date(timestamp)
}