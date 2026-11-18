import { Test, TestingModule } from '@nestjs/testing';
import { NutritionTargetsService } from './nutrition-targets.service';

describe('NutritionTargetsService', () => {
  let service: NutritionTargetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutritionTargetsService],
    }).compile();

    service = module.get<NutritionTargetsService>(NutritionTargetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
