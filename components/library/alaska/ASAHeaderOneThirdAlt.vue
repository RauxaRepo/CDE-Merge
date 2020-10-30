<template>
  <td :key="$store.state.editMode ? `${component.id}_Edit` : component.id " align="center">
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:500px;background-color:#ffffff;border-radius:6px 6px 0 0;"
    >
      <tr>
        <td valign="top" align="left">
          <fragment v-if="!$store.state.editMode">
            {{ assigns }}
          </fragment>
          <!-- logo -->
          <a
            href="${clickthrough('Logo_Home','linkname=Logo_Home','date_var='+deploy_date)}"
            style="text-decoration:none;"
          >
            <img
              v-if="!$store.state.editMode"
              src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/templates/header/ALA_Header_Desktop_${headerimg}.gif"
              width="500"
              border="0"
              alt="Alaska&reg;"
              style="display:block;border:0;outline:0;padding:0;width:100%;max-width:500px;height:auto;border-radius:4px 4px 0 0; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
              class="$lookup(headerimg)$"
            />
            <img
              v-else
              src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/templates/header/ALA_Header_Desktop_AS.gif"
              width="500"
              border="0"
              alt="Alaska&reg;"
              style="display:block;border:0;outline:0;padding:0;width:100%;max-width:500px;height:auto;border-radius:4px 4px 0 0; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;color:#ffffff;"
              class="$lookup(headerimg)$"
            />
          </a>
          <!-- / logo -->
        </td>
      </tr>
      <fragment v-if="!$store.state.editMode">
        {{ userRow }}
      </fragment>
      <tr v-else>
        <td
          valign="top"
          style="padding:0 17px;padding-bottom:10px;border-bottom:2px solid #e9e9e9;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:20px;color:#3c3b3f;text-align:right;"
          class="user-info"
        >
          Hello {FirstName}
          <span class="mbl-hide">&nbsp;|&nbsp;</span>
          <span class="mbl-blk"></span>
          <strong>{Current Tier}</strong>
          &nbsp;|&nbsp;
          <a
            href="\${clickthrough('PreHeader_SignIn','linkname=PreHeader_SignIn','date_var='+deploy_date)}"
            style="color:#2774ad;text-decoration:underline;"
          >
            Sign&nbsp;in
          </a>
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAHeaderOneThirdAlt',
  mixins: [libComponentMixin],
  data: function() {
    return {
      assigns: `
        <!-- Assigning header image -->
        <#assign headerimg="">
        <#if LOYALTY_STATUS =="Active">

        <#if MINFO_MILLION_MILE =="Yes">
        <#assign headerimg="ASMM">
        <#elseif CURRENT_TIER=="MVP Gold 75K">
        <#assign headerimg="ASGold75K">
        <#elseif CURRENT_TIER=="MVP Gold">
        <#assign headerimg="ASMVPGold">
        <#elseif CURRENT_TIER=="MVP">
        <#assign headerimg="ASMVP">
        <#elseif CURRENT_TIER=="Regular">
        <#assign headerimg="AS">
        <#else>
        <#assign headerimg="AS">
        </#if>

        </#if>
      `,
      userRow: `
          <#if MEMBER_INFO.MEMBER_NUM gte 0 && (MEMBER_INFO.LOYALTY_STATUS ='Active')>
          <tr>
          <td valign="top" style="padding:0 17px;padding-bottom:10px;border-bottom:2px solid #e9e9e9;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:20px;color:#3c3b3f;text-align:right;" class="user-info">
          <#if FIRST_NAME !="">\${"Hello, " + FIRST_NAME?capitalize}<#else>Hello</#if><span class="mbl-hide">&nbsp;|&nbsp;</span><span class="mbl-blk"></span> 
          <strong>
          <#if MINFO_MILLION_MILE =="Yes">
          Million Miler
          <#elseif CURRENT_TIER=="Regular">
          Mileage Plan Member
          <#elseif CURRENT_TIER=="">
          <#else>
          \${CURRENT_TIER}
          </#if>
              </strong> &nbsp;|&nbsp; 
              <a href="\${clickthrough('PreHeader_SignIn','linkname=PreHeader_SignIn','date_var='+deploy_date)}" style="color:#2774ad;text-decoration:underline;">Sign&nbsp;in</a>
              </td>
              </tr>
          <#elseif MEMBER_INFO.MEMBER_NUM gte 0 && (MEMBER_INFO.LOYALTY_STATUS ='Inactive')>
          <tr>
              <td valign="top" style="padding:0 17px;padding-bottom:10px;border-bottom:2px solid #e9e9e9;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:20px;color:#3c3b3f;text-align:right;" class="user-info">
              <#if FIRST_NAME !="">\${"Hello, " + FIRST_NAME?capitalize}<#else></#if> 
              </td>
          </tr>
          </#if>
        `,
      fields: {
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
