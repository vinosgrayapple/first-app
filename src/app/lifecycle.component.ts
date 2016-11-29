import { throws } from 'assert';
import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
  <ng-content></ng-content>
  <hr>
  <p #boundParagrph>{{bindable}}</p>
  
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit, AfterContentChecked, OnDestroy  {
@Input() 
  bindable: number = 1000;
@ViewChild('boundParagraph') 
  boundParagraph: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.log('ngOnChanges');
  }
  ngOnChanges(){
  this.log('ngOnChanges');
  }
  ngDoCheck(){
  this.log('ngDoCheck');
  }
  ngAfterContentInit(){
  this.log('ngAfterContentInit');
  }
  ngAfterViewChecked(){
  this.log('ngAfterViewChecked');
  }
  ngAfterViewInit(){
  this.log('ngAfterViewInit');
  console.log(this.boundParagraph);
  }
  ngAfterContentChecked(){
  this.log('ngAfterContentChecked');
  }
  ngOnDestroy(){
  this.log('ngOnDestroy');
  }
private log(hook: string) {
  console.log(hook);
}
}
