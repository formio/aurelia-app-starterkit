import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import FormioService from "../../../../services/FormioService";
import config from "../../../../config";

@inject(Router)
export class EditForm {
  form;
  formUrl;
  formOptions;
  formio;
  router;

  constructor(router) {
    this.router = router;
  }

  activate(params) {
    this.form = {
      display: 'form',
      components: [],
      settings: {},
    };

    this.formOptions = {
      template: 'semantic'
    };
    this.formUrl = `${config.projectUrl}/form/${params.formId}`;
    this.formio = new FormioService(this.formUrl);

    this.formio.loadForm().then(form => {
      console.log(form);
      this.form = form;
    });
  }

  save() {
    this.formio.saveForm(this.form).then(form => {
      this.router.navigateToRoute('useForm');
    });
  }

  cancel() {
    this.router.navigateToRoute('useForm');
  }

  titleChanged() {
    const camelCaseIt = string => string.toLowerCase().trim().split(/[.\-_\s]/g).reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));
    this.form.name = camelCaseIt(this.form.title);
    this.form.path = this.form.name.toLowerCase();
  }
};
