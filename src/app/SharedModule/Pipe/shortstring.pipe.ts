import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'shortString'
})

export class shortStringPipe implements PipeTransform{
  transform(value: string):string
  {
    if(value.length > 15){
      return (value.slice(0 , 15) + "....");
    }else{
      return value;
    }
  }
}
