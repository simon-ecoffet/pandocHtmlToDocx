import { Test, TestingModule } from '@nestjs/testing';
import { PandocService } from './pandoc.service';

describe('PandocService', () => {
  let service: PandocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PandocService],
    }).compile();

    service = module.get<PandocService>(PandocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
