import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = 'http://localhost:3000/posts123';

  constructor(private http: HttpClient) { }
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
  createContact(createBody: any):Observable<IEmployee[]>{
    return this.http.post<IEmployee[]>(this._url,createBody);

  }
  updateContact(contactId:number ,updatedBody:any){
    const endpointURL = this._url+'/' + contactId;
    return this.http.put(endpointURL,updatedBody);

  }
  deleteContact(cID: number){
    const deletepoint = this._url+'/' + cID;
    return this.http.delete(deletepoint);
    
  }

}
