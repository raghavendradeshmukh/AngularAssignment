import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsImage:string="assets/images/contactus.jpg";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  NavigateToHome(){
    this.router.navigate(['/welcomePage']);
}
navigateToEvents(){
  this.router.navigate(['/welcomePage/events']);
}
}
