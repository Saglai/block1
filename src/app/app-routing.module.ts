import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesPagesComponent } from './pages/templates-pages/templates-pages.component';
import { ParentComponent } from './pages/viewChildContenChild/parent/parent.component';
import { AnotherParentComponent } from './pages/life-cycle-hooks/another-parent/another-parent.component';

const routes: Routes = [
  {path: 'templates', component: TemplatesPagesComponent},
  {path: 'view', component: ParentComponent},
  {path: 'cycle', component: AnotherParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
