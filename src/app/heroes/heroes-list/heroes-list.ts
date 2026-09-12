import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';
  //Enlace de evento
  showImage(){
    this.muestraImagen=!this.muestraImagen
  }


  heroes:any[]=[
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: `Goku`,
      descripcion:`Kame Kame Ha`,
      race: `Sayayin`,
      ki:110000
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: `Vegetta`,
      descripcion:`Death Ball`,
      race: `Sayayin`,
      ki:100000
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: `Piccolo`,
      descripcion:`Makankosapo`,
      race: `Namekiano`,
      ki:85000
    },
    {
      imagen: "https://dragonball-api.com/characters/gohan.webp",
      nombre: `Gohan`,
      descripcion:`Kame Kame Ha`,
      race: `Humano`,
      ki:90000
    }

  ]

  
}
