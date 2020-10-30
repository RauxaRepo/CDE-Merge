<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
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
          <!-- logo -->
          <a
            href="${clickthrough('Logo_Home','linkname=Logo_Home')}"
            style="text-decoration:none;"
          >
            <img
              src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/ALA_BI_Header_Logox2_01_370x220_Lounge.jpg"
              width="185"
              border="0"
              alt="Alaska&reg; Lounge"
              style="display:block;border:0;outline:0;padding:0;width:100%;max-width:185px;height:auto;border-radius:4px 0 0 0;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
            />
          </a>
          <!-- / logo -->
        </td>
        <td valign="bottom" style="width:60%;">
          <!--mp/tier info-->
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="width:100%;"
          >
            <tr>
              <td
                v-if="!$store.state.editMode"
                align="center"
                style="padding:15px 0;"
              >
                {{ userRow }}
              </td>
              <td v-else align="center" style="padding:15px 0;">
                <table
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
                      <span style="font-style:italic;">{Firstname}</span>, not a
                      Mileage Plan&trade;&nbsp;member?<br /><a
                        href="\${clickthrough('PreHeader_SignUp', 'linkname=PreHeader_SignUp')}"
                        style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;text-decoration:underline;"
                        >Sign up today</a
                      >
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!--/mp/tier info-->
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAHeaderLounge',
  mixins: [libComponentMixin],
  data: function() {
    return {
      assigns: `
        <#if MEMBER_NUM?has_content && MEMBER_NUM?c?string?length gt 4>
            <#assign hiddenMemNum = MEMBER_NUM?c?string?length - 4>
            <#assign MemNumLength = MEMBER_NUM?c?string?length - 0>
        </#if>
      `,
      userRow: `
        <#if MEMBER_INFO.MEMBER_NUM gte 1 && (MEMBER_INFO.LOYALTY_STATUS == 'Active')>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:88%;">
            <tr>
                <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:14px;line-height:20px;color:#ffffff;text-align:right;">
                    <em><#if FIRST_NAME?has_content>\${FIRST_NAME?capitalize}</#if></em> &nbsp;
                    <a href="\${clickthrough('PreHeader_SignIn', 'linkname=PreHeader_SignIn')}" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;text-decoration:underline;">Sign in</a>
                </td>
            </tr>
            <tr>
                <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:14px;line-height:20px;color:#ffffff;text-align:right;">
                    <#if MEMBER_NUM?has_content && MEMBER_NUM?c?string?length gt 4>xxxx\${MEMBER_NUM?c?string?substring(hiddenMemNum,MemNumLength)} 
                        &nbsp;|&nbsp;
                    <#elseif MEMBER_NUM?has_content && MEMBER_NUM?c?string?length lte 4> xxxx\${MEMBER_NUM?c} 
                        &nbsp;|&nbsp;
                    </#if>
                    <#if CURRENT_TIER?has_content>\${CURRENT_TIER}</#if>
                </td>
            </tr>
            </table>
        <#else>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:88%;">
            <tr>
                <td style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:14px;line-height:20px;color:#ffffff;text-align:right;">
                    <#if FIRST_NAME?has_content><span style="font-style:italic;">\${FIRST_NAME?capitalize}</span>, not a Mileage Plan&trade;&nbsp;member?<#else> Not a Mileage Plan&trade;&nbsp;member?</#if><br /><a href="\${clickthrough('PreHeader_SignUp', 'linkname=PreHeader_SignUp')}" style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;text-decoration:underline;">Sign up today</a>
                </td>
            </tr>
            </table>
        </#if>
        `,
      fields: {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
