<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id">
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="
        width: 100%;
        min-width: 360px;
        max-width: 720px;
        font-size: 0px;
        margin: 0 auto;
      "
    >
      <tr>
        <td
          height="2"
          width="100%"
          :bgcolor="fields.bgColor"
          style="height: 2px; font-size: 2px; line-height: 2px"
        >
          &nbsp;
        </td>
      </tr>
    </table>
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <h2>{{ containerText }}</h2>
      <ColorSelector
        v-model="fields.bgColor"
        :colors="bgColors"
        title="Divider Color"
      />
    </portal>
  </td>
</template>

<script>
import ColorSelector from "@/components/core/inputs/ColorSelector"
import { libComponentMixin } from "@/shared/mixins"

export default {
  name: "RauxaRadarDivider",
  components: {
    ColorSelector,
  },
  mixins: [libComponentMixin],
  data: function () {
    return {
      bgColors: ["#d8dada", "#333333"],
      fields: {
        bgColor: "#d8dada",
      },
    }
  },
  mounted: function () {
    this.$emit("has-controls")
  },
}
</script>

<style lang="scss" scoped></style>
