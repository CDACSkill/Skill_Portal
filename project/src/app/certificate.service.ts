import { Injectable } from '@angular/core';
import { Certificate } from './certificate';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  
  constructor(private httpclient:HttpClient) { }
  getmycertificate():Observable<Certificate[]>
  {
    let url = "http://localhost:8800/api/getMyCerti"
    return this.httpclient.get<Certificate[]>(url);
  }
  getavailcertificate():Observable<Certificate[]>
  {
    let url="http://localhost:8800/api/get_availcerti";
    return this.httpclient.get<Certificate[]>(url);
  }
  insertCertificate(certi_name:string):Observable<any> {
    let url = "http://localhost:8800/api/addInMyCerti?certi_name="+certi_name;
    return this.httpclient.get(url);
  }
}
