import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Employee } from '../model/employee.in.dto';
import { EmployeesService } from '../service/employee.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  getAllEmployess() {
    return this.employeeService.getAllEmployees();
  }

  @Post()
  createEmployee(
    @Body() employee: Employee) {
    return this.employeeService.createEmployee(employee);
  }

  @Get('/:id')
  getEmployeeById(@Param('id') id:string){
    return this.employeeService.getEmployeeById(id);
  }
}
