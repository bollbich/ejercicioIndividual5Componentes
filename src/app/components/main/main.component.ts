import { Component,Input, OnInit } from '@angular/core';
import { CalculosService } from 'src/app/services/calculos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public servicio:CalculosService) { }

  ngOnInit(): void {
  }

  resultado:string='';

  ResultadoCalculo(resultado:string){
   this.resultado = resultado;
  }

}
