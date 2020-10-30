<template>
  <td align="center">
    <!--[if (gte mso 9)|(IE)]><table align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr><td align="center" valign="top"><![endif]-->
    <table
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%; max-width: 500px; background-color: #2774ae"
    >
      <tr>
        <td align="center" valign="top" style="width: 100%;">
          <table
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
                <!--[if (gte mso 9)|(IE)]><table cellpadding="0" cellspacing="0" border="0" style="width:460px;"><tr><td align="center" style="width:50%;"><![endif]-->
                <div
                  style="display:inline-block;width:100%;max-width:230px;vertical-align:top;"
                >
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="width:100%;"
                  >
                    <tr>
                      <td style="padding-bottom:15px;">
                        <table
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
                <!--[if (gte mso 9)|(IE)]></td><td align="center" style="width:50%;"><![endif]-->
                <div
                  style="display:inline-block;width: 100%;max-width:230px;vertical-align:top;"
                >
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="width:100%;"
                  >
                    <tr>
                      <td style="padding-bottom:15px;">
                        <table
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
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
  </td>
</template>

<script>
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAHeaderStatement',
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
