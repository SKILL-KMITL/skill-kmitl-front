export class Common {
  client_access: ClientAccess = new ClientAccess();
  permission_access: ClientAccess = new ClientAccess();
}

export class ClientAccess {
  setting_id?: number;
  name: string;
  value: boolean;

  constructor() {
    (this.name = 'client-access'), (this.value = true);
  }
}

export type CommonScope = keyof Common;
