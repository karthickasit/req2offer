import {AbstractControl} from '@angular/forms';
export class PasswordValidation
{
static MatchPassword(AC:AbstractControl){
let password = AC.get('password').value;
let conformpassword=AC.get('conformpassword').value;
if(password!=conformpassword) {
console.log('false');
AC.get('conformpassword').setErrors({MatchPassword:true});
}
else {
console.log('false');
return null;
}
}
}