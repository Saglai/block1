import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ParentComponent } from './pages/block-one/viewChildContenChild/parent/parent.component';
import { ChildComponent } from './pages/block-one/viewChildContenChild/child/child.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TemplatesPagesComponent } from './pages/block-one/templates-pages/templates-pages.component';
import { AnotherParentComponent } from './pages/block-one/life-cycle-hooks/another-parent/another-parent.component';
import { AnotherChildComponent } from './pages/block-one/life-cycle-hooks/another-child/another-child.component';
import { VENoneComponent } from './pages/block-one/view-encapsulation/v-e-none/v-e-none.component';
import { VEEmulatedComponent } from './pages/block-one/view-encapsulation/v-e-emulated/v-e-emulated.component';
import { VEShadowComponent } from './pages/block-one/view-encapsulation/v-e-shadow/v-e-shadow.component';
import { VEShadowChildComponent } from './pages/block-one/view-encapsulation/v-e-shadow-child/v-e-shadow-child.component';
import { VEHomeComponent } from './pages/block-one/view-encapsulation/v-e-home/v-e-home.component';
import { DataBindingComponent } from './pages/block-one/data-binding/data-binding.component';
import { DirectivesComponent } from './pages/block-two/directives/ngFor/directives.component';
import { NgSwitchComponent } from './pages/block-two/directives/ng-switch/ng-switch.component';
import { NgIfComponent } from './pages/block-two/directives/ng-if/ng-if.component';
import { NgClassComponent } from './pages/block-two/directives/ng-class/ng-class.component';
import { NgStyleComponent } from './pages/block-two/directives/ng-style/ng-style.component';
import { StyleBindingComponent } from './pages/block-two/directives/style-binding/style-binding.component';
import { ClassBindingComponent } from './pages/block-two/directives/class-binding/class-binding.component';
import { CustomIfDirective } from './pages/block-two/directives/custom-if.directive';
import { PipesDeafultComponent } from './pages/block-two/pipes-default/pipes-default.component';
import { CustomUpperCase } from './pipes/custom-uppercase.pipe';
import { CustomBoldDirective } from './pages/block-two/directives/custom-bold.directive';
import { TemplateDrivenComponent } from './pages/block-three/forms/template-driven/template-driven.component';
import { ReactiveComponent } from './pages/block-three/forms/reactive/reactive.component';
import { FormBuilderComponent } from './pages/block-three/forms/form-builder/form-builder.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { AsyncComponent } from './pages/block-three/async/async.component';
import { UtilityComponent } from './pages/block-three/advanced-types/utility/utility.component';
import { FeedbackFormComponent } from './pages/block-three/forms/feedback-form/feedback-form.component';

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
    DataBindingComponent,
    DirectivesComponent,
    NgSwitchComponent,
    NgIfComponent,
    NgClassComponent,
    NgStyleComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    CustomIfDirective,
    PipesDeafultComponent,
    CustomUpperCase,
    CustomBoldDirective,
    TemplateDrivenComponent,
    ReactiveComponent,
    FormBuilderComponent,
    CustomInputComponent,
    CustomCounterComponent,
    AsyncComponent,
    UtilityComponent,
    FeedbackFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
