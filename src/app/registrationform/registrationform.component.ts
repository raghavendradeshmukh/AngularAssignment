import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  mobileNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
  name_regex = /^[a-zA-Z]+$/;
  email_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  countryTemplateForm = null;
  // countries = [
  //   { name: 'USA' },
  //   { name: 'India' },
  //   { name: 'France' }
  // ];

  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.name_regex)]],
      lastName: ['', [Validators.required, Validators.pattern(this.name_regex)]],
      email: ['', [Validators.required, Validators.pattern(this.email_regex)]],
      contactNumber: ['', [Validators.required, Validators.pattern(this.mobileNumberRegex)]],
      dob: ['', Validators.required],
      cityName: ['', Validators.required]

    });
  }

    changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get cityName() {
    return this.registerForm.get('cityName');
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!!');
    this.registerForm.reset();

  }
}
