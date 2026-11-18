import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MealItemsModule } from './meal-items/meal-items.module';
import { DailyMealPlansModule } from './daily-meal-plans/daily-meal-plans.module';
import { WeeklyMealPlansModule } from './weekly-meal-plans/weekly-meal-plans.module';
import { RecipesModule } from './recipes/recipes.module';
import { FoodsModule } from './foods/foods.module';
import { NutritionTargetsModule } from './nutrition-targets/nutrition-targets.module';
import { BodyMeasurementsModule } from './body-measurements/body-measurements.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, BodyMeasurementsModule, NutritionTargetsModule, FoodsModule, RecipesModule, WeeklyMealPlansModule, DailyMealPlansModule, MealItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
