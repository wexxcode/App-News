import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroDaBusca'
})
export class AppPipe implements PipeTransform {

  transform(artigos, digitado ) {

    digitado = digitado.toLowerCase();
    return artigos.filter( artigo => artigo.titulo.toLowerCase().includes(digitado));
    
}


}
