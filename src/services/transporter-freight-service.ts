import {Freight} from '../core/interfaces';
import {httpClient, HttpReponseData} from '../http-client';
import {TRANSPORTER_URL} from '../../env';

export async function getList(situation: number) {
  const baseUrl = `${TRANSPORTER_URL}`;
  try {
    const result = await httpClient(baseUrl).get(`/history`);
    return result;
  } catch (err) {
    console.log(JSON.stringify(err));
    throw new Error(err);
  }
}
