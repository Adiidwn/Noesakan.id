export interface IUser {
  id?: number;
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
  picture?: string;
  description?: string;
}

export interface IUserRegister {
  username: string;
  fullname: string;
  email: string;
  password: string;
  alamat: string;
  image: string;
}
export interface IUserLogin {
  email: string;
  password: string;
}

export interface IFormDiscuss {
  content: string;
  image: Blob | MediaSource | string;
}
