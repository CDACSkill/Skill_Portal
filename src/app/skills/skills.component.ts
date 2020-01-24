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
  skills: Array<EmployeeSkill>;

  
  closeResult: string;
  constructor(private modalService:NgbModal,private skillservice:SkillServiceService) {
  
   }
  ngOnInit() {
   this.skills=this.skillservice.get(); 
  
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
    this.skillservice.getIndex(index);
    this.modalService.open(content1).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
