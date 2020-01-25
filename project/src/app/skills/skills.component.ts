import { Component, OnInit } from '@angular/core';
import { SkillServiceService } from '../skill-service.service';
import { EmployeeSkill } from '../employee-skill';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
 skillSelected:number;
 employeeUpdate:EmployeeSkill;
  skills: Array<EmployeeSkill>;

  
  closeResult: string;
  constructor(private modalService:NgbModal,private skillservice:SkillServiceService) {
  
   }
  ngOnInit() {
   this.skillservice.getSkill().subscribe((data:any)=>
    {
    this.skills=data;
    }
   ); 
  
  }
  public getAdded(addEmployee:EmployeeSkill)
  {
    this.skills.push(addEmployee);
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
      return  `with: ${reason}`;
   }
  }

  open1(content1,index:number) {

    
    this.modalService.open(content1).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    // this.employeeUpdate.skill_name=this.skills[index].skill_name;
    // this.employeeUpdate.skill_group=this.skills[index].skill_group;
    // this.employeeUpdate.rating=this.skills[index].rating;
    // this.skillservice.getObject(this.employeeUpdate);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason1(reason)}`;
    });
  }
  private getDismissReason1(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
    } 
   else {
      return  `with: ${reason}`;
   }
  }




  // onSelect($event){
  //   console.log($event);
  // }
  // onSaveChange(idNo:any,index:number)
  // {
  //   alert(this.skillSelected+""+index);
  // }

}
