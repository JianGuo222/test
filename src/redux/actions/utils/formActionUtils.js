import axios from 'axios';
import { API_SERVER } from '../../constants/ApiServer';

export const formAsync = async (name, email) => {
  const res = await axios({
    url: API_SERVER,
    method: 'post',
    data: {
      name,
      email,
    },
  });
  return res.data;
};
