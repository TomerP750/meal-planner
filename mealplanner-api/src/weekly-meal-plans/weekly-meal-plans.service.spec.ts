import { Test, TestingModule } from '@nestjs/testing';
import { WeeklyMealPlansService } from './weekly-meal-plans.service';

describe('WeeklyMealPlansService', () => {
  let service: WeeklyMealPlansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeeklyMealPlansService],
    }).compile();

    service = module.get<WeeklyMealPlansService>(WeeklyMealPlansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
