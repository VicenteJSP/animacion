import { TypedjsComponent } from './components/typedjs/typedjs.component';
import { MojsComponent } from './components/mojs/mojs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'mojs', component: MojsComponent },
  { path: 'typedjs', component: TypedjsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'mojs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
