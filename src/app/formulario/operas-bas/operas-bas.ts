import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1:string=''
  num2:string=''
  operacion:number=0
  resultado:number=0

  calcular():void{
    switch (this.operacion) {
      case 1:
        this.sumar();
        break;
      case 2:
        this.restar();
        break;
        
      case 3:
        this.multiplicar();
        break;

      case 4:
        this.dividir();
        break;
    }
  }
  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2)
  }
  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2)
  }
  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2)
  }


}
