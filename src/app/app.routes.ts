import { Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { RegistrationComponent } from './features/elector/registration/registration.component';

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
      {
        path: 'elector',
        loadChildren: () => import('./features/elector/elector.module'),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
