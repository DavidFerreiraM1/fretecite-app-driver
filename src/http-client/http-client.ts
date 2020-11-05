import Axios, {AxiosInstance} from 'axios';

export const httpClient = (url: string): AxiosInstance =>
  Axios.create({
    baseURL: url,
  });
