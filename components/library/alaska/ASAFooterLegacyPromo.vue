<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
    style="padding-top:20px;"
  >
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <div class="field">
        <b-checkbox v-model="fields.showDisclaimer">
          Disclaimer
        </b-checkbox>
      </div>
    </portal>
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:500px;"
    >
      <tr>
        <td
          align="center"
          valign="top"
          style="padding-top:25px;background-color:#ffffff;border-radius:4px 4px 0 0;"
        >
          <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            <tr>
              <td align="center" valign="top" style="width: 100%;">
                <table
                  role="presentation"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:64%; margin: 0 auto;"
                  class="w100"
                >
                  <tr>
                    <td align="center" style="font-size:0;vertical-align:top;">
                      <fragment v-if="!$store.state.editMode">
                        {{ tableOneOpeningSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:172px;vertical-align:top;"
                        class="mw100"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:100%;"
                        >
                          <tr>
                            <td style="padding-bottom:15px;">
                              <table
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="width:100%;"
                              >
                                <tr>
                                  <td
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:20px;color:#2774ad;text-align:center;"
                                  >
                                    <a
                                      href="${clickthrough('BottomLink_Book','linkname=BottomLink_Book','date_var='+deploy_date)}"
                                      style="color:#2774ad;text-decoration:underline;"
                                      >Book</a
                                    >
                                    &nbsp;/&nbsp;
                                    <a
                                      href="${clickthrough('BottomLink_MileagePlan','linkname=BottomLink_MileagePlan','date_var='+deploy_date)}"
                                      style="color:#2774ad;text-decoration:underline;"
                                      >Mileage Plan&trade;</a
                                    ><span class="mbl-hide"> &nbsp;/</span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode">
                        {{ tableOneMiddleSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width: 100%;max-width:148px;vertical-align:top;"
                        class="mw100"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:100%;"
                        >
                          <tr>
                            <td style="padding-bottom:15px;">
                              <table
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                style="width:100%;"
                              >
                                <tr>
                                  <td
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:20px;color:#2774ad;text-align:center;"
                                  >
                                    <a
                                      href="${clickthrough('BottomLink_MyAccount','linkname=BottomLink_MyAccount','date_var='+deploy_date)}"
                                      style="color:#2774ad;text-decoration:underline;"
                                      >My account</a
                                    >
                                    &nbsp;/&nbsp;
                                    <a
                                      href="${clickthrough('BottomLink_Contact','linkname=BottomLink_Contact','date_var='+deploy_date)}"
                                      style="color:#2774ad;text-decoration:underline;"
                                      >Contact</a
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode">
                        {{ tableOneClosingSnippet }}
                      </fragment>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-bottom: 40px;">
                <table
                  role="presentation"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:92%;margin: 0 auto;"
                >
                  <tr v-if="fields.showDisclaimer">
                    <td
                      style="padding-top:10px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;line-height:18px;color:#3c3b3f;"
                    >
                      <TextInput
                        v-model.lazy="fields.disclaimer"
                        inline="true"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="padding-top:10px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;line-height:18px;color:#3c3b3f;"
                    >
                      This email was sent to ${EMAIL_ADDRESS_}. If you no longer
                      wish to receive Alaska Airlines promotional
                      communications,
                      <a
                        href="${clickthrough('Unsubscribe','linkname=Unsubscribe','CUSTOMER_ID_='+CUSTOMER_ID_,'date_var='+deploy_date)}"
                        style="color:#3c3b3f;font-weight: bold;text-decoration:underline;"
                        >unsubscribe here</a
                      >. You may still receive transactional messages from
                      Alaska&nbsp;Airlines.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="padding:20px 0;background-color:#f5f5f5;"
              >
                <table
                  role="presentation"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:92%; margin: 0 auto;"
                >
                  <tr>
                    <td align="left" style="font-size:0;vertical-align:top;">
                      <fragment v-if="!$store.state.editMode">
                        {{ tableTwoOpeningSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:290px;vertical-align:top;"
                        class="mw100"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:90%;"
                        >
                          <tr>
                            <td
                              style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;line-height:16px;color:#3c3b3f; text-align:left;"
                            >
                              Update your contact info, set preferences, and
                              sign up for deals from your departure&nbsp;city.
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode">
                        {{ tableTwoMiddleSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:170px;vertical-align:top;"
                        class="mw100"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:100%;"
                        >
                          <tr>
                            <td
                              style="padding-top:10px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:14px;line-height:20px;color:#3c3b3f;text-align:left;"
                            >
                              <a
                                href="${clickthrough('Update_Subscriptions','linkname=Update_Subscriptions','date_var='+deploy_date)}"
                                style="color:#3c3b3f;text-decoration:underline;"
                                >Update preferences</a
                              >
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode">
                        {{ tableTwoClosingSnippet }}
                      </fragment>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:#01426a;border-radius: 0 0 4px 4px;">
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:100%;"
                >
                  <tr>
                    <td align="center" style="width:70%;">
                      <table
                        role="presentation"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="width:88%; margin: 0 auto;"
                      >
                        <tr>
                          <td align="left" style="padding-top:20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td
                                  valign="bottom"
                                  style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
                                >
                                  Let's be friends.
                                </td>
                                <td style="font-size:0;width:17px;">
                                  &nbsp;
                                </td>
                                <td align="center" valign="bottom">
                                  <a
                                    href="${clickthrough('Social_Twitter','linkname=Social_Twitter','date_var='+deploy_date)}"
                                    style="text-decoration:none;"
                                  >
                                    <img
                                      src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Footer_Twitter_42x32.png"
                                      alt="Twitter"
                                      width="21"
                                      style="display:block;border:0;outline:0;padding:0;width:21px;height:16px;"
                                    />
                                  </a>
                                </td>
                                <td style="font-size:0;width:17px;">
                                  &nbsp;
                                </td>
                                <td align="center" valign="bottom">
                                  <a
                                    href="${clickthrough('Social_Facebook','linkname=Social_Facebook','date_var='+deploy_date)}"
                                    style="text-decoration:none;"
                                  >
                                    <img
                                      src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Footer_Facebook_22x42.png"
                                      alt="Facebook"
                                      width="11"
                                      style="display:block;border:0;outline:0;padding:0;width:11px;height:21px;"
                                    />
                                  </a>
                                </td>
                                <td style="font-size:0;width:17px;">
                                  &nbsp;
                                </td>
                                <td align="center" valign="bottom">
                                  <a
                                    href="${clickthrough('Social_Instagram','linkname=Social_Instagram','date_var='+deploy_date)}"
                                    style="text-decoration:none;"
                                  >
                                    <img
                                      src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Footer_Instagram_42x42.png"
                                      alt="Instagram"
                                      width="21"
                                      style="display:block;border:0;outline:0;padding:0;width:21px;height:21px;"
                                    />
                                  </a>
                                </td>
                                <td style="font-size:0;width:17px;">
                                  &nbsp;
                                </td>
                                <td align="center" valign="bottom">
                                  <a
                                    href="${clickthrough('Social_Pinterest','linkname=Social_Pinterest','date_var='+deploy_date)}"
                                    style="text-decoration:none;"
                                  >
                                    <img
                                      src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Footer_Pintrest_21x21_x2.png"
                                      alt="Pinterest"
                                      width="21"
                                      style="display:block;border:0;outline:0;padding:0;width:21px;height:21px;"
                                    />
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="padding-top:20px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;line-height:18px;color:#ffffff;text-align:left;"
                          >
                            Alaska Airlines, PO Box 68900, Seattle,
                            WA&nbsp;98168-0900.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:12px;line-height:18px;color:#ffffff;text-align:left;"
                          >
                            &copy;&nbsp;${.now?string("yyyy")}&nbsp;Alaska
                            Airlines. All rights&nbsp;reserved.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="padding-top:15px;padding-bottom:20px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;line-height:18px;color:#ffffff;text-align:left;"
                          >
                            View our
                            <a
                              href="${clickthrough('Privacy_Policy','linkname=Privacy_Policy','date_var='+deploy_date)}"
                              style="color:#ffffff;text-decoration:underline;"
                              >privacy notice</a
                            >
                            or
                            <a
                              href="${clickthrough('Contact_AS','linkname=Contact_AS','date_var='+deploy_date)}"
                              style="color:#ffffff; text-decoration:underline;"
                              >contact&nbsp;us</a
                            >.
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td valign="bottom" style="width:30%;">
                      <img
                        src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/Footer_Eskimo_300x344.png"
                        width="150"
                        border="0"
                        alt=""
                        style="display:block;border:0;outline:0;padding:0;width:100%;max-width:150px;height:auto;border-radius: 0 0 4px 0;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;color:#ffffff;"
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAFooterLegacyPromo',
  components: {
    TextInput
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      tableOneOpeningSnippet: `
        <!--[if (gte mso 9)|(IE)]>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:320px;">
        <tr>
        <td align="center" style="width:54%;">
        <![endif]-->`,
      tableOneMiddleSnippet: `<!--[if (gte mso 9)|(IE)]></td><td align="center" style="width:46%;"><![endif]-->`,
      tableOneClosingSnippet: ` 
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->`,
      tableTwoOpeningSnippet: ` 
        <!--[if (gte mso 9)|(IE)]>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:460px;">
        <tr>
        <td align="left" style="width:290px;">
        <![endif]-->`,
      tableTwoMiddleSnippet: `<!--[if (gte mso 9)|(IE)]></td><td align="left" style="width:170px"><![endif]-->`,
      tableTwoClosingSnippet: `
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->`,
      fields: {
        disclaimer: '*TBD Disclaimer.',
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
