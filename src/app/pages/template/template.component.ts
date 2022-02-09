import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    name: 'Mariana',
    surname: 'Rausch',
    email: 'marianarauschb@gmail.com',
    country: 'ARG'
  }

  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {

    this.paisService.getPaises()
      .subscribe( paises => {
        this.paises = paises;

        this.paises.unshift({
          name: '[ Seleccione País ]',
          code: ''
        })

        console.log( this.paises );
      });

  }

  guardar( forma: NgForm ) {
    console.log( forma );

    if ( forma.invalid ){

      Object.values( forma.controls ).forEach( control => {
        control.markAllAsTouched();
      });

      return;

    }

    console.log( forma.value );
  }

}
