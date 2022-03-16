import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculosService } from 'src/app/services/calculos.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

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
