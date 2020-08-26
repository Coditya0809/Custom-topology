import { Directive, ElementRef, HostListener, Renderer, Injectable } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appGetMouseCoord]'
})

export class GetMouseCoordDirective {
  // mouseX:any;
  // mouseY:any;

  // constructor(private el: ElementRef, private renderer: Renderer) { }

  // //  canvasOffset=$("#draw").offset();

  //  offsetX= $("#draw").offset().left;
  //  offsetY= $("#draw").offset().top;

  // //  offsetY= canvasOffset.top;

  // @HostListener('mouseover') onClick() {
  //   this.renderer.listenGlobal(this.el.nativeElement, 'mousedown', (event) => {
  //     this.mouseX = event.clientX- this.offsetX;
  //     this.mouseY = event.clientY - this.offsetY
  //     console.log('Mouse x , MOuse Y',event.clientX- this.offsetX,event.clientY - this.offsetY);
  //     // console.log();

  //   });
  //   // this.el.nativeElement.childNodes[0].clientLeft = 10
  //   console.log(this.el.nativeElement.childNodes[0].clientTop);
  //   console.log(this.el.nativeElement.childNodes[0].clientLeft);
     
  //   console.log('canvas',this.offsetX,this.offsetY)
  // }
}