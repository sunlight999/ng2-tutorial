import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HeroesComponent }    from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroService } from './hero.service';
import { HeroSearchService } from './hero-search.service';
import { HeroRoutingModule } from './heroes-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  exports: [
    HeroSearchComponent
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService,HeroSearchService ]
})
export class HeroesModule {}
