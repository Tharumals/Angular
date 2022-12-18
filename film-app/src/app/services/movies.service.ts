import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    baseUrl: string = 'https://api.themoviedb.org/3';
    apiKey: string = '8c247ea0b4b56ed2ff7d41c9a833aa77';
    constructor(private http: HttpClient) {}

    getMovies(type: string = 'upcoming') {
        return this.http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`);
    }
}
