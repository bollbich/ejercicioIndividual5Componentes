import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculosService } from 'src/app/services/calculos.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  @Input() num1:number=0;
  @Input() num2:number=0;

  resultado:string='';

  @Output() resultadoEvent:EventEmitter<string> = new EventEmitter();

  constructor(public servicio:CalculosService) { }

  ngOnInit(): void {
  }
  Resultado():void{

  }
}
