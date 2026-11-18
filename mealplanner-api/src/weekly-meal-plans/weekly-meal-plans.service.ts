import { Injectable } from '@nestjs/common';
import { CreateWeeklyMealPlanDto } from './dto/create-weekly-meal-plan.dto';
import { UpdateWeeklyMealPlanDto } from './dto/update-weekly-meal-plan.dto';

@Injectable()
export class WeeklyMealPlansService {
  create(createWeeklyMealPlanDto: CreateWeeklyMealPlanDto) {
    return 'This action adds a new weeklyMealPlan';
  }

  findAll() {
    return `This action returns all weeklyMealPlans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weeklyMealPlan`;
  }

  update(id: number, updateWeeklyMealPlanDto: UpdateWeeklyMealPlanDto) {
    return `This action updates a #${id} weeklyMealPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} weeklyMealPlan`;
  }
}
