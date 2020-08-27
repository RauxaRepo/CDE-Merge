export function getUID(existingComponent) {
  return existingComponent && existingComponent.id
    ? existingComponent.id
    : Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2)
}
export function move(array, index, delta) {
  let newIndex = index + delta
  while (index < 0) {
    index += array.length
  }
  while (newIndex < 0) {
    newIndex += array.length
  }
  if (newIndex >= array.length) {
    let k = newIndex - array.length
    while (k-- + 1) {
      array.push(undefined)
    }
  }
  array.splice(newIndex, 0, array.splice(index, 1)[0])
  return array
}
