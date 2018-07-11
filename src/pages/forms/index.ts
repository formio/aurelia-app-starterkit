import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class Form {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Forms';
    config.map([
      {
        route: '',
        moduleId: PLATFORM.moduleName('pages/forms/list/list'),
        title: 'List',
      },
      {
        route: 'create',
        moduleId: PLATFORM.moduleName('pages/forms/create/create'),
        title:'Create Form',
        name: 'createForm',
        breadcrumb: true,
      },
      {
        route: ':formId',
        moduleId: PLATFORM.moduleName('pages/forms/form/index'),
        title: 'View',
        name: 'form',
        breadcrumb: true,
      },
    ]);

    this.router = router;
  }
}
