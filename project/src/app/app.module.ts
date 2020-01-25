import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { AvailableTrainingComponent } from './available-training/available-training.component';
import { MyEnrolledTrainingComponent } from './my-enrolled-training/my-enrolled-training.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { CertificationComponent } from './certification/certification.component';
import { MyCertificationComponent } from './my-certification/my-certification.component';
import { RequestCertificationComponent } from './request-certification/request-certification.component';
import { AvailableCertificationComponent } from './available-certification/available-certification.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { SkillsComponent } from './skills/skills.component';
import { AddNewSkillsComponent } from './add-new-skills/add-new-skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationService } from './authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSkillComponent } from './update-skill/update-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    AvailableTrainingComponent,
    MyEnrolledTrainingComponent,
    AddTrainingComponent,
    CertificationComponent,
    MyCertificationComponent,
    RequestCertificationComponent,
    AvailableCertificationComponent,
    AddCertificationComponent,
    SkillsComponent,
    AddNewSkillsComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardMainComponent,
    UpdateSkillComponent
    
  ],
  schemas:[
CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
  FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddTrainingComponent,
  ],
  
})
export class AppModule { }
