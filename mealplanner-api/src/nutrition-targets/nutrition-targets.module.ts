import { Module } from '@nestjs/common';
import { NutritionTargetsService } from './nutrition-targets.service';
import { NutritionTargetsController } from './nutrition-targets.controller';

@Module({
  controllers: [NutritionTargetsController],
  providers: [NutritionTargetsService],
})
export class NutritionTargetsModule {}
