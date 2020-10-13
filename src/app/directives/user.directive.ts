import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective implements OnInit {

  constructor(private er: ElementRef) { }

  ngOnInit(){
     this.er.nativeElement.style.textTransform='uppercase';
  }


}
