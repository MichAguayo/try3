/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChuckService {
  private categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
  private randomJokeUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {}

  getJokeCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.categoriesUrl);
  }

  getRandomJoke(): Observable<any> {
    return this.http.get<any>(this.randomJokeUrl);
  }
  //aqui
  getJokesByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.getJokesByCategory}${category}`);
  }
  //fin
}*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChuckService {
  private categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
  private randomJokeUrl = 'https://api.chucknorris.io/jokes/random';
  private jokesByCategoryUrl = 'https://api.chucknorris.io/jokes/random?category=';

  constructor(private http: HttpClient) {}

  getJokeCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.categoriesUrl);
  }

  getRandomJoke(): Observable<any> {
    return this.http.get<any>(this.randomJokeUrl);
  }

  getJokesByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.jokesByCategoryUrl}${category}`);
  }
}