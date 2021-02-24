<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
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
      <fragment v-if="!$store.state.editMode">
        {{ assigns }}
      </fragment>

      <tr>
        <td align="center">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            align="center"
            style="width: 100%; max-width: 500px; background-color: #ffffff"
          >
            <tr>
              <td
                align="left"
                style="
                  padding-top: 30px;
                  padding-bottom: 30px;
                  padding-left: 20px;
                "
              >
                <a href="${clickthrough('logo_home','linkname=logo_home')}">
                  <ImageSelector
                    v-model="fields.file"
                    placeholder="/images/alaska/Alaska_OneWorld_lockup.png"
                    width="197"
                    border="0"
                    img-style="
                      width: 197px;
                      height: auto;
                      display: block;
                      font-family: Circular, Arial, sans-serif;
                      font-size: 20px;
                      color: #2774ae;"
                    alt="Alaska&reg; - oneworld"
                  />
                </a>
              </td>
              <td align="right" valign="top" style="vertical-align: top">
                <fragment v-if="!$store.state.editMode">
                  {{ msoStart }}
                </fragment>
                <div
                  class="ham_show"
                  style="
                    display: none;
                    overflow: hidden;
                    float: left;
                    width: 0px;
                    max-height: 0px;
                    max-width: 0px;
                    line-height: 0px;
                    visibility: hidden;
                  "
                >
                  <form style="margin: 0 auto; padding: 0; position: relative">
                    <input
                      id="nav_checkbox"
                      type="checkbox"
                      style="
                        display: none !important;
                        float: left;
                        overflow: hidden;
                        width: 0;
                        max-height: 0;
                        line-height: 0;
                      "
                    />
                    <label id="nav_handle" for="nav_checkbox">
                      <span></span>
                      <span></span>
                      <span></span>
                    </label>
                    <div id="nav_cont" style="display: none">
                      <div
                        id="nav_menu"
                        style="max-height: 0; overflow: hidden"
                      >
                        <p class="nav_perso">
                          <span
                            style="
                              font-size: 14px;
                              line-height: 17px;
                              letter-spacing: 0.25px;
                              font-family: Arial, 'Helvetica Neue', Helvetica,
                                sans-serif;
                              color: #2774ae;
                              text-align: right;
                            "
                          >
                            <strong>CLUB 49</strong>
                          </span>
                          <br style="line-height: 6px" /><br
                            style="line-height: 6px"
                          />
                          Hi,
                          <fragment v-if="!$store.state.editMode">
                            {{ userRow }}
                          </fragment>
                          <fragment v-else>
                            {FirstName}
                          </fragment>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <fragment v-if="!$store.state.editMode">
                  {{ msoEnd }}
                </fragment>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                  align="right"
                  style="width: 100%; max-width: 500px"
                  class="desktop_perso"
                >
                  <tr>
                    <td
                      style="
                        padding-top: 20px;
                        mso-padding-top-alt: 0px;
                        padding-right: 20px;
                        font-size: 14px;
                        line-height: 17px;
                        letter-spacing: 0.25px;
                        font-family: Arial, 'Helvetica Neue', Helvetica,
                          sans-serif;
                        color: #2774ae;
                        text-align: right;
                      "
                    >
                      <strong>CLUB 49</strong>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        padding-top: 3px;
                        padding-right: 20px;
                        font-family: Arial, 'Helvetica Neue', Helvetica,
                          sans-serif;
                        font-size: 12px;
                        line-height: 18px;
                        color: #2774ae;
                        text-align: right;
                      "
                    >
                      Hi,
                      <fragment v-if="!$store.state.editMode">
                        {{ userRow }}
                      </fragment>
                      <fragment v-else>
                        {FirstName}
                      </fragment>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <fragment v-if="!$store.state.editMode">
        {{ msoStart }}
      </fragment>
      <tr>
        <td align="center">
          <div
            class="ham_fallback_mob"
            style="
              display: none;
              overflow: hidden;
              float: left;
              width: 0px;
              max-height: 0px;
              max-width: 0px;
              line-height: 0px;
              visibility: hidden;
            "
          >
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              role="presentation"
              align="center"
              style="background-color: #ffffff; width: 100%"
            >
              <tr>
                <td
                  style="
                    padding-right: 20px;
                    font-size: 14px;
                    line-height: 17px;
                    letter-spacing: 0.25px;
                    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                    color: #2774ae;
                    text-align: right;
                  "
                >
                  <strong>CLUB 49</strong>
                </td>
              </tr>
              <tr>
                <td
                  align="right"
                  style="
                    padding-bottom: 10px;
                    padding-right: 20px;
                    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                    font-size: 12px;
                    line-height: 18px;
                    color: #2774ae;
                    text-align: right;
                  "
                >
                  Hi,
                  <fragment v-if="!$store.state.editMode">
                    {{ userRow }}
                  </fragment>
                  <fragment v-else>
                    {FirstName}
                  </fragment>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
      <fragment v-if="!$store.state.editMode">
        {{ msoEnd }}
      </fragment>
    </table>
    <fragment v-else>
      {{ responsysInclude }}
    </fragment>
  </td>
</template>

<script>
import { libComponentMixin } from "@/shared/mixins"

export default {
  name: "ASAOWHeaderC49",
  mixins: [libComponentMixin],
  data: function () {
    return {
      assigns: `<#if MEMBER_NUM?has_content && MEMBER_NUM?c?string?length gt 4><#assign hiddenMemNum=MEMBER_NUM?c?string?length - 4><#assign MemNumLength=MEMBER_NUM?c?string?length - 0></#if><#assign dateCheck=.now?date>`,
      userRow: "<#if MEMBER_NUM?has_content && (LOYALTY_STATUS !='Inactive' && LOYALTY_STATUS !='Merged' )><#if FIRST_NAME?has_content>${FIRST_NAME?capitalize}</#if> <#if MEMBER_NUM?has_content>&nbsp;|&nbsp;<a href='${clickthrough('preheader_signin','linkname=preheader_signin')}' style='text-decoration: underline; color: #2774ae;'>Sign In</a></#if><br /><#if CURRENT_TIER?has_content>${CURRENT_TIER}:<#elseif CURRENT_TIER=='Regular'>Mileage Plan Member:</#if><#if MEMBER_NUM?has_content && MEMBER_NUM?c?string?length gt 4>xxxx${MEMBER_NUM?c?string?substring(hiddenMemNum,MemNumLength)}<#elseif MEMBER_NUM?has_content && MEMBER_NUM?c?string?length lte 4>xxxx${MEMBER_NUM?c}</#if></#if>",
      msoStart: "<!--[if !mso]><!-->",
      msoEnd: "<!--<![endif]-->",
      responsysInclude: '<#include "cms://contentlibrary/globalassets/asa_ow/asaow_hdr_c49_500.htm">',
      fields: {
        file: null,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
