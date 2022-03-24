import { FormGroup } from "@angular/forms";

export function ConfirmPasswordValidator(controlName:string , matchingControlName:string){
  return (formGroup:FormGroup)=>{
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if(control.value != matchingControl.value && matchingControl !== null){
      matchingControl.setErrors({ confirmValidator : true})
    }else{
      if(matchingControl.value === null){

      }else{
        matchingControl.setErrors(null)
      }
    }
  }
}
