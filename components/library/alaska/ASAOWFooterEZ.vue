<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
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
        <b-radio
          v-model="fields.isPromotional"
          name="footerType"
          :native-value="true"
        >
          Promotional
        </b-radio>
        <b-radio
          v-model="fields.isPromotional"
          name="footerType"
          :native-value="false"
        >
          Transactional
        </b-radio>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showDisclaimer">
          Disclaimer
        </b-checkbox>
      </div>
      <div v-if="fields.showDisclaimer" class="field">
        <ListingControl
        v-model="fields.listing"
        :listing-defaults="listingDefaults"
        label="Disclaimer Listing"
      />
      </div>
    </portal>
    <table
      v-if="$store.state.editMode"
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="
        width: 100%;
        max-width: 500px;
        background-color: #01426a;
        border-radius: 6px 4px 0 0;
      "
    >
      <tr>
        <td align="center">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="width: 100%; max-width: 500px; background-color: #ffffff"
          >
            <tr>
              <td align="center" valign="top" style="padding-top: 18px">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  align="center"
                  style="width: 92%"
                >
                  <tr>
                    <td
                      align="center"
                      style="
                        font-family: Arial, 'Helvetica Neue', Helvetica,
                          sans-serif;
                        font-size: 14px;
                        line-height: 20px;
                        color: #949292;
                      "
                    >
                      <a
                        href="${clickthrough('BottomLink_Book','linkname=BottomLink_Book')}"
                        style="color: #949292; text-decoration: underline"
                        >Book</a
                      >
                      &nbsp;|&nbsp;
                      <a
                        href="${clickthrough('BottomLink_EasyBiz','linkname=BottomLink_EasyBiz')}"
                        style="color: #949292; text-decoration: underline"
                        >Easy&nbsp;Biz&nbsp;sign&nbsp;in</a
                      ><span class="mbl-blk"></span
                      ><span class="mbl-hide"> &nbsp;|&nbsp;</span>
                      <a
                        href="${clickthrough('Update_Subscriptions','linkname=Update_Subscriptions')}"
                        style="color: #949292; text-decoration: underline"
                        >Preferences</a
                      >
                      &nbsp;|&nbsp;
                      <a
                        href="${clickthrough('BottomLink_Contact','linkname=BottomLink_Contact')}"
                        style="color: #949292; text-decoration: underline"
                        >Contact&nbsp;us</a
                      >
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top" style="padding-top: 20px">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  align="center"
                >
                  <tr>
                    <td valign="middle" style="vertical-align: middle">
                      <a
                        href="${clickthrough('footer_facebook_img','linkname=footer_facebook_img')}"
                        ><img
                          src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Alaska_OneWorld_footer_social_fb.png"
                          width="13"
                          height="25"
                          border="0"
                          style="
                            width: 13px;
                            display: block;
                            height: auto;
                            font-family: Arial, sans-serif;
                            font-size: 12px;
                            color: #949292;
                          "
                          alt="Facebook"
                      /></a>
                    </td>
                    <td style="width: 27px"></td>
                    <td valign="middle" style="vertical-align: middle">
                      <a
                        href="${clickthrough('footer_twitter_img','linkname=footer_twitter_img')}"
                        ><img
                          src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Alaska_OneWorld_footer_social_twitr.png"
                          width="30"
                          height="25"
                          border="0"
                          style="
                            width: 30px;
                            display: block;
                            height: auto;
                            font-family: Arial, sans-serif;
                            font-size: 12px;
                            color: #949292;
                          "
                          alt="Twitter"
                      /></a>
                    </td>
                    <td style="width: 30px"></td>
                    <td valign="middle" style="vertical-align: middle">
                      <a
                        href="${clickthrough('footer_instagram_img','linkname=footer_instagram_img')}"
                        ><img
                          src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Alaska_OneWorld_footer_social_ig.png"
                          width="24"
                          height="25"
                          border="0"
                          style="
                            width: 24px;
                            display: block;
                            height: auto;
                            font-family: Arial, sans-serif;
                            font-size: 12px;
                            color: #949292;
                          "
                          alt="Instagram"
                      /></a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  align="center"
                  style="width: 77%; max-width: 385px"
                >
                  <table v-if="fields.showDisclaimer && $store.state.editMode">
                    <fragment v-for="(item, i) in fields.listing" :key="`listing_${i}`">
                      <tr>
                        <td style="padding-top:20px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size: 14px; line-height: 18px;color:#949292; text-align: center;">
                          <TextInput
                            v-model.lazy="fields.listing"
                            :item-index="i"
                            link-style="text-decoration:underline; color: #ffffff;"
                            sup-style="font-size:55%; line-height:6px; vertical-align:6px;"
                          />
                        </td>
                      </tr>
                    </fragment>
                  </table>
                  <tr>
                    <td
                      align="center"
                      style="
                        padding-top: 18px;
                        font-family: Arial, 'Helvetica Neue', Helvetica,
                          sans-serif;
                        font-size: 14px;
                        line-height: 18px;
                        color: #949292;
                      "
                    >
                      <fragment>
                        <span
                          v-if="fields.isPromotional"
                          class="unsub_language"
                        >
                          If you wish to
                          <a
                            href="${clickthrough('footer_unsubscribe_text','linkname=footer_unsubscribe_text','CUSTOMER_ID_='+CUSTOMER_ID_,'date_var='+deploy_date)}"
                            style="color: #949292; text-decoration: underline"
                            >unsubscribe</a
                          >
                          from promotional communications, update your
                          preferences
                          <a
                            href="${clickthrough('footer_unsubscribe_text','linkname=footer_unsubscribe_text','CUSTOMER_ID_='+CUSTOMER_ID_,'date_var='+deploy_date)}"
                            style="color: #949292; text-decoration: underline"
                            >here</a
                          >. You may still receive transactional and
                          trip-related emails from Alaska Airlines.
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
                        style="color: #949292; text-decoration: underline"
                        >privacy&nbsp;notice</a
                      >
                      or
                      <a
                        href="${clickthrough('footer_contactus_text','linkname=footer_contactus_text')}"
                        style="color: #949292; text-decoration: underline"
                        >contact&nbsp;us</a
                      >. <br /><br />
                      <a
                        href="${clickthrough('webview','linkname=webview')}"
                        style="color: #949292; text-decoration: underline"
                        >View in web</a
                      >
                      <br />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top">
                <a
                  href="${clickthrough('footer_logo_img','linkname=footer_logo_img')}"
                  ><img
                    src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Alaska_OneWorld_footer_tail.png"
                    width="500"
                    border="0"
                    style="
                      display: block;
                      width: 100%;
                      max-width: 500px;
                      height: auto;
                      font-family: Arial, sans-serif;
                      font-size: 12px;
                      color: #949292;
                    "
                    alt="Alaska Airlines logo"
                /></a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <fragment v-if="!$store.state.editMode && fields.showDisclaimer">
      {{ snippetStart }}
    </fragment>
    <fragment
    v-if="!$store.state.editMode && fields.showDisclaimer"
    role="presentation"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="width: 100%; display: none;">
      <fragment v-for="(item, i) in fields.listing" :key="`listing_${i}`">
        <tr>
          <td style="padding-top:20px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size: 14px; line-height: 18px;color:#949292; text-align: center;">
            <TextInput
              v-model.lazy="fields.listing"
              :item-index="i"
              link-style="text-decoration:underline; color: #ffffff;"
              sup-style="font-size:55%; line-height:6px; vertical-align:6px;"
            />
          </td>
        </tr>
      </fragment>
    </fragment>
    <fragment v-if="!$store.state.editMode && fields.showDisclaimer">
      {{ snippetEnd }}
    </fragment>
    <table
    v-if="!$store.state.editMode"
     role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width: 100%;">
      {{ fields.isPromotional ? promotionalResponsysInclude : transactionalResponsysInclude }}
    </table>
  </td>
</template>

<script>
import { libComponentMixin } from "@/shared/mixins"
import TextInput from '@/components/core/inputs/TextInput'
import ListingControl from '@/components/core/inputs/ListingControl'

const defaultListing = [
    {
      text: 'FPO DISCLAIMER TEXT GOES HERE ADD A NEW ROW FOR EACH DISCLAIMER'
    }
]

export default {
  name: "ASAOWFooterEZ",
  components: {
    TextInput,
    ListingControl
  },
  mixins: [libComponentMixin],
  data: function () {
    return {
      promotionalResponsysInclude: `<#include "cms://contentlibrary/globalassets/asa_ow/asaow_ftr_ez_500.htm">`,
      transactionalResponsysInclude: `<#include "cms://contentlibrary/globalassets/asa_ow/asaow_ftr_ez_trans_500.htm">`,
      snippetStart: `#{--snippet-start--}`,
      snippetEnd: `{--snippet-end--}#`,
      listingDefaults: defaultListing,
      fields: {
        isPromotional: true,
        showDisclaimer: null,
        listing: [...defaultListing],
      },
    }
  },
  watch: {
    'fields.showDisclaimer': function (val) {
      this.$store.commit('setHasPartialSnippet', val)
    },
  },
  mounted: function () {
    this.$emit("has-controls")
  },
}
</script>
