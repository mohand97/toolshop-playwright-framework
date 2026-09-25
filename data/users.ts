export interface Credentials {
  email: string;
  password: string;
}

export const existingUser: Credentials = {

  email: process.env.user_email ?? '',
  password: process.env.user_password ?? '',
};





