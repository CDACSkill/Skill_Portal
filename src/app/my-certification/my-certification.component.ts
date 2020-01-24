import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-my-certification',
  templateUrl: './my-certification.component.html',
  styleUrls: ['./my-certification.component.css']
})
export class MyCertificationComponent implements OnInit {
mycertificate:Array<Certificate>

  constructor(private certificate:CertificateService) { }
  ngOnInit() {
this.mycertificate=this.certificate.getmycertificate();
  }

}
