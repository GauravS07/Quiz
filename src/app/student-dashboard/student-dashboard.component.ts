import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  cards: {title: string, subtitle: string, content: string, url: string}[] = [
    {title: 'Javascript', subtitle: '5:00 Minutes', content: 'Give This Javascript Test To Revise Tour Skills', url: './assets/Javascript1.jpg'},
    {title: 'Asp.Net', subtitle: '5:00 Minutes', content: 'Give This Test', url: './assets/asp.png'},
    {title: 'C Sharp', subtitle: '5:00 Minutes', content: 'How Much You Can Score', url: './assets/csharp.jpg'},
    {title: 'Design Patterns', subtitle: '5:00 Minutes', content: 'Give Test For Gaining Knowledge', url: './assets/UIUX.jpeg'},
  ];

  ngOnInit(): void {
  }

  apply(){
      this.router.navigate(['./quiz'])
  }

}
