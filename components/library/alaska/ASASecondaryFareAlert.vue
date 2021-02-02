<template>
  <td
    :key="$store.state.editMode ? `${component.id}_Edit` : component.id"
    align="center"
  >
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:500px;"
    >
      <tr>
        <td style="background-color:#ffffff;">
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="width:100%;"
          >
            <tr>
              <td align="center" style="padding:25px 0;">
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:92%; max-width: 460px;"
                >
                  <!-- fare alert a -->
                  <tr>
                    <td
                      align="center"
                      style=" padding-top: 20px; padding-bottom:20px;font-size:0;"
                      class="center_mob"
                    >
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ openTableSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:310px; vertical-align:top; float: left;"
                        class="floatnone"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:100%;"
                          dir="rtl"
                        >
                          <tr>
                            <td
                              style="width:65%;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:18px;line-height:22px;color:#3c3b3f;text-align:left; vertical-align:top;padding-left: 20px;"
                              class="full"
                              dir="ltr"
                            >
                              <span
                                style="text-transform: uppercase; font-size: 11px; line-height: 17px;"
                                >DEPARTURECITY to</span
                              >
                              <br />
                              <span style="font-weight: bold;">
                                ARRIVALCITY
                              </span>
                            </td>
                            <td
                              style="width:35%;"
                              class="full"
                              dir="ltr"
                              align="left"
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
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:43px;line-height:43px;color:#48a9c5;text-align:center; vertical-align:top;mso-line-height-rule:exactly;"
                                    class="full mbl-padding-top10"
                                  >
                                    <span
                                      style="font-size:55%; line-height:12px; vertical-align:12px;"
                                      >$</span
                                    >XX<span
                                      style="font-size:40%; line-height:18px; vertical-align:18px;"
                                      >*</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;line-height:11px;color:#48a9c5;text-align:center; vertical-align:top;"
                                    class="full mbl-padding-left0"
                                  >
                                    ONE WAY
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ middleTableSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:140px;vertical-align:top;text-align:center;margin:0 auto; float: right;"
                        class="floatnone"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:140px;"
                        >
                          <tr>
                            <td
                              align="center"
                              height="44"
                              style="height:44px;text-align:center;"
                              class="mbl-padding-top"
                            >
                              <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                                {{ ctaSnippet }}
                              </fragment>
                              <table
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                class="primary17_fare_module_cta"
                                align="center"
                              >
                                <tr>
                                  <td>
                                    <div>
                                      <a
                                        v-if="
                                          (!$store.state.editMode ||
                                            $store.state.previewMode) &&
                                            fields.bookCtaLink
                                        "
                                        :href="fields.bookCtaLink"
                                        style="background-color:#48a9c5; border: 2px solid #48a9c5; padding: 10px 25px 8px 25px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse; letter-spacing: .3px;"
                                        class="resetBorder buttonHover"
                                      >
                                        <TextInput
                                          v-model.lazy="fields.bookCtaText"
                                          inline="true"
                                        />
                                      </a>
                                      <span
                                        v-else
                                        style="background-color:#48a9c5; border: 2px solid #48a9c5; padding: 10px 25px 8px 25px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse; letter-spacing: .3px;"
                                        class="resetBorder buttonHover"
                                      >
                                        <TextInput
                                          v-model.lazy="fields.bookCtaText"
                                          inline="true"
                                        >
                                          <LinkField
                                            v-model="fields.bookCtaLink"
                                          />
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
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ closeTableSnippet }}
                      </fragment>
                    </td>
                  </tr>
                  <!-- / fare alert a -->
                  <!-- 2px GREY DIVIDER, this should NOT show for the final fare -->
                  <tr>
                    <td>
                      <hr
                        noshade
                        color="#FFFFFF"
                        width="100%"
                        size="2"
                        style="padding:0; margin:0 auto; border:none; width:100%; height: 2px; color:#eeeeee; background-color: #eeeeee"
                        class="hr_mob_50"
                      />
                    </td>
                  </tr>
                  <!-- fare alert b -->
                  <tr>
                    <td
                      align="center"
                      style=" padding-top: 20px; padding-bottom:20px;font-size:0;"
                      class="center_mob"
                    >
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ openTableSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:310px; vertical-align:top; float: left;"
                        class="floatnone"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:100%;"
                          dir="rtl"
                        >
                          <tr>
                            <td
                              style="width:65%;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:18px;line-height:22px;color:#3c3b3f;text-align:left; vertical-align:top;padding-left: 20px;"
                              class="full"
                              dir="ltr"
                            >
                              <span
                                style="text-transform: uppercase; font-size: 11px; line-height: 17px;"
                                >DEPARTURECITY to</span
                              >
                              <br />
                              <span style="font-weight: bold;">
                                ARRIVALCITY
                              </span>
                            </td>
                            <td
                              style="width:35%;"
                              class="full"
                              dir="ltr"
                              align="left"
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
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:43px;line-height:43px;color:#48a9c5;text-align:center; vertical-align:top;mso-line-height-rule:exactly;"
                                    class="full mbl-padding-top10"
                                  >
                                    <span
                                      style="font-size:55%; line-height:12px; vertical-align:12px;"
                                      >$</span
                                    >XX<span
                                      style="font-size:40%; line-height:18px; vertical-align:18px;"
                                      >*</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;line-height:11px;color:#48a9c5;text-align:center; vertical-align:top;"
                                    class="full mbl-padding-left0"
                                  >
                                    ONE WAY
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ middleTableSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:140px;vertical-align:top;text-align:center;margin:0 auto; float: right;"
                        class="floatnone"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:140px;"
                        >
                          <tr>
                            <td
                              align="center"
                              height="44"
                              style="height:44px;text-align:center;"
                              class="mbl-padding-top"
                            >
                              <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                                {{ ctaSnippet }}
                              </fragment>
                              <table
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                class="primary17_fare_module_cta"
                                align="center"
                              >
                                <tr>
                                  <td>
                                    <div>
                                      <a
                                        v-if="
                                          (!$store.state.editMode ||
                                            $store.state.previewMode) &&
                                            fields.bookCtaLink
                                        "
                                        :href="fields.bookCtaLink"
                                        style="background-color:#48a9c5; border: 2px solid #48a9c5; padding: 10px 25px 8px 25px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse; letter-spacing: .3px;"
                                        class="resetBorder buttonHover"
                                      >
                                        <TextInput
                                          v-model.lazy="fields.bookCtaText"
                                          inline="true"
                                        />
                                      </a>
                                      <span
                                        v-else
                                        style="background-color:#48a9c5; border: 2px solid #48a9c5; padding: 10px 25px 8px 25px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse; letter-spacing: .3px;"
                                        class="resetBorder buttonHover"
                                      >
                                        <TextInput
                                          v-model.lazy="fields.bookCtaText"
                                          inline="true"
                                        >
                                          <LinkField
                                            v-model="fields.bookCtaLink"
                                          />
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
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ closeTableSnippet }}
                      </fragment>
                    </td>
                  </tr>
                  <!-- / fare alert b -->
                  <!-- 2px GREY DIVIDER, this should NOT show for the final fare -->
                  <tr>
                    <td>
                      <hr
                        noshade
                        color="#FFFFFF"
                        width="100%"
                        size="2"
                        style="padding:0; margin:0 auto; border:none; width:100%; height: 2px; color:#eeeeee; background-color: #eeeeee"
                        class="hr_mob_50"
                      />
                    </td>
                  </tr>

                  <!-- fare alert c -->
                  <tr>
                    <td
                      align="center"
                      style=" padding-top: 20px; padding-bottom:20px;font-size:0;"
                      class="center_mob"
                    >
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ openTableSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:310px; vertical-align:top; float: left;"
                        class="floatnone"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:100%;"
                          dir="rtl"
                        >
                          <tr>
                            <td
                              style="width:65%;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:18px;line-height:22px;color:#3c3b3f;text-align:left; vertical-align:top;padding-left: 20px;"
                              class="full"
                              dir="ltr"
                            >
                              <span
                                style="text-transform: uppercase; font-size: 11px; line-height: 17px;"
                                >DEPARTURECITY to</span
                              >
                              <br />
                              <span style="font-weight: bold;">
                                ARRIVALCITY
                              </span>
                            </td>
                            <td
                              style="width:35%;"
                              class="full"
                              dir="ltr"
                              align="left"
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
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:43px;line-height:43px;color:#48a9c5;text-align:center; vertical-align:top;mso-line-height-rule:exactly;"
                                    class="full mbl-padding-top10"
                                  >
                                    <span
                                      style="font-size:55%; line-height:12px; vertical-align:12px;"
                                      >$</span
                                    >XX<span
                                      style="font-size:40%; line-height:18px; vertical-align:18px;"
                                      >*</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;line-height:11px;color:#48a9c5;text-align:center; vertical-align:top;"
                                    class="full mbl-padding-left0"
                                  >
                                    ONE WAY
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ middleTableSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:140px;vertical-align:top;text-align:center;margin:0 auto; float: right;"
                        class="floatnone"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:140px;"
                        >
                          <tr>
                            <td
                              align="center"
                              height="44"
                              style="height:44px;text-align:center;"
                              class="mbl-padding-top"
                            >
                              <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                                {{ ctaSnippet }}
                              </fragment>
                              <table
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                class="primary17_fare_module_cta"
                                align="center"
                              >
                                <tr>
                                  <td>
                                    <div>
                                      <a
                                        v-if="
                                          (!$store.state.editMode ||
                                            $store.state.previewMode) &&
                                            fields.bookCtaLink
                                        "
                                        :href="fields.bookCtaLink"
                                        style="background-color:#48a9c5; border: 2px solid #48a9c5; padding: 10px 25px 8px 25px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse; letter-spacing: .3px;"
                                        class="resetBorder buttonHover"
                                      >
                                        <TextInput
                                          v-model.lazy="fields.bookCtaText"
                                          inline="true"
                                        />
                                      </a>
                                      <span
                                        v-else
                                        style="background-color:#48a9c5; border: 2px solid #48a9c5; padding: 10px 25px 8px 25px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse; letter-spacing: .3px;"
                                        class="resetBorder buttonHover"
                                      >
                                        <TextInput
                                          v-model.lazy="fields.bookCtaText"
                                          inline="true"
                                        >
                                          <LinkField
                                            v-model="fields.bookCtaLink"
                                          />
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
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ closeTableSnippet }}
                      </fragment>
                    </td>
                  </tr>
                  <!-- / fare alert c -->
                  <!-- 2px GREY DIVIDER, this should NOT show for the final fare -->
                  <tr>
                    <td>
                      <hr
                        noshade
                        color="#FFFFFF"
                        width="100%"
                        size="2"
                        style="padding:0; margin:0 auto; border:none; width:100%; height: 2px; color:#eeeeee; background-color: #eeeeee"
                        class="hr_mob_50"
                      />
                    </td>
                  </tr>

                  <!-- fare alert d -->
                  <tr>
                    <td
                      align="center"
                      style=" padding-top: 20px; padding-bottom:20px;font-size:0;"
                      class="center_mob"
                    >
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ openTableSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:310px; vertical-align:top; float: left;"
                        class="floatnone"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:100%;"
                          dir="rtl"
                        >
                          <tr>
                            <td
                              style="width:65%;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:18px;line-height:22px;color:#3c3b3f;text-align:left; vertical-align:top;padding-left: 20px;"
                              class="full"
                              dir="ltr"
                            >
                              <span
                                style="text-transform: uppercase; font-size: 11px; line-height: 17px;"
                                >DEPARTURECITY to</span
                              >
                              <br />
                              <span style="font-weight: bold;">
                                ARRIVALCITY
                              </span>
                            </td>
                            <td
                              style="width:35%;"
                              class="full"
                              dir="ltr"
                              align="left"
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
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-weight:bold;font-size:43px;line-height:43px;color:#48a9c5;text-align:center; vertical-align:top;mso-line-height-rule:exactly;"
                                    class="full mbl-padding-top10"
                                  >
                                    <span
                                      style="font-size:55%; line-height:12px; vertical-align:12px;"
                                      >$</span
                                    >XX<span
                                      style="font-size:40%; line-height:18px; vertical-align:18px;"
                                      >*</span
                                    >
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;line-height:11px;color:#48a9c5;text-align:center; vertical-align:top;"
                                    class="full mbl-padding-left0"
                                  >
                                    ONE WAY
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ middleTableSnippet }}
                      </fragment>
                      <div
                        style="display:inline-block;width:100%;max-width:140px;vertical-align:top;text-align:center;margin:0 auto; float: right;"
                        class="floatnone"
                      >
                        <table
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="width:140px;"
                        >
                          <tr>
                            <td
                              align="center"
                              height="44"
                              style="height:44px;text-align:center;"
                              class="mbl-padding-top"
                            >
                              <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                                {{ ctaSnippet }}
                              </fragment>
                              <table
                                role="presentation"
                                cellpadding="0"
                                cellspacing="0"
                                border="0"
                                class="primary17_fare_module_cta"
                                align="center"
                              >
                                <tr>
                                  <td>
                                    <div>
                                      <a
                                        v-if="
                                          (!$store.state.editMode ||
                                            $store.state.previewMode) &&
                                            fields.bookCtaLink
                                        "
                                        :href="fields.bookCtaLink"
                                        style="background-color:#48a9c5; border: 2px solid #48a9c5; padding: 10px 25px 8px 25px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse; letter-spacing: .3px;"
                                        class="resetBorder buttonHover"
                                      >
                                        <TextInput
                                          v-model.lazy="fields.bookCtaText"
                                          inline="true"
                                        />
                                      </a>
                                      <span
                                        v-else
                                        style="background-color:#48a9c5; border: 2px solid #48a9c5; padding: 10px 25px 8px 25px; border-radius: 0px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; font-weight: bold; line-height: 19px; text-align: center; text-decoration: none; border-collapse: collapse; letter-spacing: .3px;"
                                        class="resetBorder buttonHover"
                                      >
                                        <TextInput
                                          v-model.lazy="fields.bookCtaText"
                                          inline="true"
                                        >
                                          <LinkField
                                            v-model="fields.bookCtaLink"
                                          />
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
                      </div>
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ closeTableSnippet }}
                      </fragment>
                    </td>
                  </tr>
                  <!-- / fare alert d -->
                  <tr>
                    <td
                      width="100%"
                      style="padding:30px 0 45px;"
                      align="center"
                    >
                      <fragment v-if="!$store.state.editMode || $store.state.emailMode">
                        {{ borderCtaSnippet }}
                      </fragment>
                      <table
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        class="primary_fares_final_cta"
                        align="center"
                      >
                        <tr>
                          <td>
                            <div>
                              <a
                                v-if="
                                  (!$store.state.editMode ||
                                    $store.state.previewMode) &&
                                    fields.moreCtaLink
                                "
                                :href="fields.moreCtaLink"
                                style="background-color:#ffffff;border:2px solid #48a9c5;padding:12px 20px;border-radius:0px;color:#48a9c5;display:inline-block;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;line-height:20px;text-align:center;text-decoration:none;border-collapse:collapse;"
                                class="resetBorder buttonHoverBorder"
                              >
                                <TextInput
                                  v-model.lazy="fields.moreCtaText"
                                  inline="true"
                                />
                              </a>
                              <span
                                v-else
                                style="background-color:#ffffff;border:2px solid #48a9c5;padding:12px 20px;border-radius:0px;color:#48a9c5;display:inline-block;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;line-height:20px;text-align:center;text-decoration:none;border-collapse:collapse;"
                                class="resetBorder buttonHoverBorder"
                              >
                                <TextInput
                                  v-model.lazy="fields.moreCtaText"
                                  inline="true"
                                >
                                  <LinkField v-model="fields.moreCtaLink" />
                                </TextInput>
                              </span>
                            </div>
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
      </tr>
    </table>
  </td>
</template>

<script>
import TextInput from '@/components/core/inputs/TextInput'
import { libComponentMixin } from '@/shared/mixins'
import LinkField from '@/components/core/inputs/LinkField'

export default {
  name: 'ASAMCKSecondaryOne',
  components: {
    LinkField,
    TextInput,
  },
  mixins: [libComponentMixin],
  data: function() {
    return {
      openTableSnippet: ` <!--[if (gte mso 9)|(IE)]>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:460px;">
        <tr>
        <td style="width:310px;">
        <![endif]-->`,
      middleTableSnippet: `<!--[if (gte mso 9)|(IE)]></td><td style="width:140px"><![endif]-->`,
      closeTableSnippet: `
      <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->`,
      ctaSnippet: `
        <!--[if gte mso 9]>
        <style type="text/css">
            .primary17_fare_module_cta {background-color:#48a9c5 !important; border: 2px solid #48a9c5 !important; padding:10px 25px !important; border-collapse: collapse !important;}
            .resetBorder {border: none !important;}
        </style>
        <![endif]-->
        `,
      borderCtaSnippet: `
         <!--[if gte mso 9]>
          <style type="text/css">
            .primary_fares_final_cta {
              background-color: #ffffff !important;
              border: 2px solid #48a9c5 !important;
              padding: 12px 20px !important;
              border-collapse: collapse !important;
            }
            .resetBorder {
              border: none !important;
            }
          </style><!
        [endif]-->
        `,

      fields: {
        showBookCta: true,
        bookCtaText: 'Book&nbsp;now',
        bookCtaLink: `\${clickthrough('primary_fares_fare1_cta', 'linkname=primary_fares_fare1_cta||\${OFFERID}||')}`,
        showMoreCta: true,
        moreCtaText: 'FIND MORE DEALS',
        moreCtaLink: `\${clickthrough('primary_fares_final_cta', 'linkname=primary_fares_final_cta||\${OFFERID}||')}`
      }
    }
  },
}
</script>
