import { IsNotEmpty } from 'class-validator';

export class EmployeeInputDTO {
  id: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
}

export enum EmployeeTier {
  TIER_CERO = 'CERO',
  TIER_ONE = 'ONE',
  TIER_TWO = 'TWO',
  TIER_THREE = 'THREE',
  TIER_FOUR = 'FOUR',
}
