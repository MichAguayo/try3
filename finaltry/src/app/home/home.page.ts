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
}