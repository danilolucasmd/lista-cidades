import { get, post } from 'agent';

export const receiveCities = cities => ({
  type: 'RECEIVE_CITIES',
  cities,
});

export const fetchCities = () =>
  async dispatch => {
    try {
      const response = await get({ url: '/BuscaTodasCidades' });

      dispatch(receiveCities(response.data));
    } catch (error) {
      console.error(error);
    }
  };

export const fetchCityPoints = city =>
  async dispatch => {
    try {
      const response = await post({
        url: '/BuscaPontos',
        data: city,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
      });

      alert(`A pontuação da Cidade ${city.Nome} é ${response.data}`);
    } catch (error) {
      console.error(error);
    }
  };

