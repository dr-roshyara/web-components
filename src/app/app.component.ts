import { Component, Injector,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RouterOutlet } from '@angular/router';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-web-component';

  constructor(private injector: Injector) {
    const el = createCustomElement(NewsComponent, { injector });
    customElements.define('news-widget', el);
  }
}
