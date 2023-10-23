import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesPagesComponent } from './pages/block-one/templates-pages/templates-pages.component';
import { ParentComponent } from './pages/block-one/viewChildContenChild/parent/parent.component';
import { AnotherParentComponent } from './pages/block-one/life-cycle-hooks/another-parent/another-parent.component';
import { VEHomeComponent } from './pages/block-one/view-encapsulation/v-e-home/v-e-home.component';
import { DataBindingComponent } from './pages/block-one/data-binding/data-binding.component';

const routes: Routes = [
  {path: 'templates', component: TemplatesPagesComponent},
  {path: 'view', component: ParentComponent},
  {path: 'cycle', component: AnotherParentComponent},
  {path: 've', component: VEHomeComponent},
  {path: 'bindings', component: DataBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
