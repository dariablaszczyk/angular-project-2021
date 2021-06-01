import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

export const  isRequired: ValidatorFn = (control: AbstractControl): any => {
   const journeyType = control.get('journey');
   const returnDate = control.get('returnDate');
   
   if (journeyType && !returnDate?.value && journeyType.value === 'twoWays')
      {
         return { noReturnDate: true }
      } else return null;
}