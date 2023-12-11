import axiosClient from '@/utils/axiosClient';
import type { SignInRequest, SignUpRequest } from './types';
import type { AxiosResponse } from 'axios';
import type { UserResponse } from '../user/types';

const signIn = async (signInForm: SignInRequest): Promise<AxiosResponse<string>> => {
  return await axiosClient.post('auth/signin', signInForm);
};

const signUp = async (signUpForm: SignUpRequest): Promise<AxiosResponse<string>> => {
  return await axiosClient.post('auth/signup', signUpForm);
};

const getUserInfoByToken = async (token: string): Promise<AxiosResponse<UserResponse>> => {
  return await axiosClient.get(`auth/${token}`);
};

export default {
  signIn,
  signUp,
  getUserInfoByToken
};
