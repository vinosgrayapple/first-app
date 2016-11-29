import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  
})
export class DatabindingComponent  {

 stringInterpolation: string = 'This is stringInterpolation';
 numberInterpolation: number = 23;
   onTest(){
     return true;
   }
   onClicked(value: string) {
     alert(value);
   }
}
 