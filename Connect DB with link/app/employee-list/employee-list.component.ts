import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees!: { id: number; name: string; age: number; }[];
  msgTrue=false;
  Update=false;
  delete_=false;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(){
    this._employeeService.getEmployees().subscribe(data =>this.employees=data);
  }
  addNewContact(){
    const newFormData = {id:7,name:'Samuka',age:433};
    this._employeeService.createContact(newFormData).subscribe(data =>{
       console.log(data);
       this.msgTrue =true;
    });
  }
  UpdateData(ID: number){
    const newFormData = {id:ID,name:'Zumoku',age:345};
    this._employeeService.updateContact(ID,newFormData).subscribe(data =>{
      this.Update =true;
    });
  }
  DeleteData(ID:number){
    this._employeeService.deleteContact(ID).subscribe(data => {
      this.delete_=true;
    });
  }
}
