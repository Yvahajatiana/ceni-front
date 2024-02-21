import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '',
    component: RegistrationComponent,
  },
];

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RegistrationComponent],
})
export default class ElectorModule {}
