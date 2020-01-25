import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { MyEnrolledTrainingComponent } from './my-enrolled-training/my-enrolled-training.component';
import { AvailableTrainingComponent } from './available-training/available-training.component';
import { CertificationComponent } from './certification/certification.component';
import { MyCertificationComponent } from './my-certification/my-certification.component';
import { AvailableCertificationComponent } from './available-certification/available-certification.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { RequestCertificationComponent } from './request-certification/request-certification.component';
import { SkillsComponent } from './skills/skills.component';
import { AddNewSkillsComponent } from './add-new-skills/add-new-skills.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Register',component:RegistrationComponent},
  {path : 'dashboard',component:DashboardComponent,
  children:[
    {
      path:'dashboard-main',
      component:DashboardMainComponent,
      outlet:'sidebaroutlet'
    },
    {
      path:'skills',component:SkillsComponent,outlet:'sidebaroutlet',
      children:[
        {path:'AddNewSkill',
        component:AddNewSkillsComponent,
        outlet:'skillsoutlet'}
      ]
    },
    {
      path:'Training',
      component:TrainingComponent,
      outlet:'sidebaroutlet',
children:[
  {path:'MyEnrolledTraining',
  component:MyEnrolledTrainingComponent,
  outlet:'trainingoutlet'},
  {path:'AvailableTraining',
  component:AvailableTrainingComponent,
  outlet:'trainingoutlet'}
]},
{path:'Certification',component:CertificationComponent,outlet:'sidebaroutlet',
      children:[
        {path:'MyCertification',
        component:MyCertificationComponent,
        outlet:'certificateoutlet'},
        {path:'AvailableCertification',
        component:AvailableCertificationComponent,
        outlet:'certificateoutlet',
        children:[
          {path:'AddCertification',
          component:AddCertificationComponent,
          outlet:'certificateoutlet'},
          {path:'RequestCertification',
          component:RequestCertificationComponent,
          outlet:'certificateoutlet'}
        ]}
      ]}


  ]

},
  
   
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
