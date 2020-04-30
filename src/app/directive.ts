import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[productlist]'
})
export class productDirective {
  constructor( private el: ElementRef) { 
    el.nativeElement.innerText = "hey world ";


  }
  
@HostListener('click') onClick() {
    //window.alert('Host Element Clicked');
    this.el.nativeElement.innerText = "hey world ";
}
}