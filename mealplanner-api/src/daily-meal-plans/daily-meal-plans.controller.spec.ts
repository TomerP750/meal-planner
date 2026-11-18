import { Test, TestingModule } from '@nestjs/testing';
import { DailyMealPlansController } from './daily-meal-plans.controller';
import { DailyMealPlansService } from './daily-meal-plans.service';

describe('DailyMealPlansController', () => {
  let controller: DailyMealPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyMealPlansController],
      providers: [DailyMealPlansService],
    }).compile();

    controller = module.get<DailyMealPlansController>(DailyMealPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
