import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import config from '../../../../../config';

@inject(Router)
export class List {
  formUrl;
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  activate(params, routeConfig) {
    this.formUrl = `${config.projectUrl}/form/${params.formId}`;
  }

  selected(submission) {
    // this.router.navigateToRoute('viewSubmission', {formId: submission.form, submissionId: submission._id});
    this.router.navigate(`#/form/${submission.form}/data/${submission._id}`);
  }
}