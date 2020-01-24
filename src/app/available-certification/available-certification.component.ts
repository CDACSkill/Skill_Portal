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
  constructor(private certificate:CertificateService) { }
 
  ngOnInit() {
    this.availcertificate=this.certificate.getavailcertificate();
  }
  addCertificate(index:number)
  {
    this.certificates = new Certificate()
    this.certificates.certification=this.availcertificate[index].certification;
    this.certificates.institution=this.availcertificate[index].institution;
    this.certificates.receivedon=this.availcertificate[index].receivedon;
    this.certificates.expireon=this.availcertificate[index].expireon;
    this.certificate.insertCertificate(this.certificates);
    alert("Added successfully");
  }

}
