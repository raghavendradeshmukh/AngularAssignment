import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-agecalculator',
  templateUrl: './agecalculator.component.html',
  styleUrls: ['./agecalculator.component.css']
})
export class AgecalculatorComponent implements OnInit,OnDestroy {
  InputDate:number;
  minDate: Date;
  maxDate: Date;
  isCalculated:boolean;

  ageCalculator: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.minDate = new Date(1975, 0, 1);
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate()-1);
    this.isCalculated=false;
  }

  ngOnInit() {
    this.ageCalculator  =  this.formBuilder.group({
      mydate: ['', Validators.required]
  });

  }
  calculateAge(dateOfBirth: any): number {
    console.log("calculate age is clicked");
    const today= new Date();
    const birthDate=new Date(dateOfBirth);
    let age= today.getFullYear() - birthDate.getFullYear();
    let currentYear=today.getFullYear();
    let birthYear=birthDate.getFullYear();
    const m=today.getMonth() - birthDate.getMonth();
    const dd=today.getDay()- birthDate.getDay();
    
    if(m<0 || (m===0 &&   today.getDate()< birthDate.getDate()) && dd<0)
    {
      age--;
    }
    if(birthYear>currentYear)
    {
      this.InputDate=0;
      alert("provide valid date");
      
    }
    else{
      console.log(" age: "+age);
      this.InputDate=age;
      this.isCalculated=true;
    }
    return age;
  }
  ngOnDestroy(){
    this.isCalculated=false;
  }
}
