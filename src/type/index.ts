export class User {
  apply_id: number | null;
  permission: number;
  name?: string;
  surname?: string;
  prename?: string;
  gpax?: number;
  gpax_match?: number;
  gpax_eng?: number;
  gpax_com?: number;
  step?: number;
  email?: string;
  mobile?: string;
  password?: string;
  document?: Record<string, any>;
  study_field?: string;
  portfolios?: any[];

  constructor() {
    this.apply_id = process.env.NODE_ENV == 'development' ? 631001130 : null;
    this.name = process.env.NODE_ENV == 'development' ? 'ตุลธร' : '';
    this.surname = process.env.NODE_ENV == 'development' ? 'วงศ์ชัย' : '';
    this.prename = process.env.NODE_ENV == 'development' ? 'นาย' : '';
    this.email = process.env.NODE_ENV == 'development' ? 'dev.vasin@gmail.com' : '';
    this.mobile = process.env.NODE_ENV == 'development' ? '0924644891' : '';
    this.password = process.env.NODE_ENV == 'development' ? '' : '';
    this.study_field = '';
    this.permission = 1;
    this.portfolios = [];
  }
}

export interface ITeacherSignin {
  email?: string;
  password?: string;
}

export type IUser = User;

export interface UserState {
  user: IUser;
}
