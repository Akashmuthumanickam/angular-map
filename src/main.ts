import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { MapComponent } from './app/seurat-map/map.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  (async () => {

    const app = await createApplication({
      providers: [
        /* your global providers here */
      ],
    });

    const toogleElement = createCustomElement(MapComponent, {
      injector: app.injector,
    });

    customElements.define('sample-map', toogleElement);

  })();
