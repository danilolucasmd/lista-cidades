import axios from 'axios';
import { api } from 'constants/index';

export const get = props =>
  axios({
    ...props,
    method: 'get',
    url: api + props.url,
  });

export const post = props =>
  axios({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    ...props,
    method: 'post',
    url: api + props.url,
  });
