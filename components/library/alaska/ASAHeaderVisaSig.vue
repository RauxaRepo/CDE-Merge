<template>
  <td align="center">
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
              src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/ALA_BI_Header7_Logox2_01_370x220.jpg"
              width="185"
              border="0"
              alt="Alaska&reg; Mileage Plan"
              style="display:block;border:0; outline:0;padding:0;width:100%;max-width:185px;height:auto;border-radius:4px 0 0 0;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:14px;color:#ffffff;"
            />
          </a>
          <!-- / logo -->
        </td>
        <td valign="bottom" style="width:60%;">
          <!-- secondary logo -->
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="width:100%;"
          >
            <tr>
              <td align="center" style="padding:15px 0;">
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="width:88%;"
                >
                  <tr>
                    <td align="right" valign="top">
                      <a
                        href="${clickthrough('partner_logo','linkname=partner_logo')}"
                        style="text-decoration:none;"
                      >
                        <img
                          src="https://static.cdn.responsys.net/i5/responsysimages/content/alaskaair/20181205_Visa_Sig_header_right_2x.jpg"
                          width="130"
                          border="0"
                          alt="VISA Signature"
                          style="display:block;border:0;outline:0;padding:0;width:100%;max-width:130px;height:auto;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:14px;color:#ffffff;"
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- secondary logo -->
        </td>
      </tr>
    </table>
  </td>
</template>

<script>
import { libComponentMixin } from '@/shared/mixins'

export default {
  name: 'ASAHeaderVisaSig',
  mixins: [libComponentMixin],
  data: function() {
    return {
      fields: {}
    }
  },
  mounted: function() {
    this.$emit('has-controls')
  }
}
</script>

<style lang="scss" scoped></style>
