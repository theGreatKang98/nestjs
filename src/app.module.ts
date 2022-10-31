import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [ MoviesController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
