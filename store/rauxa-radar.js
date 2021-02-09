const mobileStyle = `
.block {
  display: block !important;
}

/* HIDE ELEMENT */
.hide {
  display: none !important;
  overflow: hidden !important;
  margin: 0 !important;
  font-size: 0 !important;
  max-height: 0 !important;
}

/* SHOW ELEMENT */
.show {
  display: block !important;
  width: auto !important;
  overflow: visible !important;
  float: none !important;
  max-height: inherit !important;
  line-height: inherit !important;
}

/* RESET HEIGHT */
.hauto {
  height: auto !important;
}

/* FORCE MIN WIDTH */
.mobileContainer {
  min-width: 360px !important;
  max-width: 360px !important;
  width: 360px !important;
}

.pad-top-24 {
  padding-top: 24px !important;
}
`

const globalStyle = `
<style type="text/css">
@charset "ISO-8859-1";

@font-face {
  font-family: "AvenirLTPro-Black";
  src: url("https://rauxa.com/wp-content/uploads/thecs_custom_font/Linotype - AvenirLTPro-Black.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  mso-font-alt: Helvetica;
}

@font-face {
  font-family: "AvenirLTPro-Light";
  src: url("https://rauxa.com/wp-content/uploads/thecs_custom_font/Linotype - AvenirLTPro-Light.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  mso-font-alt: Helvetica;
}

@font-face {
  font-family: "AvenirLTPro-Book";
  src: url("https://rauxa.com/wp-content/uploads/thecs_custom_font/Linotype - AvenirLTPro-Book.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  mso-font-alt: Helvetica;
}

@font-face {
  font-family: "AvenirLTPro-Medium";
  src: url("https://rauxa.com/wp-content/uploads/thecs_custom_font/Linotype - AvenirLTPro-Medium.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  mso-font-alt: Helvetica;
}

@font-face {
  font-family: "AvenirLTPro-Heavy";
  src: url("https://rauxa.com/wp-content/uploads/thecs_custom_font/Linotype - AvenirLTPro-Heavy.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  mso-font-alt: Helvetica;
}

* {
  margin: 0px;
}

html {
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0px;
  width: 100%;
  background-color: #ffffff !important;
  margin: 0 auto !important;
  /*to center in samsung, #MessageViewBody hack was not working*/
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  padding: 0px;
  mso-table-lspace: 0pt !important;
  mso-table-rspace: 0pt !important;
}

td {
  border-collapse: collapse;
  mso-table-lspace: 0pt !important;
  mso-table-rspace: 0pt !important;
}

br {
  mso-line-height-rule: exactly;
}

td {
  mso-line-height-rule: exactly;
}

a {
  outline: 0;
}

img {
  display: block;
  border: 0;
}

@media screen and (max-width:540px) {
  ${mobileStyle}
}
</style>
<!--[if mso]>
<style type="text/css">
body, table, span, td, span.fontNHGDisplay, td.fontNHGDisplay {font-family: Helvetica, Arial !important;}
body, table, span, td, span.fontNHGDisplay, td.fontNHGText {font-family: Helvetica, Arial !important;}
</style>
<![endif]-->
<!--[if gte mso 9]>
<style type="text/css">
div {mso-line-height-rule: 100%;}
</style>
<![endif]-->`

export default {
  id: 'rauxa',
  name: 'Rauxa',
  templateStyle: 'background-color:#e9e9e9;',
  globalStyle,
  mobileStyle,
  preHTML: `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta content="telephone=no" name="format-detection">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <title>Verizon + Rauxa</title>
  <!-- FONTS -->
  <!--[if gte mso 9]>
    <style>
      a,td {
      font-family:Helvetica,Arial !important;
      }
    </style>
    <![endif]-->
  <!--[if gte mso 9]>
    <style>
      div {
      mso-line-height-rule:100%;
      }
      table {
      border-collapse:collapse;
      border-spacing:0;
      mso-line-height-rule:exactly;
      mso-table-lspace:0;
      mso-table-rspace:0;
      mso-margin-bottom-alt:0;
      mso-margin-top-alt:0;
      }
    </style>
    <![endif]-->
  <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG />
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    ${globalStyle}
  <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml><![endif]-->
</head>

<body bgcolor="#f6f6f6" style="margin:0; padding:0; width:100%; background-color:#f6f6f6;">
  <table cellspacing="0" cellpadding="0" border="0" role="presentation" align="center" bgcolor="#f6f6f6"
    style="width:100%;margin:0 auto;">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="width:100%;">
        <table class="mobileContainer" cellspacing="0" cellpadding="0" border="0" role="presentation" bgcolor="#ffffff"
          style="min-width:360px; width:720px; max-width:720px; margin:0 auto;">
          <tr>`,
  postHTML: `</tr>
</table>
</td>
</tr>
</table>
</body>

</html>`
}
