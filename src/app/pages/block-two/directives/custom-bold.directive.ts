import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customBoldColor]',
})
export class CustomBoldDirective {
  private fontWeight = '';
  private isAddPadding = false;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
    ) { }

    @HostListener('mouseenter') 
    onMouseEnter() {
      this.setFontWeight('red');
      this.fontWeight = 'bold';
      this.border = '1px solid blue';
      this.isAddPadding = true;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
      this.setFontWeight('black');
      this.fontWeight = 'normal';
      this.border = 'none';
      this.isAddPadding = false;
    }

    @HostBinding('style.border') border!: string;
    @HostBinding('style.font-weight') get getFontWeight() {
      return this.fontWeight;
    }
    @HostBinding('class.padding') get hasPadding() { return this.isAddPadding };


    private setFontWeight(newColor: string) {
      this.renderer2.setStyle(this.el.nativeElement, 'color', newColor);
    }
}
