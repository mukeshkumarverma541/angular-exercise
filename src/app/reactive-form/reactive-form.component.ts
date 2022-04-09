import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public genders = [
    {id: 1, value: 'Male'},
    {id: 2, value: 'Female'}
  ]

  notAllowedNames =['mkverma541', 'pooja', 'seema'];

  myReactiveForm !: FormGroup;
  
  get skillsFormGroups () {
    return this.myReactiveForm.get('skills') as FormArray
  }

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails' : new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'course' : new FormControl('Angular'),
      'gender' : new FormControl('Female'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
       
      ])
    })
  }


  onSubmit() {
    console.log(this.myReactiveForm);
  }
  onAddSkill(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  NaNames(control: FormControl){
    if(this.notAllowedNames.indexOf(control.value) !== -1){
      return {'nameisNotAllowed': true}
    }
    return null
  }


  NaEmails(control: FormControl): Promise<any> | Observable<any>{
     const response = new Promise<any>((resolve, reject) => {
       setTimeout(() => {
         if(control.value === 'mkverma@gmail.com'){
            resolve({'emailNotAllowed': true})
         }else{
           resolve(null)
         }
       }, 1000);
     })
     return response;
  }
}
