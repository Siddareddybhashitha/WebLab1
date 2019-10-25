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

  Formbook: FormGroup;
  myusername: '';
  mypassword: '';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.Formbook = this.formBuilder.group({
      'myusername': [null, Validators.required],
      'mypassword': [null, Validators.required]
    });
  }

  onSubmit(form: NgForm) {
    this.api.getBook(form['myusername'])
      .subscribe(data => {
        if (data[0]['pass'] === form['mypassword']) {
          this.router.navigate(['/dashboard', form['myusername']]);
        }
      });
  }
}
