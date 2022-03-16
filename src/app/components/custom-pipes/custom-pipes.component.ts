import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CalculosService } from 'src/app/services/calculos.service';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit{

  constructor(private servicio:CalculosService) {
    this.servicio.MostrarResultado = false;
  }

  ngOnInit(): void {
  }

  num1ForSize:number = 12334489;

  resultado:string='';

  ResultadoCalculo(resultado:string){
   this.resultado = resultado;
  }

}
