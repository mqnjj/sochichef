export interface iFormData {
  name: string;
  tel: string;
  email: string;
}

export type iStatus = 'success' | 'error' | 'sending' | 'notValidNumber' | 'notValidName' | 'notValidEmail' | null;
