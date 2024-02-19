import { Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./views/pages/dashboard/dashboard.component'),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
