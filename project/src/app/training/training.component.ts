import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingService } from '../training.service';
import { EmployeeTraining } from '../employee-training';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  offerTraningModal =false;
  styles = 'none';
  closeResult: string;
  subject = 'Skill Portal:- Kindly Arrange the training';
  

  constructor( private modalService:NgbModal,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate([{outlets:{trainingoutlet:['MyEnrolledTraining']}}],{relativeTo:this.route});  
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

  
}


