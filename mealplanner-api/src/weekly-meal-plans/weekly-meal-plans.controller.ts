import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeeklyMealPlansService } from './weekly-meal-plans.service';
import { CreateWeeklyMealPlanDto } from './dto/create-weekly-meal-plan.dto';
import { UpdateWeeklyMealPlanDto } from './dto/update-weekly-meal-plan.dto';

@Controller('weekly-meal-plans')
export class WeeklyMealPlansController {
  constructor(private readonly weeklyMealPlansService: WeeklyMealPlansService) {}

  @Post()
  create(@Body() createWeeklyMealPlanDto: CreateWeeklyMealPlanDto) {
    return this.weeklyMealPlansService.create(createWeeklyMealPlanDto);
  }

  @Get()
  findAll() {
    return this.weeklyMealPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weeklyMealPlansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeeklyMealPlanDto: UpdateWeeklyMealPlanDto) {
    return this.weeklyMealPlansService.update(+id, updateWeeklyMealPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weeklyMealPlansService.remove(+id);
  }
}
