import 'zone.js';

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/login/login.component';
import { provideAnimations } from '@angular/platform-browser/animations';

(async () => {
  const app = await createApplication({ providers: [provideAnimations()] });

  if (!customElements.get('login-provider')) {
    customElements.define(
      'login-provider',
      createCustomElement(LoginComponent, { injector: app.injector })
    );
  }
})();
