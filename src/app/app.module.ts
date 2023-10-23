import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './pages/block-one/viewChildContenChild/parent/parent.component';
import { ChildComponent } from './pages/block-one/viewChildContenChild/child/child.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TemplatesPagesComponent } from './pages/block-one/templates-pages/templates-pages.component';
import { AnotherParentComponent } from './pages/block-one/life-cycle-hooks/another-parent/another-parent.component';
import { AnotherChildComponent } from './pages/block-one/life-cycle-hooks/another-child/another-child.component';
import { FormsModule } from '@angular/forms';
import { VENoneComponent } from './pages/block-one/view-encapsulation/v-e-none/v-e-none.component';
import { VEEmulatedComponent } from './pages/block-one/view-encapsulation/v-e-emulated/v-e-emulated.component';
import { VEShadowComponent } from './pages/block-one/view-encapsulation/v-e-shadow/v-e-shadow.component';
import { VEShadowChildComponent } from './pages/block-one/view-encapsulation/v-e-shadow-child/v-e-shadow-child.component';
import { VEHomeComponent } from './pages/block-one/view-encapsulation/v-e-home/v-e-home.component';
import { DataBindingComponent } from './pages/block-one/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    MainButtonComponent,
    ProductCardComponent,
    TemplatesPagesComponent,
    AnotherParentComponent,
    AnotherChildComponent,
    VENoneComponent,
    VEEmulatedComponent,
    VEShadowComponent,
    VEShadowChildComponent,
    VEHomeComponent,
    DataBindingComponent
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
