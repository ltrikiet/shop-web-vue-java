import axiosClient from '@/utils/axiosClient';
import type { SignInRequest, SignUpRequest } from './types';
import type { AxiosResponse } from 'axios';

const signIn = async (signInForm: SignInRequest): Promise<AxiosResponse<string>> => {
  return await axiosClient.post('auth/signin', signInForm);
};

const signUp = async (signUpForm: SignUpRequest): Promise<AxiosResponse<string>> => {
  return await axiosClient.post('auth/signup', signUpForm);
};

export default {
  signIn,
  signUp
};
