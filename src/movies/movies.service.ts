import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdataMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if(!movie) throw new NotFoundException(`Movie not found ${id}`);
        return movie;
    }

    deleteOne(id: number)  {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        });
    }
    patch(id:number, movieData:UpdataMovieDto) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({
            ...movie,
            ...movieData,
        })
    }
}