import { Factory } from 'rosie';

const BaseLogin = new Factory()
  .attrs({
    username: '',
    password: '',
  })
  .after((entity) => ({
    ...entity,
    username: 'username',
    password: 'password',
  }));

export const loginData = new Factory().extend(BaseLogin);
