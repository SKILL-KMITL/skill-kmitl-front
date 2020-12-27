export default class Job {
  company: string;
  desc: string;
  job_title: string;
  job_type: string;

  constructor() {
    (this.company = ''), (this.desc = ''), (this.job_title = ''), (this.job_type = '');
  }
}

export class Jobs {
  jobs: Array<any>;

  constructor() {
    this.jobs = [new Job()];
  }
}
