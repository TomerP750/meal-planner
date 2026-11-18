import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NutritionTargetsService } from './nutrition-targets.service';
import { CreateNutritionTargetDto } from './dto/create-nutrition-target.dto';
import { UpdateNutritionTargetDto } from './dto/update-nutrition-target.dto';

@Controller('nutrition-targets')
export class NutritionTargetsController {
  constructor(private readonly nutritionTargetsService: NutritionTargetsService) {}

  @Post()
  create(@Body() createNutritionTargetDto: CreateNutritionTargetDto) {
    return this.nutritionTargetsService.create(createNutritionTargetDto);
  }

  @Get()
  findAll() {
    return this.nutritionTargetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutritionTargetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNutritionTargetDto: UpdateNutritionTargetDto) {
    return this.nutritionTargetsService.update(+id, updateNutritionTargetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutritionTargetsService.remove(+id);
  }
}
