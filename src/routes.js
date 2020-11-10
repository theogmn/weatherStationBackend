import {Router} from 'express';

import getData from './utils/getData';

const routes = new Router();

routes.get('/stations/bomjesus', async (erq, res) => {
  const data = await getData();
  res.json(data);
});

export default routes;