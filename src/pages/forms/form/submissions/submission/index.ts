import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';
import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';
import FormioService from "../../../../../services/FormioService";
import config from "../../../../../config";

@inject(Router, EventAggregator)
export class FormView {
  router: Router;
  eventAggregator: EventAggregator;
  form;
  formio;
  formUrl;
  subscription;
  tab;

  constructor(router, eventAggregator) {
    this.router = router;
    this.eventAggregator = eventAggregator;
  }

  attached() {
    this.subscription = this.eventAggregator.subscribe('router:navigation:success', this.refresh.bind(this));
    this.refresh();
  }

  detached() {
    this.subscription.dispose();
  }

  refresh() {
    const instructions = this.getParentInstructions(this.router.currentInstruction);
    // instructions[3].config.title = this.form.title;
    this.tab = this.router.currentInstruction.fragment;
  }

  getParentInstructions(instruction) {
    return instruction.parentInstruction ? this.getParentInstructions(instruction.parentInstruction).concat([instruction]) : [instruction];
  }

  activate(params, routeConfig) {
    this.formUrl = `${config.projectUrl}/form/${params.formId}`;
    this.formio = new FormioService(this.formUrl);
    return this.formio.loadForm().then(form => {
      this.form = form;
    });
  }

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Data';
    config.map([
      {
        route: '',
        moduleId: PLATFORM.moduleName('pages/forms/form/submissions/submission/view/view'),
        title: 'View',
        name: 'viewSubmission',
        breadcrumb: true,
      },
      {
        route: 'edit',
        moduleId: PLATFORM.moduleName('pages/forms/form/submissions/submission/edit/edit'),
        title:'Edit',
        name: 'editSubmission',
        breadcrumb: true,
      },
      {
        route: 'delete',
        moduleId: PLATFORM.moduleName('pages/forms/form/submissions/submission/delete/delete'),
        title:'Delete',
        name: 'deleteSubmission',
        breadcrumb: true,
      },
    ]);

    this.router = router;
  }
}