import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CalculosService {

  private _resultado:number=0;

  get resultado():number{
    return this._resultado;
  }

  set resultado(resultado:number){
    this._resultado = resultado;
  }

  public suma(valor1:number, valor2:number):void
	{
		this.resultado = valor1 + valor2;
	}

	public Multiplicacion(multiplicador:number, multiplicando:number):void
	{
		this.resultado = multiplicador * multiplicando;
	}

	public Resta(valor1:number, valor2:number):void
	{
		this.resultado = valor1 - valor2;
	}

	public Division(dividendo:number, divisor:number):void
	{
		this.resultado = dividendo / divisor;
	}

	public RaizCuadrada(valor1:number):void
	{
		this.resultado = Math.sqrt(valor1);
  }
  constructor() { }
}
