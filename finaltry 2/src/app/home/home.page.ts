import { Component, OnInit } from '@angular/core';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  jokeCategories: string[] = [];
  randomJoke: string = '';
//cambio
selectedCategoryJokes: string[] = [];
// fin cambio
  constructor(private chuckService: ChuckService) {}

  ngOnInit() {
    this.loadRandomJoke();
    this.loadJokeCategories();
  }

  loadRandomJoke() {
    this.chuckService.getRandomJoke().subscribe((joke: any) => {
      this.randomJoke = joke.value;
    });
  }

  loadJokeCategories() {
    this.chuckService.getJokeCategories().subscribe((categories: string[]) => {
      this.jokeCategories = categories;
    });
  }

  //start
  loadJokesByCategory(category: string) {
    this.chuckService.getJokesByCategory(category).subscribe((joke: any) => {
      this.selectedCategoryJokes = [joke.value];
    });
  //fin
}
}