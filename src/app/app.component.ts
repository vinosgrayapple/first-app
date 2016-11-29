import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  title = {head:'OOOOOapp works!'};
  delete = false;
  test= 'Starting Value!!';
  boundValue = 1000;
}
 