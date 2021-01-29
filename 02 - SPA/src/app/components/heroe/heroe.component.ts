import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  house: string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params.id);
      console.log( this.heroe );
    } );
    if (this.heroe.casa === 'Marvel') {
      this.house = 'assets/img/marvel.png';
    }else{
      this.house = 'assets/img/dc.png';
    }
  }

  ngOnInit(): void {
  }

}
