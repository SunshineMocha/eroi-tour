import { Component } from '@angular/core';
import { Hero } from 'src/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
