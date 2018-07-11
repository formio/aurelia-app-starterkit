import FormioService from '../../../services/FormioService';
import config from '../../../config';

export class List {
  formio;
  forms = [];

  constructor() {
    this.formio = new FormioService(config.projectUrl);
  }

  created() {
    this.formio.loadForms({ params: {type: 'form'}}).then(forms => {
      this.forms = forms;
    });
  }
}