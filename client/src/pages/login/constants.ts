import { emailRule, fullNameRule, passwordRule } from '@/utils/validationRules';

export const signInValidationSchema = {
  email: (email: string) => emailRule(email)
};
export const signUpValidationSchema = {
  fullName: (fullName: string) => fullNameRule(fullName),
  email: (email: string) => emailRule(email),
  password: (password: string) => passwordRule(password)
};
