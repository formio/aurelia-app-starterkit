import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class Submissions {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Submissions';
    config.map([
      {
        route: '',
        moduleId: PLATFORM.moduleName('pages/forms/form/submissions/list/list'),
        title: 'List',
      },
      {
        route: ':submissionId',
        moduleId: PLATFORM.moduleName('pages/forms/form/submissions/submission/index'),
        title: 'Data',
        name: 'submission',
      },
    ])
  }
};
