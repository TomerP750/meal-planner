import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyMealPlansService } from './daily-meal-plans.service';
import { CreateDailyMealPlanDto } from './dto/create-daily-meal-plan.dto';
import { UpdateDailyMealPlanDto } from './dto/update-daily-meal-plan.dto';

@Controller('daily-meal-plans')
export class DailyMealPlansController {
  constructor(private readonly dailyMealPlansService: DailyMealPlansService) {}

  @Post()
  create(@Body() createDailyMealPlanDto: CreateDailyMealPlanDto) {
    return this.dailyMealPlansService.create(createDailyMealPlanDto);
  }

  @Get()
  findAll() {
    return this.dailyMealPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyMealPlansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyMealPlanDto: UpdateDailyMealPlanDto) {
    return this.dailyMealPlansService.update(+id, updateDailyMealPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyMealPlansService.remove(+id);
  }
}
