import { Test, TestingModule } from '@nestjs/testing';
import { PandocController } from './pandoc.controller';

describe('PandocController', () => {
  let controller: PandocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PandocController],
    }).compile();

    controller = module.get<PandocController>(PandocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
