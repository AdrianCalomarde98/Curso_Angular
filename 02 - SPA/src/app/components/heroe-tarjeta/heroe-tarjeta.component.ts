import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  
  @Input() heroe: any = {};
  @Input() i: number | undefined;
  @Input() nombre = "";

  constructor(private _router: Router, private _heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  verHeroe(){
    this._router.navigate( ['/heroe', this.i] );
  }
  verHeroeNombre(){
    const i = this._heroesService.getHeroeIdx(this.nombre);
    if (i>=0){
      this._router.navigate( ['/heroe', i] );
    }
  }
}
