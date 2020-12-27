export class Docs {
  docs: FormData;

  constructor() {
    this.docs = new FormData();
  }
}

export class DocsItem {
  transcript: string;
  identity_card: string;
  student_card: string;
  name_change?: string;

  constructor() {
    this.transcript = '';
    this.identity_card = '';
    this.student_card = '';
  }
}

export type IDocs = Docs;
// export type IDocsItem = DocsItem;
