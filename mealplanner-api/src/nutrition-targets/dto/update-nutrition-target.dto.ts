import { PartialType } from '@nestjs/mapped-types';
import { CreateNutritionTargetDto } from './create-nutrition-target.dto';

export class UpdateNutritionTargetDto extends PartialType(CreateNutritionTargetDto) {}
