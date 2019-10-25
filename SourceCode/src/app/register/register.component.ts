import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {Formbook: FormGroup;
  fName: '';
  lName: '';
  uName: '';
  pass: '';
  confirmPass: '';
  mobilePhone: '';
  security: '';
  answer: '';
  class1: '';
  class2: '';
  class3: '';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.Formbook = this.formBuilder.group({
      'fName': [null, Validators.required],
      'lName': [null, Validators.required],
      'uName': [null, Validators.required],
      'pass': [null, Validators.required],
      'confirmPass': [null, Validators.required],
      'mobilePhone': [null, Validators.required],
      'class1': [null, Validators.required],
      'class2': [null, Validators.required],
      'class3': [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    this.api.postBook(form)
      .subscribe(res => {
        this.router.navigate(['/login']);
      }, (err) => {
        console.log(err);
      });
  }
}
