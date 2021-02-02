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
      <b-checkbox v-model="fields.statement">
        Statement
      </b-checkbox>
    </portal>
    <fragment v-if="!$store.state.editMode">
      {{ assigns }}
    </fragment>
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:500px;background-color:#01426a;border-radius:6px 4px 0 0;"
    >
      <tr>
        <td valign="top" style="width:40%;">
          <a
            href="${clickthrough('logo_home','linkname=logo_home')}"
            style="text-decoration:none;"
          >
            <img
              v-if="fields.mp"
              src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/ALA_BI_Header7_Logox2_01_370x220.jpg"
              width="185"
              border="0"
              alt="Alaska&reg; Mileage Plan"
              style="display:block;border:0;outline:0;padding:0;width:100%;max-width:185px;height:auto;border-radius:4px 0 0 0;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
            />
            <img
              v-else
              src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/ALA_BI_Header1_Logox2_01_370x220.jpg"
              width="185"
              border="0"
              alt="Alaska&reg;"
              style="display:block;border:0;outline:0;padding:0;width:100%;max-width:185px;height:auto;border-radius:4px 0 0 0;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
            />
          </a>
          <!-- / logo -->
        </td>
        <td valign="bottom" style="width:60%;">
          <!--mp/tier info-->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
            <tr>
              <td align="center" style="padding:15px 0;">
                <table
                  v-if="!$store.state.editMode"
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:88%;"
                >
                  {{
                    userRow
                  }}
                </table>
                <table
                  v-else
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:88%;"
                >
                  <tr>
                    <td
                      style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:14px;line-height:20px;color:#ffffff;text-align:right;"
                    >
                      <span style="font-style:italic;">
                        {FirstName} {LastName} &nbsp;
                        <a
                          href="\${clickthrough('preheader_signin', 'linkname=preheader_signin')}"
                          style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;text-decoration:underline;"
                          >Sign in</a
                        ></span
                      >
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table
      v-if="fields.statement"
      :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:500px;background-color:#01426a;"
    >
      <tr>
        <td align="center">
          <fragment v-if="!$store.state.editMode || $store.state.emailMode">
            {{ tableOneOpeningSnippet }}
          </fragment>
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="width:100%; max-width: 500px; background-color: #2774ae"
          >
            <tr>
              <td align="center" valign="top" style="width: 100%;">
                <table
                  role="presentation"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:92%; margin: 0 auto;"
                  class="w100"
                >
                  <tr>
                    <td
                      align="center"
                      style="font-size:0;vertical-align:top; padding-top: 15px;"
                    >
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ tableTwoOpeningSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:230px;vertical-align:top;"
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
                                    style="width:120px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:20px;color:#ffffff;text-align:center;"
                                  >
                                    <a
                                      href="${clickthrough('header_account','linkname=header_account')}"
                                      style="color:#ffffff;text-decoration:none;"
                                      >Your account &rsaquo;</a
                                    >
                                  </td>
                                  <td
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:20px;color:#ffffff;text-align:center;"
                                  >
                                    <a
                                      href="${clickthrough('header_book','linkname=header_book')}"
                                      style="color:#ffffff;text-decoration:none;"
                                      >Book a flight &rsaquo;</a
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ tableTwoMiddleSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width: 100%;max-width:230px;vertical-align:top;"
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
                                    style="width:120px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:20px;color:#ffffff;text-align:center;"
                                  >
                                    <a
                                      href="${clickthrough('header_redeem','linkname=header_redeem')}"
                                      style="color:#ffffff;text-decoration:none;"
                                      >Redeem miles &rsaquo;</a
                                    >
                                  </td>
                                  <td
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:15px;line-height:20px;color:#ffffff;text-align:center;"
                                  >
                                    <a
                                      href="${clickthrough('header_earn','linkname=header_earn')}"
                                      style="color:#ffffff;text-decoration:none;"
                                      >Earn miles &rsaquo;</a
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ closingSnippet }}
                      </fragment>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <fragment v-if="!$store.state.editMode || $store.state.emailMode">
            {{ closingSnippet }}
          </fragment>
        </td>
      </tr>
    </table>

    <!--/mp/tier info-->
  </td>
</template>

<script>
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAHeaderOneThird',
  mixins: [libComponentMixin],
  data: function() {
    return {
      tableOneOpeningSnippet: `<!--[if (gte mso 9)|(IE)]><table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr><td align="center" valign="top"><![endif]-->`,
      tableTwoOpeningSnippet: `<!--[if (gte mso 9)|(IE)]><table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:460px;"><tr><td align="center" style="width:50%;"><![endif]-->`,
      tableTwoMiddleSnippet: `<!--[if (gte mso 9)|(IE)]></td><td align="center" style="width:50%;"><![endif]-->`,
      closingSnippet: `<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->`,
      assigns: `
        <#assign dateCheck=.now?date>
        <!-- for header 04a v1 mp -->
        <#if MEMBER_NUM?has_content && MEMBER_NUM?c?string?length gt 4>
            <#assign hiddenMemNum=MEMBER_NUM?c?string?length - 4>
                <#assign MemNumLength=MEMBER_NUM?c?string?length - 0>
        </#if>
      `,
      userRow: `
          <#if MEMBER_NUM?has_content && (LOYALTY_STATUS !='Inactive' && LOYALTY_STATUS !='Merged' )>
            <!-- do nothing -->
          </#if>
          <#if MEMBER_NUM?has_content && (LOYALTY_STATUS !='Inactive' && LOYALTY_STATUS !='Merged' )>
              <tr>
                  <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:14px;line-height:20px;color:#ffffff;text-align:right;">
                    <span style="font-style:italic;">
                      <#if FIRST_NAME?has_content>\${FIRST_NAME?capitalize}
                          \${LAST_NAME?capitalize}<#else>Not a Mileage
                              Plan&trade;&nbsp;Member?</#if> &nbsp; <#if MEMBER_NUM?has_content><a href="\${clickthrough('preheader_signin', 'linkname=preheader_signin')}"
                              style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;text-decoration:underline;">Sign
                              in</a>
                          <#elseif !MEMBER_NUM?has_content> <a href="\${clickthrough('preheader_signup', 'linkname=preheader_signup')}" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;text-decoration:underline;">Sign
                                  up today</a>
                      </#if>
                    </span>
                  </td>
              </tr>
          </#if>

          <#if MEMBER_NUM?has_content && (LOYALTY_STATUS !='Inactive' && LOYALTY_STATUS !='Merged' )>
              <tr>
                  <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:14px;line-height:20px;color:#ffffff;text-align:right;">
                      <#if MEMBER_NUM?has_content && MEMBER_NUM?c?string?length gt 4>
                          xxxx\${MEMBER_NUM?c?string?substring(hiddenMemNum,MemNumLength)}
                          &nbsp;|&nbsp;<#elseif MEMBER_NUM?has_content && MEMBER_NUM?c?string?length lte 4>
                              xxxx\${MEMBER_NUM?c} &nbsp;|&nbsp;</#if>
                      <#if CURRENT_TIER?has_content>\${CURRENT_TIER}<#elseif CURRENT_TIER=='Regular'>Mileage Plan Member
                      </#if>
                  </td>
              </tr>
          </#if>
        `,
      fields: {
        mp: false,
        statement: false
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>

<style lang="scss" scoped></style>
