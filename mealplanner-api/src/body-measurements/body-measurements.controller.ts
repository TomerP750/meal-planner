import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BodyMeasurementsService } from './body-measurements.service';
import { CreateBodyMeasurementDto } from './dto/create-body-measurement.dto';
import { UpdateBodyMeasurementDto } from './dto/update-body-measurement.dto';

@Controller('body-measurements')
export class BodyMeasurementsController {
  constructor(private readonly bodyMeasurementsService: BodyMeasurementsService) {}

  @Post()
  create(@Body() createBodyMeasurementDto: CreateBodyMeasurementDto) {
    return this.bodyMeasurementsService.create(createBodyMeasurementDto);
  }

  @Get()
  findAll() {
    return this.bodyMeasurementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bodyMeasurementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBodyMeasurementDto: UpdateBodyMeasurementDto) {
    return this.bodyMeasurementsService.update(+id, updateBodyMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bodyMeasurementsService.remove(+id);
  }
}
