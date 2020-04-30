import { Directive  , HostListener , ElementRef  } from "@angular/core";

@Directive({
selector:'[items]'
})
export class proItems {
constructor( private ele : ElementRef){ }

@HostListener('click') onClick(){
this.ele.nativeElement.innerText = "hello world";

}

}