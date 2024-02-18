import {
  Component,
  ElementRef,
  Inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MENU, MenuItem } from './menu';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import MetisMenu from 'metismenujs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-om-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, PerfectScrollbarModule],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  template: `
    <nav class="sidebar">
      <div class="sidebar-header">
        <!--- Logo -->
        <a routerLink="/" class="sidebar-brand"> CENI <span>NEM</span> </a>

        <!--- Toggler -->
        <div
          class="sidebar-toggler not-active"
          #sidebarToggler
          (click)="toggleSidebar($event)"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        class="sidebar-body"
        (mouseenter)="operSidebarFolded()"
        (mouseleave)="closeSidebarFolded()"
        [perfectScrollbar]
      >
        <!--- Sidemenu start -->

        <ul class="sidebar-nav metismenu" id="sidebar-menu" #sidebarMenu>
          <ng-container *ngFor="let item of menuItems">
            <li class="nav-item nav-category" *ngIf="item.isTitle">
              {{ item.label }}
            </li>

            <li class="nav-item" *ngIf="!item.isTitle">
              <a
                class="nav-link"
                *ngIf="hasItems(item)"
                href="javascript:void(0);"
              >
                <i
                  class="link-icon"
                  [attr.data-feather]="item.icon"
                  appFeatherIcon
                  *ngIf="item.icon"
                ></i>
                <span class="link-title"> {{ item.label }}</span>
                <span
                  class="link-arrow"
                  data-feather="chevron-down"
                  appFeatherIcon
                ></span>
              </a>

              <a
                class="nav-link nav-link-ref"
                [routerLink]="item.link"
                *ngIf="!hasItems(item)"
                [attr.data-parent]="item.parentId"
              >
                <i
                  class="link-icon"
                  [attr.data-feather]="item.icon"
                  appFeatherIcon
                  *ngIf="item.icon"
                ></i>
                <span class="link-title"> {{ item.label }}</span>
                <span
                  class="badge badge-{{ item.badge.variant }}"
                  *ngIf="item.badge"
                  >{{ item.badge.text }}</span
                >
              </a>

              <ul
                class="sidebar-nav sub-menu nav-second-level"
                *ngIf="hasItems(item)"
                aria-expanded="false"
              >
                <li class="nav-item" *ngFor="let subitem of item.subItems">
                  <a
                    class="nav-link side-nav-link-a-ref"
                    *ngIf="hasItems(subitem)"
                    href="javascript:void(0);"
                  >
                    <i
                      class="link-icon"
                      [attr.data-feather]="subitem.icon"
                      appFeatherIcon
                      *ngIf="subitem.icon"
                    ></i>
                    <span class="link-title"> {{ subitem.label }}</span>
                    <span
                      class="link-arrow"
                      data-feather="chevron-down"
                      appFeatherIcon
                    ></span>
                  </a>

                  <a
                    class="nav-link nav-link-ref"
                    [routerLink]="subitem.link"
                    *ngIf="!hasItems(subitem)"
                    [attr.data-parent]="subitem.parentId"
                  >
                    <i
                      class="link-icon"
                      [attr.data-feather]="subitem.icon"
                      appFeatherIcon
                      *ngIf="subitem.icon"
                    ></i>
                    {{ subitem.label }}
                  </a>

                  <ul
                    class="sidebar-nav sub-menu nav-third-level"
                    *ngIf="hasItems(subitem)"
                    aria-expanded="false"
                  >
                    <li
                      class="nav-item"
                      *ngFor="let subSubitem of subitem.subItems"
                    >
                      <a
                        class="nav-link nav-link-ref"
                        [routerLinkActive]="['active']"
                        [attr.data-parent]="subSubitem.parentId"
                      >
                        <i
                          class="link-icon"
                          [attr.data-feather]="subitem.icon"
                          appFeatherIcon
                          *ngIf="subitem.icon"
                        ></i>
                        {{ subSubitem.label }}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ng-container>
          <li class="nav-item nav-category">Docs</li>
          <li class="nav-item">
            <a
              href="https://www.nobleui.com/angular/documentation/docs.html"
              target="_blank"
              class="nav-link"
            >
              <i class="link-icon" data-feather="hash" appFeatherIcon></i>
              <span class="link-title">Documentation</span>
            </a>
          </li>
        </ul>

        <!--- Sidemenu end -->
      </div>
    </nav>
    <nav class="settings-sidebar">
      <div class="sidebar-body">
        <a
          href=""
          class="settings-sidebar-toggler"
          (click)="toggleSettingsSidebar($event)"
        >
          <i class="icon feather icon-settings"></i>
        </a>
        <h6 class="text-muted">Sidebar:</h6>
        <div class="form-group border-bottom">
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="sidebarThemeSettings"
                (change)="onSidebarThemeChange($event)"
                id="sidebarLight"
                value="sidebar-light"
                checked
              />
              <i class="input-frame"></i>
              Light
            </label>
          </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="sidebarThemeSettings"
                (change)="onSidebarThemeChange($event)"
                id="sidebarDark"
                value="sidebar-dark"
              />
              <i class="input-frame"></i>
              Dark
            </label>
          </div>
        </div>
        <div class="theme-wrapper">
          <h6 class="text-muted mb-2">Light Theme:</h6>
          <a
            class="theme-item active"
            href="https://www.nobleui.com/angular/template/demo1/"
          >
            <img src="assets/images/screenshots/light.jpg" alt="light theme" />
          </a>
          <h6 class="text-muted mb-2">Dark Theme:</h6>
          <a
            class="theme-item"
            href="https://www.nobleui.com/angular/template/demo2/"
          >
            <img src="assets/images/screenshots/dark.jpg" alt="dark theme" />
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: ``,
})
export class SidebarComponent {
  @ViewChild('sidebarToggler') sidebarToggler!: ElementRef;

  menuItems: MenuItem[] = [];
  @ViewChild('sidebarMenu') sidebarMenu!: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    router: Router
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        /**
         * Activating the current active item dropdown
         */
        this._activateMenuDropdown();

        /**
         * closing the sidebar
         */
        if (window.matchMedia('(max-width: 991px)').matches) {
          this.document.body.classList.remove('sidebar-open');
        }
      }
    });
  }

  ngOnInit(): void {
    this.menuItems = MENU;

    /**
     * Sidebar-folded on desktop (min-width:992px and max-width: 1199px)
     */
    const desktopMedium = window.matchMedia(
      '(min-width:992px) and (max-width: 1199px)'
    );
    desktopMedium.addListener(this.iconSidebar);
    this.iconSidebar(desktopMedium);
  }

  ngAfterViewInit() {
    // activate menu item
    new MetisMenu(this.sidebarMenu.nativeElement);

    this._activateMenuDropdown();
  }

  /**
   * Toggle sidebar on hamburger button click
   */
  toggleSidebar(e: any) {
    this.sidebarToggler.nativeElement.classList.toggle('active');
    this.sidebarToggler.nativeElement.classList.toggle('not-active');
    if (window.matchMedia('(min-width: 992px)').matches) {
      e.preventDefault();
      this.document.body.classList.toggle('sidebar-folded');
    } else if (window.matchMedia('(max-width: 991px)').matches) {
      e.preventDefault();
      this.document.body.classList.toggle('sidebar-open');
    }
  }

  /**
   * Toggle settings-sidebar
   */
  toggleSettingsSidebar(e: any) {
    e.preventDefault();
    this.document.body.classList.toggle('settings-open');
  }

  /**
   * Open sidebar when hover (in folded folded state)
   */
  operSidebarFolded() {
    if (this.document.body.classList.contains('sidebar-folded')) {
      this.document.body.classList.add('open-sidebar-folded');
    }
  }

  /**
   * Fold sidebar after mouse leave (in folded state)
   */
  closeSidebarFolded() {
    if (this.document.body.classList.contains('sidebar-folded')) {
      this.document.body.classList.remove('open-sidebar-folded');
    }
  }

  /**
   * Sidebar-folded on desktop (min-width:992px and max-width: 1199px)
   */
  iconSidebar(e: any) {
    if (e.matches) {
      this.document.body.classList.add('sidebar-folded');
    } else {
      this.document.body.classList.remove('sidebar-folded');
    }
  }

  /**
   * Switching sidebar light/dark
   */
  onSidebarThemeChange(event: any) {
    this.document.body.classList.remove('sidebar-light', 'sidebar-dark');
    this.document.body.classList.add(event.target.value);
    this.document.body.classList.remove('settings-open');
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * Reset the menus then hilight current active menu item
   */
  _activateMenuDropdown() {
    this.resetMenuItems();
    this.activateMenuItems();
  }

  /**
   * Resets the menus
   */
  resetMenuItems() {
    const links = document.getElementsByClassName('nav-link-ref');

    for (let i = 0; i < links.length; i++) {
      const menuItemEl = links[i];
      menuItemEl.classList.remove('mm-active');
      const parentEl = menuItemEl.parentElement;

      if (parentEl) {
        parentEl.classList.remove('mm-active');
        const parent2El = parentEl.parentElement;

        if (parent2El) {
          parent2El.classList.remove('mm-show');
        }

        const parent3El = parent2El?.parentElement;
        if (parent3El) {
          parent3El.classList.remove('mm-active');

          if (parent3El.classList.contains('side-nav-item')) {
            const firstAnchor = parent3El.querySelector('.side-nav-link-a-ref');

            if (firstAnchor) {
              firstAnchor.classList.remove('mm-active');
            }
          }

          const parent4El = parent3El.parentElement;
          if (parent4El) {
            parent4El.classList.remove('mm-show');

            const parent5El = parent4El.parentElement;
            if (parent5El) {
              parent5El.classList.remove('mm-active');
            }
          }
        }
      }
    }
  }

  /**
   * Toggles the menu items
   */
  activateMenuItems() {
    const links = document.getElementsByClassName('nav-link-ref');

    let menuItemEl = null;

    for (let i = 0; i < links.length; i++) {
      // tslint:disable-next-line: no-string-literal
      if (window.location.pathname === (links[i] as any)?.pathname) {
        menuItemEl = links[i];

        break;
      }
    }

    if (menuItemEl) {
      menuItemEl.classList.add('mm-active');
      const parentEl = menuItemEl.parentElement;

      if (parentEl) {
        parentEl.classList.add('mm-active');

        const parent2El = parentEl.parentElement;
        if (parent2El) {
          parent2El.classList.add('mm-show');
        }

        const parent3El = parent2El?.parentElement;
        if (parent3El) {
          parent3El.classList.add('mm-active');

          if (parent3El.classList.contains('side-nav-item')) {
            const firstAnchor = parent3El.querySelector('.side-nav-link-a-ref');

            if (firstAnchor) {
              firstAnchor.classList.add('mm-active');
            }
          }

          const parent4El = parent3El.parentElement;
          if (parent4El) {
            parent4El.classList.add('mm-show');

            const parent5El = parent4El.parentElement;
            if (parent5El) {
              parent5El.classList.add('mm-active');
            }
          }
        }
      }
    }
  }
}
