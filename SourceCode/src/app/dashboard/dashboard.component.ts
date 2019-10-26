import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  module = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.userDetails(this.route.snapshot.params['id']);
  }

  userDetails(id) {
    this.api.getModule(id)
      .subscribe(data => {
        this.module = data;
      });
  }

  Signout() {
    this.router.navigate(['/login']);
  }

  Profile() {
    this.router.navigate(['/course', this.module[0].userName]);
  }
}

