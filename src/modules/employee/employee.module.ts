import { Module } from '@nestjs/common';
import { EmployeesController } from './controller/employee.controller';
import { EmployeesService } from './service/employee.service';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
