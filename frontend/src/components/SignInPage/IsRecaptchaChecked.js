
/* eslint-disable no-undef */
export default function IsRecpatchaChecked (){
    return (grecaptcha && grecaptcha.getResponse().length > 0)
}