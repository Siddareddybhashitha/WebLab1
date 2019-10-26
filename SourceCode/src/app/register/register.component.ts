import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {Formmodule: FormGroup;
  firstName: '';
  lastName: '';
  userName: '';
  password: '';
  passwordconfirmation: '';
  mobilenumber: '';
  course1: '';
  course2: '';
  course3: '';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.Formmodule = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'userName': [null, Validators.required],
      'password': [null, Validators.required],
      'passwordconfirmation': [null, Validators.required],
      'mobilenumber': [null, Validators.required],
      'course1': [null, Validators.required],
      'course2': [null, Validators.required],
      'course3': [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    this.api.postModule(form)
      .subscribe(res => {
        this.router.navigate(['/login']);
      }, (err) => {
        console.log(err);
      });
  }
}

