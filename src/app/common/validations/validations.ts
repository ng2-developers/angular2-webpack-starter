import {FormControl} from '@angular/common';

//still implementing

export class CustomValidators {

   static isValidEmail(control: FormControl){
        //var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        /** if (control.value.slice('@')=='gmail.com') {
            console.log(control.value.slice('@'));
            return { "Please provide a valid email": true };
        }

        */

        return null;
    }

}