import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import config from "../../../../../../config";

@inject(Router)
export default class EditSubmission {
  submissionUrl: string;
  router;
  formOptions;

  constructor(router) {
    this.router = router;
  }

  activate(params) {
    this.submissionUrl = `${config.projectUrl}/form/${params.formId}/submission/${params.submissionId}`;
    this.formOptions = {
      template: 'semantic'
    };
  }

  submit(submission) {
    this.router.navigateToRoute('submissions');
  }
}
