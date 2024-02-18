import { Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-base',
  standalone: true,
  template: `
    <div class="main-wrapper">
      <!-- partial:sidebar -->
      <app-sidebar></app-sidebar>
      <!-- partial -->

      <div class="page-wrapper">
        <!-- partial:navbar -->
        <app-navbar></app-navbar>
        <!-- partial -->

        <div class="page-content">
          <!-- Spinner for lazyload modules -->
          @if (isLoading) {
          <div class="spinner-wrapper">
            <div class="spinner">Loading...</div>
          </div>
          } @else {
          <router-outlet></router-outlet>
          }
        </div>

        <!-- partial:footer -->
        <app-footer></app-footer>
        <!-- partial -->
      </div>
    </div>
  `,
  styles: ``,
  imports: [RouterModule, SidebarComponent, NavbarComponent, FooterComponent],
})
export class BaseComponent {
  isLoading!: boolean;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }
}
