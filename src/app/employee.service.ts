import { HttpClient } from '@angular/common/http';
import { EMP } from './mock-employee';
import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService  {


  arrVal: string[];
 // getEmployee(): Employee[]{
  //  console.log('service invoked');
  //  return EMP;
 // }

  
  constructor(private http: HttpClient) { }

  getEmployee(): any{
    this.http.get('http://localhost:8080/api/getDetails?id=34').subscribe(data => {
      console.log(data);
      this.arrVal = data as string[];
      return this.arrVal;
      });
    }
}
