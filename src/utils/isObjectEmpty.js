export const isObjectEmpty = (obj) => {
  if(Object.keys(obj).length === 0 && obj.constructor === Object)
    return false
  return true
}