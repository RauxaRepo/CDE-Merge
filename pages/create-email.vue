<template>
  <div>
    <h1>Create Email</h1>
    <div class="template-selector-container">
      <label for="templateSelector">Select template:</label>
      <select name="templateSelector" @change="handleTemplateSelected">
        <option value="" />
        <option v-for="template in $store.state.templates.list" :key="template">
          {{ template }}
        </option>
      </select>
    </div>
    <div v-if="selectedTemplate">
      <div ref="templateContainer">
        <component :is="componentInstance" />
      </div>
      <button @click="handleExport">Export</button>
    </div>
    {{ currentTemplate }}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selectedTemplate: null
    }
  },
  methods: {
    handleTemplateSelected: function(evt) {
      return (this.selectedTemplate = evt.target ? evt.target.value : '')
    },
    handleExport: function() {
      this.$store.commit('toggleEditMode')
      this.$nextTick(function() {
        const html = this.$refs.templateContainer.innerHTML.replace(
          /data-v-[0-9a-z]*=""/g,
          ''
        )
        console.log(html)
        this.$store.commit('toggleEditMode')
      })
    }
  },
  computed: {
    currentTemplate() {
      return JSON.stringify(this.$store.state.currentTemplate)
    },
    componentInstance() {
      const name = this.selectedTemplate
      if (!name) {
        return null
      }
      return () => import(`@/templates/${name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.template-selector-container {
  margin-bottom: 3rem;
}
</style>
