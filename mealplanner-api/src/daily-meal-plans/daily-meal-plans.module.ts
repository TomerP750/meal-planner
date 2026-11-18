import { Module } from '@nestjs/common';
import { DailyMealPlansService } from './daily-meal-plans.service';
import { DailyMealPlansController } from './daily-meal-plans.controller';

@Module({
  controllers: [DailyMealPlansController],
  providers: [DailyMealPlansService],
})
export class DailyMealPlansModule {}
