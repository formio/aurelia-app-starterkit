import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import config from '../../../../config';
import FormioService from "../../../../services/FormioService";

@inject(Router)
export class View {
  router;
  routeConfig;
  formUrl;
  formio;
  formOptions;

  constructor(router, eventAggregator) {
    this.router = router;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    this.formOptions = {
      template: 'semantic'
    };

    this.formUrl = `${config.projectUrl}/form/${params.formId}`;
  }

  submit(submission) {
    this.router.navigateToRoute('submissions');
  }
}
