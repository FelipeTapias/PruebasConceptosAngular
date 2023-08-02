import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';
import { GraficoLineasComponent } from './grafico-lineas/grafico-lineas.component';

const routes: Routes = [{ path: 'barras', component: GraficoBarrasComponent, pathMatch: 'full' },
                        { path: 'lineal', component: GraficoLineasComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
