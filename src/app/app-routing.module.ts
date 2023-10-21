import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesPagesComponent } from './pages/templates-pages/templates-pages.component';
import { ParentComponent } from './pages/viewChildContenChild/parent/parent.component';
import { AnotherParentComponent } from './pages/life-cycle-hooks/another-parent/another-parent.component';
import { VEHomeComponent } from './pages/view-encapsulation/v-e-home/v-e-home.component';

const routes: Routes = [
  {path: 'templates', component: TemplatesPagesComponent},
  {path: 'view', component: ParentComponent},
  {path: 'cycle', component: AnotherParentComponent},
  {path: 'view-enc', component: VEHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
