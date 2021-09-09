import { Injectable } from '@nestjs/common';
import { Employee, EmployeeTier } from '../model/employee.in.dto';
import {v1 as uuid} from 'uuid';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(firstName: string, lastName: string, designation: string, nearestCity: string, tier: EmployeeTier){
    const employee = {
      id: uuid(),
      firstName,
      lastName,
      designation,
      nearestCity,
      tier
    }
    this.employees.push(employee);
    return employee;
  }

  getEmployeeById(id: string): Employee {
    const employees = this.getAllEmployees();
    return employees.find(e => e.id === id);
  }

  

}
