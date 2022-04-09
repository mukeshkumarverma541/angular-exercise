import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;
  defaultCourse = 'Angular';
  public username !:string;

  public genders = [
    {id: 1, value: 'Male'},
    {id: 2, value: 'Female'}
  ]
  defaultGender = 'Male';

  submitted: boolean = false;
  formData = {
    username : 'Mukesh Verma',
    email: 'mkverma541@gmail.com',
    course: 'HTML',
    gender: 'Male'

  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(){
    this.submitted = true;
    this.formData.username = this.myForm.value.userDetails.username;
    this.formData.email = this.myForm.value.userDetails.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;
    this.myForm.reset();
    
  }
  setUsername(){
  //   this.myForm.setValue({
  //     userDetails : {
  //       username: 'Mukesh Verma',
  //       email: 'mkverma@gmail.com'
  //     },
  //     course: 'Angular',
  //     gender: 'Male'
  //   })
  // }
    this.myForm.form.patchValue({
      userDetails: {
        username : 'Mukesh Verma'
      }
    })
}

}