import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import config from "../../../../../../config";
import FormioService from '../../../../../../services/FormioService';

@inject(Router)
export default class DeleteSubmission {
  submissionId;
  submissionUrl;
  router;

  constructor(router, eventAggregator) {
    this.router = router;
  }

  activate(params) {
    this.submissionId = params.submissionId;
    this.submissionUrl = `${config.projectUrl}/form/${params.formId}/submission/${params.submissionId}`;
  }

  delete() {
    (new FormioService(this.submissionUrl)).deleteSubmission().then(() => this.router.navigateToRoute('submissions'));
  }
  
  cancel() {
    this.router.navigateToRoute('submissions');
  }
}
