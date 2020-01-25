import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../certificate.service';
import { Certificate } from '../certificate';

@Component({
  selector: 'app-available-certification',
  templateUrl: './available-certification.component.html',
  styleUrls: ['./available-certification.component.css']
})
export class AvailableCertificationComponent implements OnInit {
availcertificate:Array<Certificate>
certificates:Certificate;
certi_name:string;
  constructor(private certificate:CertificateService) { }
 
  ngOnInit() {
    this.certificate.getavailcertificate().subscribe(data=>
      this.availcertificate=data
      );
  }
  addCertificate(index:number)
  {
 this.certi_name =this.availcertificate[index].certi_name;
    
    this.certificate.insertCertificate(this.certi_name).subscribe((data:any)=>{
         if(data==1)
         {
           alert("added successfully");
         }
         else{
           alert("already exist");
         }
    }
    
    );
    
  }

}
