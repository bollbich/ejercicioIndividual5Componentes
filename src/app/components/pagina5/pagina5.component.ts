import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculosService } from 'src/app/services/calculos.service';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.component.html',
  styleUrls: ['./pagina5.component.css']
})
export class Pagina5Component implements OnInit {

  @Input() num1:number=0;
  @Input() num2:number=0;

  resultado:string='';

  @Output() resultadoEvent:EventEmitter<string> = new EventEmitter();

  constructor(public servicio:CalculosService) { }

  ngOnInit(): void {
    this.servicio.MostrarResultado = true;
  }

  Resultado():void{

  }

  Limpiar():void{
    this.servicio.resultado = 0;
    this.num1=0;
    this.num2=0;
    this.resultado = "";
    this.resultadoEvent.emit(this.resultado);
  }
}
