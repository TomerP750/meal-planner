import { Module } from '@nestjs/common';
import { WeeklyMealPlansService } from './weekly-meal-plans.service';
import { WeeklyMealPlansController } from './weekly-meal-plans.controller';

@Module({
  controllers: [WeeklyMealPlansController],
  providers: [WeeklyMealPlansService],
})
export class WeeklyMealPlansModule {}
