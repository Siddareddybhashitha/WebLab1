import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  module = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getModuleDetails(this.route.snapshot.params['id']);
  }
  getModuleDetails(id) {
    this.api.getModule(id)
      .subscribe(data => {
        this.module = data;
      });
  }
}

