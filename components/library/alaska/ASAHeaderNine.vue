<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <b-checkbox v-model="fields.mp">
        Mileage Plan logo
      </b-checkbox>
    </portal>

    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:500px;background-color:#01426a;border-radius:6px 4px 0 0;"
    >
      <tr>
        <td align="left" valign="top" style="width:40%;">
          <!-- logo -->
          <a
            href="${clickthrough('Logo_Home','linkname=Logo_Home')}"
            style="text-decoration:none;"
            target="_blank"
          >
            <img
              v-if="!fields.mp"
              src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/ALA_BI_Header1_Logox2_01_370x220.jpg"
              width="185"
              border="0"
              alt="Alaska&reg;"
              style="display:block;border:0;outline:0;padding:0;width:100%;max-width:185px;height:auto;border-radius:4px 0 0 0;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
            />
            <img
              v-else
              src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/ALA_BI_Header7_Logox2_01_370x220.jpg"
              width="185"
              border="0"
              alt="Alaska&reg; Mileage Plan"
              style="display:block;border:0;outline:0;padding:0;width:100%;max-width:185px;height:auto;border-radius:4px 0 0 0;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
            />
          </a>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAHeaderNine',
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
        mp: false
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>

<style lang="scss" scoped></style>
