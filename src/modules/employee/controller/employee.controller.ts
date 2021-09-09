import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeInputDTO } from '../model/employee.in.dto';
import { EmployeesService } from '../service/employee.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  getAllEmployess() {
    return this.employeeService.getAllEmployees();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createEmployee(
    @Body() employee: EmployeeInputDTO) {
    return this.employeeService.createEmployee(employee);
  }

  @Get('/:id')
  getEmployeeById(@Param('id') id:string){
    return this.employeeService.getEmployeeById(id);
  }
}
