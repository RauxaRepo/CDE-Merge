export function getUID(existingComponent) {
  return existingComponent && existingComponent.id
    ? existingComponent.id
    : Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2)
}
