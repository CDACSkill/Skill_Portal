import { Injectable } from '@angular/core';
import { Certificate } from './certificate';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  
myCertificate:Array<Certificate> =[{
  certification:"html",
  institution:"cdac",
  receivedon:"20-9-2019",
  expireon:"30-10-2022"  
},
{
  certification:"css",
  institution:"cdac",
  receivedon:"20-9-2019",
  expireon:"30-10-2022"  
}]

availCertificate:Array<Certificate>=[{
  certification:"c++",
  institution:"cdac",
  receivedon:"20-9-2019",
  expireon:"30-10-2022"  
},
{
  certification:"Ds",
  institution:"cdac",
  receivedon:"20-9-2019",
  expireon:"30-10-2022"  
}]

  constructor() { }
  getmycertificate()
  {
    return this.myCertificate;
  }
  getavailcertificate()
  {
    return this.availCertificate;
  }
  insertCertificate(certificates: Certificate) {
    this.myCertificate.push(certificates);
  }
}
