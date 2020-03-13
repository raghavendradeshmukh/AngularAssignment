import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { AgecalculatorComponent } from './agecalculator/agecalculator.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableComponent } from './Q5/mat-table/mat-table.component';
import {MatButtonModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { StudentFormComponent } from './Q4/student-form/student-form.component';
import { StudentListComponent } from './Q4/student-list/student-list.component';
import { StudentService } from './services/student.service';
import { StudentDataFormComponent } from './Q7/student-data-form/student-data-form.component';
import { StudentDataListComponent } from './Q7/student-data-list/student-data-list.component';
import { WelcomeComponent } from './Q6/welcome/welcome.component';
import { HomeComponent } from './Q6/home/home.component';
import { ContactUsComponent } from './Q6/contact-us/contact-us.component';
import { EventsComponent } from './Q6/events/events.component';

const appRoutes : Routes =[
  { path:'',component : EmailComponent},
  { path:'agecalculator',component : AgecalculatorComponent},
  { path:'registrationform',component : RegistrationformComponent},
  { path:'addStudentData',component : StudentFormComponent},
  {path: 'matTable',component:MatTableComponent},
  {path:'welcomePage',component:WelcomeComponent,children:[
    {path:'',component:HomeComponent},
    {path:'events',component:EventsComponent},
    {path:'contactUs',component:ContactUsComponent}
  ]},
  // {path:'home',component:HomeComponent},
  {path:'studentCrudOpreation',component:StudentDataFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    AgecalculatorComponent,
    RegistrationformComponent,
    MatTableComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentDataFormComponent,
    StudentDataListComponent,
    WelcomeComponent,
    HomeComponent,
    ContactUsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
