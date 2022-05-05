import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  cards: {title: string, subtitle: string, content: string, url: string}[] = [
    {title: 'Gaurav', subtitle: 'Student', content: '', url: './assets/logo.jpeg'},
    {title: 'Sagar', subtitle: 'Student', content: '', url: './assets/logo.jpeg'},
  ];

  ngOnInit(): void {
  }

}
