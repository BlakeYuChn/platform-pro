import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowToUseComponent } from './pages/how-to-use/how-to-use.component';
import { ExampleFilterFormComponent } from './pages/how-to-use/example-filter-form/example-filter-form.component';

const routes: Routes = [
  {
    path: 'how-to-use',
    component: HowToUseComponent,
    children: [
      { path: '', redirectTo: 'example-filter-form', pathMatch: 'full' },
      { path: 'example-filter-form', component: ExampleFilterFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
