import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollRevealComponent } from './components/scroll-reveal/scroll-reveal.component';
import { TypedjsComponent } from './components/typedjs/typedjs.component';
import { MojsComponent } from './components/mojs/mojs.component';

const routes: Routes = [
  { path: 'mojs', component: MojsComponent },
  { path: 'typedjs', component: TypedjsComponent },
  { path: 'scrollreveal', component: ScrollRevealComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'mojs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
