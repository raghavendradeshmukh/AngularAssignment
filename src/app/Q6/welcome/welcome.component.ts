import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  homeImage: string = "assets/images/home.jpg";
  constructor(private router: Router) { }
  // onNavigate() {
  //   this.router.navigate(['/home']);
  // }
  // onNavigateToContactUs() {
  //   this.router.navigate(['welcomePage', 'contactUs']);
  // }
  ngOnInit() {
  }

}
