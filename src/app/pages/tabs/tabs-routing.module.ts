import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'guardado',
        loadChildren: () => import('../guardado/guardado.module').then(m => m.GuardadoPageModule)
      },
      {
        path: 'polizas',
        loadChildren: () => import('../polizas/polizas.module').then(m => m.PolizasPageModule)
      },
      {
        path: 'ayuda',
        loadChildren: () => import('../ayuda/ayuda.module').then(m => m.AyudaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
