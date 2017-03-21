import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  moduleId: module.id,
  selector: 'my-heroes',
templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

  
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;

heroes: Hero[];

constructor(private router: Router, private heroService: HeroService) { }

  getHeroes() {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

 
   ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  
  
}