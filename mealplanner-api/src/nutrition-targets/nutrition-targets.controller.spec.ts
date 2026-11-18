import { Test, TestingModule } from '@nestjs/testing';
import { NutritionTargetsController } from './nutrition-targets.controller';
import { NutritionTargetsService } from './nutrition-targets.service';

describe('NutritionTargetsController', () => {
  let controller: NutritionTargetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutritionTargetsController],
      providers: [NutritionTargetsService],
    }).compile();

    controller = module.get<NutritionTargetsController>(NutritionTargetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
