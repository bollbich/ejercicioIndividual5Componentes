import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CalculosService {

  private _resultado:number=0;

  private _MostrarResultado:boolean=true;

  get MostrarResultado():boolean{
    return this._MostrarResultado;
  }

  set MostrarResultado(MostrarResultado:boolean){
    this._MostrarResultado = MostrarResultado;
  }

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

  public AreaTriangulo(valor1:number, valor2:number):void
	{
		this.resultado = (valor1*valor2)/2
  }

  public PerimetroRectangulo(valor1:number, valor2:number):void
	{
		this.resultado = ((2*valor1)+(2*valor2))
  }
  constructor() { }
}
