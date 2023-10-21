import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './pages/viewChildContenChild/parent/parent.component';
import { ChildComponent } from './pages/viewChildContenChild/child/child.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TemplatesPagesComponent } from './pages/templates-pages/templates-pages.component';
import { AnotherParentComponent } from './pages/life-cycle-hooks/another-parent/another-parent.component';
import { AnotherChildComponent } from './pages/life-cycle-hooks/another-child/another-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    MainButtonComponent,
    ProductCardComponent,
    TemplatesPagesComponent,
    AnotherParentComponent,
    AnotherChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
