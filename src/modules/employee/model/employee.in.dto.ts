import { IsNotEmpty } from "class-validator";

export class Employee {
  id: string;

  @IsNotEmpty()
  firstName: string;

  lastName: string;
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
}

export enum EmployeeTier {
  TIER_CERO = "CERO",
  TIER_ONE = "ONE",
  TIER_TWO = "Two",
  TIER_THREE = "Three",
  TIER_FOUR = "FOUR",
}
