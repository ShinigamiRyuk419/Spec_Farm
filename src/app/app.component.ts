import { Component, OnInit } from '@angular/core';

declare var switchForm: any;
declare var showSlides: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpecializationProject';
  ngOnInit() {
    new switchForm();
    new showSlides();
  }
}
