import config from "../../../../../../config";

export default class ViewSubmission {
  submissionUrl: string;
  formOptions;

  activate(params) {
    this.formOptions = {
      template: 'semantic',
      readOnly: true
    };
    this.submissionUrl = `${config.projectUrl}/form/${params.formId}/submission/${params.submissionId}`;
  }
}
