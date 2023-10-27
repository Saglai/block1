import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {
  _condition!: Boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private _viewTContainerRef: ViewContainerRef
    ) { }

  @Input()
  set customIf(isTrue: Boolean) {
    this._condition = isTrue;
    this._updateView();
  }

  _updateView(): void {
    if (this._condition) {
      this._viewTContainerRef.createEmbeddedView(this.templateRef);
      return;
    }

    this._viewTContainerRef.clear();
  }
}
