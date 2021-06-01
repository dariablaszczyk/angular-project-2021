import { AbstractControl, ValidatorFn } from "@angular/forms";

export const  isReturnDateRequired: ValidatorFn = (control: AbstractControl): any => {
   const journeyType = control.get('journey');
   const returnDate = control.get('returnDate');
   
   if (journeyType && !returnDate?.value && journeyType.value === 'twoWays')
      {
         return { noReturnDate: true }
      } else return null;
}

export const areCitiesDifferent: ValidatorFn = (control: AbstractControl): any => {
   const originCity = control.get('originCity');
   const destinationCity = control.get('destinationCity');
   // debugger
   console.log(control, originCity?.value, destinationCity?.value)
   
   if (originCity?.value === destinationCity?.value)
      {
         return { sameCities: true }
      } else return null;
}