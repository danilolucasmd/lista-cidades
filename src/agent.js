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
    ...props,
    method: 'post',
    url: api + props.url,
  });
