export interface authTokenType {
  access_token: string;
  expires_in: number;
  id_token: string;
  scope: string;
  token_type: string;
  refresh_token?: string;
  refresh_token_expires_in?: string;
}
export interface GoogleUserType {
  email: string;
  id: number;
  picture: string;
  verified_email: boolean;
}
