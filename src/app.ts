import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: ['', 'home'],
        moduleId: PLATFORM.moduleName('pages/home/index'),
        name: 'home',
        title: 'Home',
      },
      {
        route: 'form',
        moduleId: PLATFORM.moduleName('pages/forms/index'),
        name: 'forms',
        title: 'Forms',
        breadcrumb: true,
      },
    ]);
  }
}
