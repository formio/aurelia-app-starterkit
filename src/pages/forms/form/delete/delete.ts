import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import config from "../../../../config";
import FormioService from '../../../../services/FormioService';

@inject(Router)
export default class DeleteForm {
  form;
  formId;
  formUrl;
  router;
  formio;

  constructor(router, eventAggregator) {
    this.router = router;
  }

  activate(params) {
    this.formId = params.formId;
    this.formUrl = `${config.projectUrl}/form/${params.formId}`;
    this.formio = new FormioService(this.formUrl);

    this.formio.loadForm().then(form => this.form = form);
  }

  delete() {
    this.formio.deleteForm().then(() => this.router.navigateToRoute('forms'));
  }

  cancel() {
    this.router.navigateToRoute('forms');
  }
}
