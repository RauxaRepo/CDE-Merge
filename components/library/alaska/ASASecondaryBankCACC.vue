<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
    style="background-color: #ffffff;padding-bottom: 30px; padding-top:45px;"
  >
    <portal v-if="$store.state.editingId === component.id" to="controls">
      <div class="white-area">
        <h2>{{ containerText }}</h2>
      </div>
      <h4>Left</h4>
      <b-field>
        <b-checkbox v-model="fields.bagsOne">
          Bags
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showCtaOne">
          CTA
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.disclaimerOne">
          Disclaimer
        </b-checkbox>
      </b-field>
      <div class="section-separator"></div>
      <h4>Right</h4>
      <b-field>
        <b-checkbox v-model="fields.bagsTwo">
          Bags
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.showCtaTwo">
          CTA
        </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox v-model="fields.disclaimerTwo">
          Disclaimer
        </b-checkbox>
      </b-field>
    </portal>
    <style type="text/css">
      @media screen and (max-device-width: 480px) {
        .mob_divider {
          height: 1px !important;
          width: 80px !important;
          line-height: 1px !important;
        }
        .padtop30 {
          padding-top: 30px !important;
        }
        .ptb45 {
          padding-top: 45px !important;
          padding-bottom: 45px !important;
        }
        .pad0 {
          padding: 0 !important;
        }
      }
    </style>
    <style
      v-if="
        $store.state.editMode &&
          $store.state.previewMode &&
          $store.state.mobilePreview
      "
      type="text/css"
    >
      .mob_divider {
        height: 1px !important;
        width: 80px !important;
        line-height: 1px !important;
      }
      .padtop30 {
        padding-top: 30px !important;
      }
      .ptb45 {
        padding-top: 45px !important;
        padding-bottom: 45px !important;
      }
      .pad0 {
        padding: 0 !important;
      }
    </style>
    <table
      align="center"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:500px;background-color: #ffffff;"
    >
      <tr>
        <!-- pad left -->
        <th
          width="45"
          align="center"
          class="hide"
          style="width:45px;background-color: #ffffff;"
        >
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            align="center"
            role="presentation"
            width="45"
            style="width: 45px; margin: 0;background-color: #ffffff;"
            class="hide"
          >
            <tr>
              <td style="background-color: #ffffff; font-size:0;">
                &nbsp;
              </td>
            </tr>
          </table>
        </th>
        <!-- LEFT COLUMN  -->
        <th
          valign="top"
          width="175"
          align="center"
          style="width:175px; vertical-align: top;"
          class="mbl-blk w100"
        >
          <table
            width="175"
            cellpadding="0"
            cellspacing="0"
            border="0"
            align="center"
            role="presentation"
            style="width:175px;margin: 0;"
            class="w100"
          >
            <tr>
              <td
                width="175"
                align="center"
                style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; text-align:center;"
                class="padtop30"
              >
                <a
                  v-if="!$store.state.editMode && fields.imageOneLink"
                  :href="fields.imageOneLink"
                  style="text-decoration:none;"
                >
                  <ImageSelector
                    v-model="fields.imageOne"
                    width="168"
                    border="0"
                    align="center"
                    :alt="fields.imageOneAlt"
                    img-style="display: block;border:0;outline:0;padding:0;width:100%;max-width:168px;height:auto;font-family:Arial,'Helvetica Neue', Helvetica,sans-serif;font-size:14px;color:#3c3b3f; margin: 0 auto;"
                  />
                </a>
                <ImageSelector
                  v-else
                  v-model="fields.imageOne"
                  width="168"
                  border="0"
                  align="center"
                  :alt="fields.imageOneAlt"
                  img-style="display: block;border:0;outline:0;padding:0;width:100%;max-width:168px;height:auto;font-family:Arial,'Helvetica Neue', Helvetica,sans-serif;font-size:14px;color:#3c3b3f; margin: 0 auto;"
                >
                  <LinkField v-model="fields.imageOneLink" />
                  <b-field label="Alt">
                    <b-input v-model.lazy="fields.imageOneAlt"></b-input>
                  </b-field>
                </ImageSelector>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:24px;line-height:34px;color:#01426A;text-align:center; padding-top: 35px; font-weight: bold;"
              >
                <TextInput
                  v-model.lazy="fields.headlineOne"
                  sup-style="font-size:55%; line-height:8px; vertical-align:8px;"
                  inline="true"
                />
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="padding-top: 30px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#48A9C5; font-weight: bold;"
              >
                <table
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                >
                  <tr v-if="fields.bagsOne">
                    <td
                      align="center"
                      style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; text-align:center; font-weight: bold;"
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        width="100"
                        style="width:100px;"
                      >
                        <tr>
                          <td
                            align="center"
                            style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:48px;line-height:48px;text-align:center; font-weight: bold;"
                          >
                            <TextInput
                              v-model.lazy="fields.amountOne"
                              inline="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="center"
                            height="66"
                            valign="top"
                            style="height:66px; vertical-align:top; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:19px;text-align:center; font-weight: bold;"
                          >
                            bonus mile offer<span
                              style="font-size:55%; line-height:6px; vertical-align:6px;"
                              >&dagger;&dagger;</span
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td align="center" width="10" style="width:10px;"></td>
                    <td align="center">
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        width="65"
                        style="width:65px;"
                      >
                        <tr>
                          <td
                            align="center"
                            style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:14px;text-align:center; font-weight: bold;"
                          >
                            up<br />to
                          </td>
                          <td
                            align="center"
                            style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:48px;line-height:48px;text-align:center; font-weight: bold;"
                          >
                            <TextInput
                              v-model.lazy="fields.bagsAmountOne"
                              inline="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            colspan="2"
                            align="center"
                            height="66"
                            valign="top"
                            style="height:66px; vertical-align:top; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:19px;text-align:center; font-weight: bold;"
                          >
                            checked bags<span
                              style="font-size:55%; line-height:6px; vertical-align:6px;"
                              >æ</span
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr v-if="!fields.bagsOne">
                    <td
                      align="center"
                      style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:48px;line-height:48px;text-align:center; font-weight: bold;"
                    >
                      <TextInput
                        v-model.lazy="fields.amountOne"
                        inline="true"
                      />
                    </td>
                  </tr>
                  <tr v-if="!fields.bagsOne">
                    <td
                      align="center"
                      valign="top"
                      height="66"
                      style="height: 66px; vertical-align:top; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:19px;text-align:center; font-weight: bold;"
                    >
                      bonus mile<br />offer<span
                        style="font-size:55%; line-height:6px; vertical-align:6px;"
                        >&dagger;&dagger;</span
                      >
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr v-if="fields.showCtaOne">
              <td
                align="center"
                style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:19px;color:#48A9C5; font-weight: bold;"
              >
                <fragment v-if="!$store.state.editMode">
                  {{ ctaSnippet }}
                </fragment>
                <table
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  class="primary_card_offer_cta_platinum"
                >
                  <tr>
                    <td>
                      <div>
                        <a
                          v-if="
                            (!$store.state.editMode ||
                              $store.state.previewMode) &&
                              fields.ctaOneLink
                          "
                          :href="fields.ctaOneLink"
                          style="background-color:#48a9c5; padding: 14px 20px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse;"
                          class="resetBorder btnBreezeBlue"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaOneText"
                            inline="true"
                          />
                        </a>
                        <span
                          v-else
                          style="background-color:#48a9c5; padding: 14px 20px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse;"
                          class="resetBorder btnBreezeBlue"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaOneText"
                            inline="true"
                          >
                            <LinkField v-model="fields.ctaOneLink" />
                          </TextInput>
                        </span>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- /border cta -->
              </td>
            </tr>
          </table>

          <table
            v-if="fields.disclaimerOne"
            width="175"
            cellpadding="0"
            cellspacing="0"
            border="0"
            align="center"
            role="presentation"
            style="width:175px;margin: 0;"
          >
            <tr>
              <td>
                <tr>
                  <td
                    align="center"
                    style="padding-top: 30px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:14px;line-height:22px;color:#3C3B3F;text-align:center; font-weight: normal;"
                  >
                    Available for individuals<br class="hide" />
                    with income greater than<br class="hide" />
                    <TextInput
                      v-model.lazy="fields.disclaimerOneAmountOne"
                      inline="true"
                    />
                    or households<br class="hide" />
                    greater than
                    <TextInput
                      v-model.lazy="fields.disclaimerOneAmountTwo"
                      inline="true"
                    />&nbsp;CAD.<span
                      style="font-size:55%; line-height:6px; vertical-align:6px;"
                      >&dagger;&dagger;&dagger;</span
                    >
                  </td>
                </tr>
              </td>
            </tr>
          </table>
        </th>
        <!-- divider line - reformats for mobile -->
        <th
          width="45"
          valign="top"
          align="center"
          class="mbl-blk ptb45 w100"
          style="width:45px; vertical-align: top;"
        >
          <table
            height="582"
            width="1"
            cellpadding="0"
            cellspacing="0"
            border="0"
            role="presentation"
            style="height:582px;width:1px;margin: 0px 15px;"
            class="mob_divider w100"
          >
            <tr>
              <td
                height="582"
                width="1"
                style="height:582px; width:1px; max-width: 1px; font-size:0;line-height:582px; background-color:#DFDFDF;"
                class="mob_divider"
              >
                &nbsp;
              </td>
            </tr>
          </table>
        </th>
        <!-- RIGHT COLUMN  -->
        <th
          valign="top"
          width="175"
          align="center"
          class="mbl-blk w100"
          style="width:175px; vertical-align: top;"
        >
          <table
            width="175"
            cellpadding="0"
            cellspacing="0"
            border="0"
            align="center"
            role="presentation"
            style="width:175px;margin: 0;"
            class="w100"
          >
            <tr>
              <td
                align="center"
                width="168"
                style="width:168px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; text-align:center;"
                class="w100"
              >
                <a
                  v-if="!$store.state.editMode && fields.imageTwoLink"
                  :href="fields.imageTwoLink"
                  style="text-decoration:none;"
                >
                  <ImageSelector
                    v-model="fields.imageTwo"
                    width="168"
                    border="0"
                    :alt="fields.imageTwoAlt"
                    img-style="display: block;border:0;outline:0;padding:0;width:100%;max-width:168px;height:auto;font-family:Arial,'Helvetica Neue', Helvetica,sans-serif;font-size:14px;color:#3c3b3f; margin: 0 auto;"
                  />
                </a>
                <ImageSelector
                  v-else
                  v-model="fields.imageTwo"
                  width="168"
                  border="0"
                  :alt="fields.imageTwoAlt"
                  img-style="display: block;border:0;outline:0;padding:0;width:100%;max-width:168px;height:auto;font-family:Arial,'Helvetica Neue', Helvetica,sans-serif;font-size:14px;color:#3c3b3f; margin: 0 auto;"
                >
                  <LinkField v-model="fields.imageTwoLink" />
                  <b-field label="Alt">
                    <b-input v-model.lazy="fields.imageTwoAlt"></b-input>
                  </b-field>
                </ImageSelector>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:24px;line-height:34px;color:#01426A;text-align:center; padding-top: 35px; font-weight: bold;"
              >
                <TextInput
                  v-model.lazy="fields.headlineTwo"
                  sup-style="font-size:55%; line-height:8px; vertical-align:8px;"
                  inline="true"
                />
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="padding-top: 30px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#53B390; font-weight: bold;"
              >
                <table
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  role="presentation"
                >
                  <tr v-if="fields.bagsTwo">
                    <td
                      align="center"
                      style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; text-align:center; font-weight: bold;"
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        width="100"
                        style="width:100px;"
                      >
                        <tr>
                          <td
                            align="center"
                            style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:48px;line-height:48px;text-align:center; font-weight: bold;"
                          >
                            <TextInput
                              v-model.lazy="fields.amountTwo"
                              inline="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="center"
                            height="66"
                            valign="top"
                            style="height:66px; vertical-align:top; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:19px;text-align:center; font-weight: bold;"
                          >
                            bonus mile offer<span
                              style="font-size:55%; line-height:6px; vertical-align:6px;"
                              >&dagger;&dagger;</span
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td align="center" width="10" style="width:10px;"></td>
                    <td align="center">
                      <table
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        role="presentation"
                        width="65"
                        style="width:65px;"
                      >
                        <tr>
                          <td
                            align="center"
                            style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:14px;text-align:center; font-weight: bold;"
                          >
                            up<br />to
                          </td>
                          <td
                            align="center"
                            style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:48px;line-height:48px;text-align:center; font-weight: bold;"
                          >
                            <TextInput
                              v-model.lazy="fields.bagsAmountTwo"
                              inline="true"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            colspan="2"
                            align="center"
                            height="66"
                            valign="top"
                            style="height:66px; vertical-align:top; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:19px;text-align:center; font-weight: bold;"
                          >
                            checked bags<span
                              style="font-size:55%; line-height:6px; vertical-align:6px;"
                              >æ</span
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr v-if="!fields.bagsTwo">
                    <td
                      align="center"
                      style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:48px;line-height:48px;text-align:center; font-weight: bold;"
                    >
                      <TextInput
                        v-model.lazy="fields.amountTwo"
                        inline="true"
                      />
                    </td>
                  </tr>
                  <tr v-if="!fields.bagsTwo">
                    <td
                      align="center"
                      valign="top"
                      height="66"
                      style="height: 66px; vertical-align:top; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:19px;text-align:center; font-weight: bold;"
                    >
                      bonus mile<br />offer<span
                        style="font-size:55%; line-height:6px; vertical-align:6px;"
                        >&dagger;&dagger;</span
                      >
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr v-if="fields.showCtaTwo">
              <td
                align="center"
                style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:16px;line-height:19px;color:#48A9C5; font-weight: bold;"
              >
                <table
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  class="primary_card_offer_cta_elite"
                >
                  <tr>
                    <td>
                      <div>
                        <a
                          v-if="
                            (!$store.state.editMode ||
                              $store.state.previewMode) &&
                              fields.ctaTwoLink
                          "
                          :href="fields.ctaTwoLink"
                          style="background-color:#4DB38E; padding: 14px 20px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse;"
                          class="resetBorder btnPalm"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaTwoText"
                            inline="true"
                          />
                        </a>
                        <span
                          v-else
                          style="background-color:#4DB38E; padding: 14px 20px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse;"
                          class="resetBorder btnPalm"
                        >
                          <TextInput
                            v-model.lazy="fields.ctaTwoText"
                            inline="true"
                          >
                            <LinkField v-model="fields.ctaTwoLink" />
                          </TextInput>
                        </span>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- /border cta -->
              </td>
            </tr>
          </table>

          <table
            v-if="fields.disclaimerTwo"
            width="175"
            cellpadding="0"
            cellspacing="0"
            border="0"
            align="center"
            role="presentation"
            style="width:175px;margin: 0;"
          >
            <tr>
              <td>
                <tr>
                  <td
                    align="center"
                    style="padding-top: 30px; font-family:Arial,'Helvetica Neue',Helvetica,sans-serif; font-size:14px;line-height:22px;color:#3C3B3F;text-align:center; font-weight: normal;"
                  >
                    Available for individuals<br class="hide" />
                    with income greater than<br class="hide" />
                    <TextInput
                      v-model.lazy="fields.disclaimerTwoAmountOne"
                      inline="true"
                    />
                    or households<br class="hide" />
                    greater than
                    <TextInput
                      v-model.lazy="fields.disclaimerTwoAmountTwo"
                      inline="true"
                    />&nbsp;CAD.<span
                      style="font-size:55%; line-height:6px; vertical-align:6px;"
                      >&dagger;&dagger;&dagger;</span
                    >
                  </td>
                </tr>
              </td>
            </tr>
          </table>
        </th>
        <!-- pad right -->
        <th
          width="45"
          align="center"
          class="hide"
          style="width:45px;background-color: #ffffff;"
        >
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            align="center"
            role="presentation"
            width="45"
            style="width: 45px; margin: 0;background-color: #ffffff;"
            class="hide"
          >
            <tr>
              <td style="background-color: #ffffff; font-size:0;">
                &nbsp;
              </td>
            </tr>
          </table>
        </th>
      </tr>
    </table>
  </td>
</template>

<script>
import ImageSelector from '@/components/core/inputs/ImageSelector'
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASASecondaryBankCACC',
  components: {
    LinkField,
    TextInput,
    ImageSelector
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      ctaSnippet: `
        <!-- border cta -->
        <!--[if gte mso 9]>
        <style type="text/css">
        .primary_card_offer_cta_platinum {
        background-color:#48a9c5 !important;
        padding:14px 20px !important;
        border-collapse:collapse !important;
        }
        .primary_card_offer_cta_elite {
        background-color:#4db38e !important;
        padding:14px 20px !important;
        border-collapse:collapse !important;
        }
        
        .resetBorder {
        border:none !important;
        }
        
        </style>
        <![endif]-->
        `,
      fields: {
        imageOne:
          'https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20201002_CA-ITA_ccimg_A.png',
        imageOneAlt: 'Alaska Airlines Platinum Plus Mastercard®',
        imageOneLink: `\${clickthrough('primary_card_offer_img1_platinum','linkname=primary_card_offer_img1_platinum')}`,
        imageTwo:
          'https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20201002_CA-ITA_ccimg_B.png',
        imageTwoAlt: 'Alaska Airlines World Elite Mastercard®',
        imageTwoLink: `\${clickthrough('primary_card_offer_img2_elite','linkname=primary_card_offer_img2_elite')}`,
        headlineOne: `<p>Alaska Airlines</p><p>Platinum Plus</p><p>Mastercard <sup>&reg;</sup></p>`,
        headlineTwo: `<p>Alaska Airlines</p><p>World Elite</p><p>Mastercard <sup>&reg;</sup></p>`,
        amountOne: '30k',
        bagsOne: false,
        bagsAmountOne: '6',
        amountTwo: '20k',
        bagsTwo: true,
        bagsAmountTwo: '6',
        showCtaOne: true,
        ctaOneText: 'APPLY NOW',
        ctaOneLink: `\${clickthrough('primary_card_offer_cta_platinum','linkname=primary_card_offer_cta_platinum')}`,
        showCtaTwo: true,
        ctaTwoText: 'APPLY NOW',
        ctaTwoLink: `\${clickthrough('primary_card_offer_cta_elite','linkname=primary_card_offer_cta_elite')}`,
        disclaimerOne: false,
        disclaimerOneAmountOne: '$80,000',
        disclaimerOneAmountTwo: '$150,000',
        disclaimerTwo: true,
        disclaimerTwoAmountOne: '$80,000',
        disclaimerTwoAmountTwo: '$150,000'
      }
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>
