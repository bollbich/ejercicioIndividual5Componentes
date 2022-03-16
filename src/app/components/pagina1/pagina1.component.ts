import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculosService } from 'src/app/services/calculos.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  @Input() num1:number=0;
  @Input() num2:number=0;

  resultado:string='';

  @Output() resultadoEvent:EventEmitter<string> = new EventEmitter();

  constructor(public servicio:CalculosService) { }

  ngOnInit(): void {
  }

  Sumar():void{
    if(this.Comprobar())
    {
      this.resultado = "El resultado es: "+String(this.servicio.suma(this.num1,this.num2));
      this.resultadoEvent.emit(this.resultado);
    }

  }

  Restar():void{
    if(this.Comprobar())
    {
      this.resultado = "El resultado es: "+String(this.servicio.Resta(this.num1,this.num2));
      this.resultadoEvent.emit(this.resultado);
    }
  }

  Multiplicar():void{
    if(this.Comprobar())
    {
      this.resultado = "El resultado es: "+String(this.servicio.Multiplicacion(this.num1,this.num2));
      this.resultadoEvent.emit(this.resultado);
    }
  }

  Dividir():void{
    if(this.Comprobar())
    {
      this.resultado = "El resultado es: "+String(this.servicio.Division(this.num1,this.num2));
      this.resultadoEvent.emit(this.resultado);
    }
  }

  Limpiar():void{
    this.servicio.resultado = 0;
    this.num1=0;
    this.num2=0;
    this.resultado = "";
    this.resultadoEvent.emit(this.resultado);
  }

  Comprobar():boolean{

    return true;
    // if((typeof Number === typeof this.num1))
    // {
    //       if((typeof Number === typeof this.num2))
    //       {
    //         return true;
    //       }
    //       else return false;

    // }else return false;
  }

}
