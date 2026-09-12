import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {
  num1:string=''
  num2:string=''
  num3:string=''
  num4:string=''
  operacion0:number=0
  operacion1:number=0
  operacion2:number=0
  operacion3:number=0
  operacion4:number=0
  resultado:number=0

calcular(){

  this.operacion0 = parseInt(this.num2) - parseInt(this.num1)

  this.operacion1 = parseInt(this.num4) - parseInt(this.num3)

  this.operacion2 = Math.pow(this.operacion0, 2);

  this.operacion3 = Math.pow(this.operacion1, 2);

  this.operacion4 = this. operacion2 + this.operacion3

  this.resultado = Math.sqrt(this.operacion4);

}
}