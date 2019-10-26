import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  Formmodule: FormGroup;


  firstName:  '';
  lastName:  '';
  userName: '';
  mobilenumber: '';
  course1: '';
  course2: '';
  course3: '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.Formmodule = this.formBuilder.group({
      'firstName': '',
      'lastName': '',
      'userName': '',
      'mobilenumber': '',
      'course1': '',
      'course2': '',
      'course3': '',
    });
    this.api.getModule(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.Formmodule = this.formBuilder.group({
          'firstName': data[0].firstName,
          'lastName': data[0].lastName,
          'userName': data[0].userName,
          'mobilenumber': data[0].mobilenumber,
          'course1': data[0].course1,
          'course2': data[0].course2,
          'course3': data[0].course3,
        });
      });
  }
  onFormSubmit(form: NgForm) {
    this.api.updateModule(this.route.snapshot.params['id'], form)
      .subscribe(res => {
        const id = res['_id'];
        this.router.navigate(['/course', id]);
      }, (err) => {
        console.log(err);
      });
    this.router.navigate(['/dashboard']);
  }
}

