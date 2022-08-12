import { Module } from '@nestjs/common';
import { PandocService } from './pandoc.service';

@Module({
  providers: [PandocService]
})
export class PandocModule {}
