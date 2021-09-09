import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeInputDTO, EmployeeTier } from '../model/employee.in.dto';
import {v1 as uuid} from 'uuid';

@Injectable()
export class EmployeesService {
  private employees: EmployeeInputDTO[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(employee: EmployeeInputDTO){
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

  getEmployeeById(id: string): EmployeeInputDTO {
    const employees = this.getAllEmployees();
    let empl = employees.find(e => e.id === id);
    if(!empl) throw new NotFoundException(`${id} does not exist`);
    return empl;
  }



}
