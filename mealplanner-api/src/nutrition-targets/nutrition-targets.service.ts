import { Injectable } from '@nestjs/common';
import { CreateNutritionTargetDto } from './dto/create-nutrition-target.dto';
import { UpdateNutritionTargetDto } from './dto/update-nutrition-target.dto';

@Injectable()
export class NutritionTargetsService {
  create(createNutritionTargetDto: CreateNutritionTargetDto) {
    return 'This action adds a new nutritionTarget';
  }

  findAll() {
    return `This action returns all nutritionTargets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutritionTarget`;
  }

  update(id: number, updateNutritionTargetDto: UpdateNutritionTargetDto) {
    return `This action updates a #${id} nutritionTarget`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutritionTarget`;
  }
}
