<template>
  <td align="center">
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
        <!-- <ColorSelector
                v-model="fields.bgColor"
                :colors="bgColors"
                title="BG Color"
              />
              <ColorSelector
                v-model="fields.textColor"
                :colors="textColors"
                title="Text Color"
              /> -->
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showDisclaimer">
          Disclaimer
        </b-checkbox>
      </div>
      <div class="field">
        <b-radio
          v-model="fields.showUnsubscribe"
          name="footerType"
          :native-value="true"
        >
          Promotional
        </b-radio>
        <b-radio
          v-model="fields.showUnsubscribe"
          name="footerType"
          :native-value="false"
        >
          Transactional
        </b-radio>
      </div>
    </portal>
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      role="presentation"
      :style="
        `width: 100%; max-width: 500px; background-color: ${fields.bgColor}; color: ${fields.textColor};`
      "
    >
      <tr>
        <td align="center" valign="top" style="padding-top: 35px;">
          <!-- FOOTER NAV -->
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            align="center"
            style="width: 92%;"
          >
            <tr>
              <td
                align="center"
                :style="
                  `font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; line-height: 18px; color: ${fields.textColor}; font-weight: bold;`
                "
              >
                <a
                  href="${clickthrough('footer_book_text','linkname=footer_book_text')}"
                  :style="`color: ${fields.textColor}; text-decoration: none;`"
                >
                  BOOK
                </a>
                &nbsp;|&nbsp;
                <a
                  href="${clickthrough('footer_myaccount_text','linkname=footer_myaccount_text')}"
                  :style="`color: ${fields.textColor}; text-decoration: none;`"
                >
                  MY&nbsp;ACCOUNT
                </a>
                <span class="mbl-blk"></span>
                <span class="mbl-hide"> &nbsp;|&nbsp;</span>
                <a
                  href="${clickthrough('footer_preferences_text','linkname=footer_preferences_text')}"
                  :style="`color: ${fields.textColor}; text-decoration: none;`"
                >
                  PREFERENCES
                </a>
                &nbsp;|&nbsp;
                <a
                  href="${clickthrough('footer_contactus_text','linkname=footer_contactus_text')}"
                  :style="`color: ${fields.textColor}; text-decoration: none;`"
                >
                  CONTACT&nbsp;US
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" valign="top" style="padding-top: 20px;">
          <!-- SOCIAL ICONS -->
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            align="center"
          >
            <tr>
              <td valign="middle" style="vertical-align: middle;">
                <a
                  href="${clickthrough('footer_twitter_img','linkname=footer_twitter_img')}"
                >
                  <img
                    src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/2020_footer_icon_twitter.png"
                    width="31"
                    height="26"
                    border="0"
                    :style="
                      `width:31px; display:block; height:auto; font-family: Arial, sans-serif; font-size: 12px; color: ${fields.textColor};`
                    "
                    alt="Twitter"
                  />
                </a>
              </td>
              <td style="width: 27px;"></td>
              <td valign="middle" style="vertical-align: middle;">
                <a
                  href="${clickthrough('footer_facebook_img','linkname=footer_facebook_img')}"
                >
                  <img
                    src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/2020_footer_icon_facebook.png"
                    width="26"
                    height="26"
                    border="0"
                    :style="
                      `width: 26px; display: block; height: auto; font-family: Arial, sans-serif; font-size: 12px; color: ${fields.textColor};`
                    "
                    alt="Facebook"
                  />
                </a>
              </td>
              <td style="width: 30px;"></td>
              <td valign="middle" style="vertical-align: middle;">
                <a
                  href="${clickthrough('footer_instagram_img','linkname=footer_instagram_img')}"
                >
                  <img
                    src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/2020_footer_icon_instagram.png"
                    width="25.5"
                    height="26"
                    border="0"
                    :style="
                      `width:25.5px; display:block; height:auto; font-family: Arial, sans-serif; font-size: 12px; color: ${fields.textColor};`
                    "
                    alt="Instagram"
                  />
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" valign="top">
          <!-- DYNAMIC FOOTER COPY -->
          <table
            v-if="fields.showDisclaimer"
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            align="center"
            style="width: 92%; max-width: 460px;"
          >
            <tr>
              <td
                align="center"
                :style="
                  `padding-top: 18px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; line-height: 18px; color: ${fields.textColor};`
                "
              >
                <TextInput v-model.lazy="fields.disclaimer" inline="true" />
              </td>
            </tr>
          </table>

          <!-- STATIC FOOTER COPY -->
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            align="center"
            style="width: 92%; max-width: 460px;"
          >
            <tr>
              <td
                align="center"
                :style="
                  `padding-top: 18px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; line-height: 18px; color: ${fields.textColor};`
                "
              >
                <fragment>
                  <span v-if="fields.showUnsubscribe" class="unsub_language">
                    If you wish to unsubscribe from promotional communications,
                    update your preferences
                    <a
                      href="${clickthrough('footer_unsubscribe_text','linkname=footer_unsubscribe_text','CUSTOMER_ID_='+CUSTOMER_ID_,'date_var='+deploy_date)}"
                      :style="
                        `color: ${fields.textColor}; text-decoration: underline;`
                      "
                    >
                      here</a
                    >. You may still receive transactional and trip-related
                    emails from Alaska Airlines.
                  </span>
                  <span>This email was sent to ${EMAIL_ADDRESS_}.</span>
                  <br /><br />
                </fragment>
                Alaska Airlines, PO Box 68900,
                Seattle,&nbsp;WA&nbsp;98168&#8209;0900.
                <br />
                &copy; ${.now?string("yyyy")} Alaska Airlines.
                All&nbsp;rights&nbsp;reserved.
                <br /><br />
                View our
                <a
                  href="${clickthrough('footer_privacypolicy_text','linkname=footer_privacypolicy_text')}"
                  :style="
                    `color: ${fields.textColor}; text-decoration: underline;`
                  "
                >
                  privacy&nbsp;notice
                </a>
                or
                <a
                  href="${clickthrough('footer_contactus_text','linkname=footer_contactus_text')}"
                  :style="
                    `color: ${fields.textColor}; text-decoration: underline;`
                  "
                >
                  contact&nbsp;us</a
                >. <br /><br />
                <a
                  href="${clickthrough('webview','linkname=webview')}"
                  :style="
                    `color: ${fields.textColor}; text-decoration: underline;`
                  "
                >
                  View in web
                </a>
                <br />
                <span :style="`color: ${fields.textColor};`">
                  ${campaign.name}</span
                >
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="right" valign="bottom">
          <!-- WATERMARK -->
          <a
            href="${clickthrough('footer_logo_img','linkname=footer_logo_img')}"
          >
            <img
              src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/2020_footer_watermark.png"
              width="168.5"
              height="175"
              border="0"
              :style="
                `display: block; width: 168.5px; height: auto; font-family: Arial, sans-serif; font-size: 12px; color: ${fields.textColor};`
              "
              alt="Alaska Airlines logo"
            />
          </a>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
// import ColorSelector from '@/components/core/inputs/ColorSelector'
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAFooter',
  components: {
    TextInput
    // ColorSelector
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      bgColors: ['#E9E9E9', '#B44545', '#2A2ED8', 'none'],
      textColors: ['#656565', '#000000', '#FFFFFF'],
      fields: {
        link: '',
        bgColor: '#E9E9E9',
        textColor: '#656565',
        disclaimer: 'TBD Disclaimer',
        showUnsubscribe: true,
        showDisclaimer: true
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>

<style lang="scss" scoped></style>
