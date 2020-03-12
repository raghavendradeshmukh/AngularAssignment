import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router:Router) { }
  schoolImage:string="assets/images/schoolw.jpg";
  ngOnInit() {
  }

  navigateToHome(){
    this.router.navigate(['/welcomePage']);
}

navigateToContactUs(){
  this.router.navigate(['welcomePage', 'contactUs']);
}

}
