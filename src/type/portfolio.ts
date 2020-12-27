export class PortfolioItem {
  type_id: number | null;
  name: string;
  file: string | null;
  desc: string;

  constructor() {
    this.type_id = null;
    this.name = '';
    this.file = null;
    this.desc = '';
  }
}

export class Portfolio {
  portfolio: Array<any>;

  constructor() {
    this.portfolio = [new PortfolioItem()];
  }
}

export class PortfolioType {
  portfolioType: Record<string, any>[];

  constructor() {
    this.portfolioType = [new PortfolioTypeItem()];
  }
}

export class PortfolioTypeItem {
  type_id: number;
  name: string;
  desc: string;

  constructor() {
    this.type_id = 0;
    this.name = '';
    this.desc = '';
  }
}
