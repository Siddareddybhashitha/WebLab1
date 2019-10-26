import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-module-landing-content',
  templateUrl: './module-landing-content.component.html',
  styleUrls: ['./module-landing-content.component.css']
})
export class ModuleLandingContentComponent implements OnInit {
  module = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getModuleDetails(this.route.snapshot.params['id']);
  }
  /* This function fetches the details of the user from the database
   */
  getModuleDetails(id) {
    this.api.getModule(id)
      .subscribe(data => {
        this.module = data;
      });
  }
}

