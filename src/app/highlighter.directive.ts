import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {
  @Input() defaultColor;
  @Input('appHighlighter') highlightColor;


  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string = 'black';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.elRef.nativeElement.style.background = 'red';

    this.elRef.nativeElement.style.color = 'white';

    this.elRef.nativeElement.style.padding = '10px';

    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    
    // changing dom UI using renderer

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')

    // Or
    // changing dom UI using @HostBinding

    this.backgroundColor = this.highlightColor;
    this.color = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {

    // changing dom UI using renderer

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
    
    // Or
    // changing dom UI using @HostBinding

    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }

}
 