import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Formmodule: FormGroup;
  myusername: '';
  mypassword: '';
  /* Instance generation is done here using this functionality*/
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.Formmodule = this.formBuilder.group({
      'myusername': [null, Validators.required],
      'mypassword': [null, Validators.required]
    });
  }

  onSubmit(form: NgForm) {
    this.api.getModule(form['myusername'])
      .subscribe(data => {
        if (data[0]['password'] === form['mypassword']) {
          this.router.navigate(['/dashboard', form['myusername']]);
        }
      });
  }
}

