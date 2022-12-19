import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];

    constructor(private movieService: MoviesService) {}

    ngOnInit(): void {
        this.getPageMovies(1);
    }

    getPageMovies(page: number) {
        this.movieService.searchMovies(page).subscribe((movies) => {
            this.movies = movies;
        });
    }

    paginate(event: any) {
        this.getPageMovies(event.page + 1);
    }
}
