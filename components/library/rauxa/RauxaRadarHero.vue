<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id">
    <ImageSelector
      v-model="fields.bg"
      placeholder="/images/rauxa/rr_hero-bg.png"
      height="360"
      border="0"
      :container-text="`${containerText}`"
      :controls-id="component.id"
    >
      <LinkField v-model="fields.link" />
      <h4>Background</h4>
      <p><small>Image size must be 1440px x 720px.</small></p>
    </ImageSelector>
    <table
      class="w360"
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      bgcolor="#000000"
      style="width: 100%; min-width: 360px; max-width: 720px"
    >
      <tr>
        <td
          height="360"
          align="center"
          valign="top"
          :background="
            typeof fields.bg === 'string'
              ? fields.bg
              : $store.state.editMode
              ? fields.bg
                ? fields.bg.src
                : ''
              : `./images/${fields.bg ? fields.bg.name : ''}`
          "
          :style="
            `width: 100%; max-width: 720px; height: 360px; vertical-align: top;${
              $store.state.editMode
                ? ''
                : `background-image: url(${
                    typeof fields.bg === 'string'
                      ? fields.bg
                      : `./images/${fields.bg ? fields.bg.name : ''}`
                  });`
            }background-size: 720px 360px; background-repeat: no-repeat; background-position: 40% top;`
          "
        >
          <fragment v-if="!$store.state.editMode">
            {{ backgroundSnippet }}
          </fragment>
          <div>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              role="presentation"
              style="width: 100%; max-width: 720px"
            >
              <tbody>
                <tr>
                  <td width="24"></td>
                  <td
                    height="360"
                    align="left"
                    valign="middle"
                    style="height: 360px; vertical-align: middle"
                  >
                    <a :href="fields.link" target="_blank">
                      <ImageSelector
                        v-model="fields.file"
                        placeholder="images/rauxa/rr_logo.png"
                        width="313"
                        height="52"
                        border="0"
                        img-style="
                          width: 313px;
                          height: 52px;
                          display: block;
                          font-family: Helvetica, sans-serif;
                          font-size: 20px;
                          color: #ffffff;
              "
                        alt="Rauxa Radar"
                      ></ImageSelector>
                    </a>
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      role="presentation"
                      style="max-width: 336px"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              padding-top: 20px; color: #ffffff; letter-spacing: 0.02em; font: bold 16px/18px AvenirLTPro-Heavy, Avenir, sans-serif;
                            "
                          >
                            <TextInput
                              v-model.lazy="fields.issueNo"
                              inline="true"
                            />
                            &nbsp;&nbsp;&nbsp;
                            <TextInput
                              v-model.lazy="fields.issueDate"
                              inline="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              padding-top: 15px; color: #ffffff; letter-spacing: 0.02em; font: 16px/18px AvenirLTPro-Book, Avenir, Helvetica, Arial, sans-serif;
                            "
                          >
                            <TextInput
                              v-model.lazy="fields.body"
                              inline="true"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <fragment v-if="!$store.state.editMode">
            {{ ieFallback2 }}
          </fragment>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import TextInput from "@/components/core/inputs/TextInput"
import { libComponentMixin } from "@/shared/mixins"

export default {
  name: "RauxaRadarHero",
  components: {
    TextInput,
    ImageSelector
  },
  mixins: [libComponentMixin],
  data: function () {
    return {
      ieFallback2:
        "<!--[if gte mso 9]></v:textbox></v:fill></v:rect></v:image><![endif]-->",
      fields: {
        body: "Big news, best practices and trends delivered monthly.",
        issueDate:
          "1&#65279;2&#65279;.&#65279;18&#65279;.&#65279;2&#65279;0&#65279;20",
        issueNo: "Issue No. 06",
        link: "https://www.rauxaradar.com/",
        file: null,
        bg: null,
      },
    }
  },
    computed: {
    backgroundSnippet() {
      return this.fields.bg
        ? `<!--[if gte mso 9]>
        <v:image xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="border: 0;display: inline-block; width: 720px; height: 360px;" src="/images/${this.fields.bg.name}" /><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="border: 0;display: inline-block; position: absolute; top: 0px; width: 720px; height: 360px;"><v:fill opacity="0%" color="#000000" /><v:textbox inset="0,0,0,0">
        <![endif]-->`
        : ''
    }
  },
  mounted: function () {
    this.$emit("has-controls")
  },
}
</script>

<style lang="scss" scoped></style>
