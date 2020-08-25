export function updateContainer($store, container, name, fields) {
  $store.commit('updateContainer', {
    name: container,
    component: {
      name,
      fields: { ...fields }
    }
  })
}
