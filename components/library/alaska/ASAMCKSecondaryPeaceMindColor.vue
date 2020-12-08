<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
        <ColorSelector
          v-model="fields.bgColor"
          :colors="bgColors"
          title="BG Color"
        />
      </div>
      <b-field>
        <b-checkbox v-model="fields.showHeadline">
          Headline
        </b-checkbox>
      </b-field>
      <ListingControl
        v-model="fields.listing"
        :listing-defaults="listingDefaults"
      />
    </portal>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      :style="`width:100%; max-width: 500px; background-color: ${fields.bgColor}`"
    >
      <tr>
        <td
          align="center"
          valign="top"
          style="padding-top: 60px; padding-bottom: 50px;"
        >
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 60%; max-width: 300px;"
          >
            <tr v-if="fields.showHeadline">
              <td
                style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:24px;line-height:26px;color:#ffffff;text-align:center;"
              >
                <strong>
                  <TextInput v-model.lazy="fields.headline" inline="true" />
                </strong>
              </td>
            </tr>
            <fragment v-for="(item, i) in fields.listing" :key="`listing_${i}`">
              <tr>
                <td align="center" style="padding-top: 34px;">
                  <ImageSelector
                    v-model="fields.listingIcons"
                    :matching-listing="fields.listing"
                    :item-index="i"
                    :placeholder="listingIconsDefaults[i]"
                    width="79"
                    border="0"
                    alt=""
                    img-style="display:block; width:79px; height:auto; font-family:Helvetica, sans-serif; font-size:20px; color:#ffffff;"
                  />
                </td>
              </tr>
              <tr>
                <td
                  style="padding-top: 20px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;line-height:24px;color:#ffffff;text-align:center;"
                >
                  <TextInput
                    v-model.lazy="fields.listing"
                    :item-index="i"
                    inline="true"
                    link-style="text-decoration:underline; color: #ffffff;"
                    sup-style="font-size:55%; line-height:6px; vertical-align:6px;"
                  />
                </td>
              </tr>
            </fragment>
          </table>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import ColorSelector from '@/components/core/inputs/ColorSelector'
import ImageSelector from '@/components/core/inputs/ImageSelector'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAMCKSecondaryPeaceMindColor',
  components: {
    ColorSelector,
    ImageSelector,
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      bgColors: ['#53B390', '#48A9C5', '#2774AE'],
      listingIconsDefaults: [
        '/images/alaska/seatblock.png',
        '/images/alaska/heart.png',
        '/images/alaska/mask.png'
      ],
      listingDefaults: [
        `<p>Middle seats blocked</p><p>through&nbsp;1/6/2021.**</p>`,
        `<p>No change fees. Ever.</p><p>Learn more</p>`,
        `<p>Masks required for all guests</p><p>over age&nbsp;2.<sup>&dagger;</sup></p>`
      ],
      fields: {
        bgColor: '#2774AE',
        showHeadline: true,
        headline: '<p>BOOK WITH</p><p>PEACE OF&nbsp;MIND.</p>',
        listingIcons: [],
        listing: [],
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
