import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  isAdmin?: boolean;
  isUser?: boolean;
}

export const isAdminRole = (token: string) => jwtDecode<JwtPayload>(token).isAdmin;
