import { EMP } from './mock-employee';
import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployee(): Employee[]{
    console.log('service invoked');
    return EMP;
  }
  constructor() { }
}
