import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar">
      <a href="" class="sidebar-toggler" (click)="toggleSidebar($event)">
        <i class="feather icon-menu"></i>
      </a>
      <div class="navbar-content">
        <form class="search-form">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="feather icon-search"></i>
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              id="navbarForm"
              placeholder="Search here..."
            />
          </div>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item" ngbDropdown>
            <a
              class="nav-link"
              ngbDropdownToggle
              id="languageDropdown"
              role="button"
            >
              <i class="flag-icon flag-icon-us mt-1" title="us"></i>
              <span
                class="font-weight-medium ml-1 mr-1 d-none d-md-inline-block"
                >English</span
              >
            </a>
            <div ngbDropdownMenu aria-labelledby="languageDropdown">
              <a ngbDropdownItem class="py-2"
                ><i class="flag-icon flag-icon-us" title="us" id="us"></i>
                <span class="ml-1"> English </span></a
              >
              <a ngbDropdownItem class="py-2"
                ><i class="flag-icon flag-icon-fr" title="fr" id="fr"></i>
                <span class="ml-1"> French </span></a
              >
              <a ngbDropdownItem class="py-2"
                ><i class="flag-icon flag-icon-de" title="de" id="de"></i>
                <span class="ml-1"> German </span></a
              >
              <a ngbDropdownItem class="py-2"
                ><i class="flag-icon flag-icon-pt" title="pt" id="pt"></i>
                <span class="ml-1"> Portuguese </span></a
              >
              <a ngbDropdownItem class="py-2"
                ><i class="flag-icon flag-icon-es" title="es" id="es"></i>
                <span class="ml-1"> Spanish </span></a
              >
            </div>
          </li>
          <li class="nav-item nav-apps" ngbDropdown>
            <a class="nav-link" ngbDropdownToggle id="appsDropdown">
              <i class="link-icon feather icon-grid"></i>
            </a>
            <div ngbDropdownMenu aria-labelledby="appsDropdown">
              <div
                class="dropdown-header d-flex align-items-center justify-content-between"
              >
                <p class="mb-0 font-weight-medium">Web Apps</p>
                <a href="" (click)="(false)" class="text-muted">Edit</a>
              </div>
              <div class="dropdown-body">
                <div class="d-flex align-items-center apps">
                  <a routerLink="/apps/chat"
                    ><i class="feather icon-message-square"></i>
                    <p>Chat</p></a
                  >
                  <a routerLink="/apps/calendar"
                    ><i class="feather icon-calendar"></i>
                    <p>Calendar</p></a
                  >
                  <a routerLink="/apps/email/inbox"
                    ><i class="feather icon-mail"></i>
                    <p>Email</p></a
                  >
                  <a routerLink="/general/profile"
                    ><i class="feather icon-instagram"></i>
                    <p>Profile</p></a
                  >
                </div>
              </div>
              <div
                class="dropdown-footer d-flex align-items-center justify-content-center"
              >
                <a href="" (click)="(false)">View all</a>
              </div>
            </div>
          </li>
          <li class="nav-item nav-messages" ngbDropdown>
            <a class="nav-link" ngbDropdownToggle id="messageDropdown">
              <i class="link-icon feather icon-mail"></i>
            </a>
            <div ngbDropdownMenu aria-labelledby="messageDropdown">
              <div
                class="dropdown-header d-flex align-items-center justify-content-between"
              >
                <p class="mb-0 font-weight-medium">9 New Messages</p>
                <a href="" (click)="(false)" class="text-muted">Clear all</a>
              </div>
              <div class="dropdown-body">
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="figure">
                    <img src="https://via.placeholder.com/30x30" alt="userr" />
                  </div>
                  <div class="content">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p>Leonardo Payne</p>
                      <p class="sub-text text-muted">2 min ago</p>
                    </div>
                    <p class="sub-text text-muted">Project status</p>
                  </div>
                </a>
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="figure">
                    <img src="https://via.placeholder.com/30x30" alt="userr" />
                  </div>
                  <div class="content">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p>Carl Henson</p>
                      <p class="sub-text text-muted">30 min ago</p>
                    </div>
                    <p class="sub-text text-muted">Client meeting</p>
                  </div>
                </a>
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="figure">
                    <img src="https://via.placeholder.com/30x30" alt="userr" />
                  </div>
                  <div class="content">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p>Jensen Combs</p>
                      <p class="sub-text text-muted">1 hrs ago</p>
                    </div>
                    <p class="sub-text text-muted">Project updates</p>
                  </div>
                </a>
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="figure">
                    <img src="https://via.placeholder.com/30x30" alt="userr" />
                  </div>
                  <div class="content">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p>Amiah Burton</p>
                      <p class="sub-text text-muted">2 hrs ago</p>
                    </div>
                    <p class="sub-text text-muted">Project deadline</p>
                  </div>
                </a>
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="figure">
                    <img src="https://via.placeholder.com/30x30" alt="userr" />
                  </div>
                  <div class="content">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p>Yaretzi Mayo</p>
                      <p class="sub-text text-muted">5 hr ago</p>
                    </div>
                    <p class="sub-text text-muted">New record</p>
                  </div>
                </a>
              </div>
              <div
                class="dropdown-footer d-flex align-items-center justify-content-center"
              >
                <a href="" (click)="(false)">View all</a>
              </div>
            </div>
          </li>
          <li class="nav-item nav-notifications" ngbDropdown>
            <a class="nav-link" ngbDropdownToggle id="notificationDropdown">
              <i class="link-icon feather icon-bell"></i>
              <div class="indicator">
                <div class="circle"></div>
              </div>
            </a>
            <div ngbDropdownMenu aria-labelledby="notificationDropdown">
              <div
                class="dropdown-header d-flex align-items-center justify-content-between"
              >
                <p class="mb-0 font-weight-medium">6 New Notifications</p>
                <a href="" (click)="(false)" class="text-muted">Clear all</a>
              </div>
              <div class="dropdown-body">
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="icon">
                    <i class="feather icon-user-plus"></i>
                  </div>
                  <div class="content">
                    <p>New customer registered</p>
                    <p class="sub-text text-muted">2 sec ago</p>
                  </div>
                </a>
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="icon">
                    <i class="feather icon-gift"></i>
                  </div>
                  <div class="content">
                    <p>New Order Recieved</p>
                    <p class="sub-text text-muted">30 min ago</p>
                  </div>
                </a>
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="icon">
                    <i class="feather icon-alert-circle"></i>
                  </div>
                  <div class="content">
                    <p>Server Limit Reached!</p>
                    <p class="sub-text text-muted">1 hrs ago</p>
                  </div>
                </a>
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="icon">
                    <i class="feather icon-layers"></i>
                  </div>
                  <div class="content">
                    <p>Apps are ready for update</p>
                    <p class="sub-text text-muted">5 hrs ago</p>
                  </div>
                </a>
                <a href="" (click)="(false)" class="dropdown-item">
                  <div class="icon">
                    <i class="feather icon-download"></i>
                  </div>
                  <div class="content">
                    <p>Download completed</p>
                    <p class="sub-text text-muted">6 hrs ago</p>
                  </div>
                </a>
              </div>
              <div
                class="dropdown-footer d-flex align-items-center justify-content-center"
              >
                <a href="" (click)="(false)">View all</a>
              </div>
            </div>
          </li>
          <li class="nav-item nav-profile" ngbDropdown>
            <a class="nav-link" ngbDropdownToggle id="profileDropdown">
              <img src="https://via.placeholder.com/30x30" alt="profile" />
            </a>
            <div ngbDropdownMenu aria-labelledby="profileDropdown">
              <div
                class="dropdown-header d-flex flex-column align-items-center"
              >
                <div class="figure mb-3">
                  <img src="https://via.placeholder.com/80x80" alt="" />
                </div>
                <div class="info text-center">
                  <p class="name font-weight-bold mb-0">{{ 'Amiah Burton' }}</p>
                  <p class="email text-muted mb-3">
                    {{ 'amiahburton@gmail.com' }}
                  </p>
                </div>
              </div>
              <div class="dropdown-body">
                <ul class="profile-nav p-0 pt-3">
                  <li class="nav-item">
                    <a routerLink="/general/profile" class="nav-link">
                      <i class="feather icon-user"></i>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" (click)="(false)" class="nav-link">
                      <i class="feather icon-edit"></i>
                      <span>Edit Profile</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" (click)="(false)" class="nav-link">
                      <i class="feather icon-repeat"></i>
                      <span>Switch User</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" (click)="onLogout($event)" class="nav-link">
                      <i class="feather icon-log-out"></i>
                      <span>Log Out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * Sidebar toggle on hamburger button click
   */
  toggleSidebar(e: any) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  /**
   * Logout
   */
  onLogout(e: any) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
  }
}
