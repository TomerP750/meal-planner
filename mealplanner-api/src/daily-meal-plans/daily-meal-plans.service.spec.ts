import { Test, TestingModule } from '@nestjs/testing';
import { DailyMealPlansService } from './daily-meal-plans.service';

describe('DailyMealPlansService', () => {
  let service: DailyMealPlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyMealPlansService],
    }).compile();

    service = module.get<DailyMealPlansService>(DailyMealPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
