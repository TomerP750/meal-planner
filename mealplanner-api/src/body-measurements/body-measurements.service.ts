import { Injectable } from '@nestjs/common';
import { CreateBodyMeasurementDto } from './dto/create-body-measurement.dto';
import { UpdateBodyMeasurementDto } from './dto/update-body-measurement.dto';

@Injectable()
export class BodyMeasurementsService {
  create(createBodyMeasurementDto: CreateBodyMeasurementDto) {
    return 'This action adds a new bodyMeasurement';
  }

  findAll() {
    return `This action returns all bodyMeasurements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bodyMeasurement`;
  }

  update(id: number, updateBodyMeasurementDto: UpdateBodyMeasurementDto) {
    return `This action updates a #${id} bodyMeasurement`;
  }

  remove(id: number) {
    return `This action removes a #${id} bodyMeasurement`;
  }
}
