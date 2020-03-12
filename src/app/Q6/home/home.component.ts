import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeImage: string = "assets/images/home.jpg";
  constructor(private router: Router) { }
  navigateToEvents() {
    this.router.navigate(['/welcomePage/events']);
  }
  onNavigateToContactUs() {
    this.router.navigate(['welcomePage', 'contactUs']);
  }
  ngOnInit() {
  }

}
