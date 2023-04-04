import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case 'Masculino':return 'man';
      case 'Feminino':return 'woman';
    }
    return 'woman';
  }

}
