import { Test, TestingModule } from '@nestjs/testing';
import { WeeklyMealPlansController } from './weekly-meal-plans.controller';
import { WeeklyMealPlansService } from './weekly-meal-plans.service';

describe('WeeklyMealPlansController', () => {
  let controller: WeeklyMealPlansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeeklyMealPlansController],
      providers: [WeeklyMealPlansService],
    }).compile();

    controller = module.get<WeeklyMealPlansController>(WeeklyMealPlansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
