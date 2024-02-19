import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer
      class="footer d-flex flex-column flex-md-row align-items-center justify-content-between"
    >
      <p class="text-muted text-center text-md-left">
        Copyright © 2024
        <a href="https://www.nobleui.com" target="_blank">CENI NEM</a>. All
        rights reserved
      </p>
      <p class="text-muted text-center text-md-left mb-0 d-none d-md-block">
        Version 0.0.1
      </p>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
