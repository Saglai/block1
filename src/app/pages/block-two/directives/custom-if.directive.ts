import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {
  _isShow!: Boolean;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private _viewTContainerRef: ViewContainerRef
    ) { }

  @Input()
  set customIf(condintion: Boolean) {
    this._isShow = condintion;
    this._updateView();
  }

  _updateView(): void {
    if (this._isShow) {
      this._viewTContainerRef.createEmbeddedView(this.templateRef);
      return;
    }

    this._viewTContainerRef.clear();
  }
}
