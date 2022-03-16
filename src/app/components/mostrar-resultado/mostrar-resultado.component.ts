import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculosService } from 'src/app/services/calculos.service';

@Component({
  selector: 'app-mostrar-resultado',
  templateUrl: './mostrar-resultado.component.html',
  styleUrls: ['./mostrar-resultado.component.css']
})
export class MostrarResultadoComponent implements OnInit {

  @Input() resultado:string | undefined;

  constructor(public servicio:CalculosService) { }

  ngOnInit(): void {
  }

}
