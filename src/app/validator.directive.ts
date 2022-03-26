import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[appValidator]',
  providers:[{
    
    provide:NG_VALIDATORS,
    useExisting:ValidatorDirective,
    multi:true

  }]

})

export class ValidatorDirective implements Validators{

    validate(control:AbstractControl):{[key:string]:any}|any {

   
     const forbidden = /admin/.test(control.value);
 
     return forbidden ? {'forbiddenname':{value:control.value}}:null;
 

 }

  constructor() { }

}
