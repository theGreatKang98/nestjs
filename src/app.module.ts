import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MovieControllerController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [ MovieControllerController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
