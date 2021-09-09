import { Injectable } from '@nestjs/common';
import { Employee, EmployeeTier } from '../model/employee.in.dto';
import {v1 as uuid} from 'uuid';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(employee: Employee){
    const empl = {
      id: uuid(),
      firstName: employee.firstName,
      lastName: employee.lastName,
      designation: employee.designation,
      nearestCity: employee.nearestCity,
      tier: employee.tier
    }
    this.employees.push(empl);
    return empl;
  }

  getEmployeeById(id: string): Employee {
    const employees = this.getAllEmployees();
    return employees.find(e => e.id === id);
  }



}
