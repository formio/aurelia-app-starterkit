import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import FormioService from "../../../services/FormioService";
import config from "../../../config";

@inject(Router)
export class Create {
  form;
  formOptions;
  formio;
  router;

  constructor(router) {
    this.router = router;
  }

  activate() {
    this.form = {
      display: 'form',
      components: [],
      settings: {},
    };

    this.formOptions = {
      template: 'semantic'
    };
    this.formio = new FormioService(config.projectUrl);
  }

  save() {
    this.formio.saveForm(this.form).then(form => {
      this.router.navigateToRoute('forms');
    });
  }

  cancel() {
    this.router.navigateToRoute('forms');
  }

  titleChanged() {
    const camelCaseIt = string => string.toLowerCase().trim().split(/[.\-_\s]/g).reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));
    this.form.name = camelCaseIt(this.form.title);
    this.form.path = this.form.name.toLowerCase();
  }
};
