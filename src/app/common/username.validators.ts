import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0){
            return {
                cannotContainSpace: {
                    status: true,
                    message: "Username can't contain space."
                }
            }
        }
        return null;
    }
}