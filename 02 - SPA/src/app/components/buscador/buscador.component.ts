import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string | undefined;

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService,
               private _router: Router ) {

   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      console.log(params.termino);
      this.heroes = this._heroesService.buscarHeroes( params.termino );
    } );

  }

  verHeroe(nombre: string){
    const i = this._heroesService.getHeroeIdx(nombre);
    if (i>=0){
      this._router.navigate( ['/heroe', i] );
    }
  }

}
