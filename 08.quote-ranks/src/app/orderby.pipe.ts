import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: "orderby",
  pure: false
})

export class OrderbyPipe implements PipeTransform {

  transform(arr:Array<any>, key, flow):any{
    for(let i=0; i < arr.length; i++){
      for(let j=0; j < arr.length-1; j++){
        if(arr[j].rating > arr[j+1].rating){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    if(flow === 'asc'){
      return arr;
    }
    return arr.reverse();
  }

}
