import { authData } from '@/container/AuthReg/AuthReg';
import ky from 'ky'

const requestApi = ky.create({
    prefixUrl: 'http://localhost:1337'
  });

  export const userAuth = (data: authData) => {
    return requestApi.post('api/auth/local', { json: data }).json();
  };