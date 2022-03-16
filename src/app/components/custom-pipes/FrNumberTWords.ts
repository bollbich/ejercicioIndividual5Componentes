import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'FrNumberTWords' })
export class FrNumberTWords implements PipeTransform {


  transform(value: number, ...args: any[]):string{

    return this.number2words(value);
  };



  //num:string[] = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  num:string[] = "cero uno dos tres cuatro cinco seis siete ocho nueve diez once doce trece catorce quince dieciseis diecisiete dieciocho diecinueve".split(" ");

  //tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
  tens = "veinte treinta cuarenta cincuenta sesenta setenta ochenta noventa".split(" ");

 number2words(n:number):string
 {
    if (n < 20)
    {
      return this.num[n];
    }

    let digit = n%10;

    if (n < 100)
    {
      return this.tens[~~(n/10)-2] + (digit? "-" + this.num[digit]: "");
    }

    if (n < 1000)
    {
      return this.num[~~(n/100)] +" ciento" + (n%100 == 0? "": " y " + this.number2words(n%100));
    }

    return this.number2words(~~(n/1000)) + " mil" + (n%1000 != 0? " " + this.number2words(n%1000): "");
}
}





