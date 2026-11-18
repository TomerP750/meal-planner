import { PartialType } from '@nestjs/mapped-types';
import { CreateWeeklyMealPlanDto } from './create-weekly-meal-plan.dto';

export class UpdateWeeklyMealPlanDto extends PartialType(CreateWeeklyMealPlanDto) {}
