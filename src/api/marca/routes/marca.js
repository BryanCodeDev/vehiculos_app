'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/marcas',
      handler: 'marca.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/marcas/:id',
      handler: 'marca.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/marcas',
      handler: 'marca.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/marcas/:id',
      handler: 'marca.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/marcas/:id',
      handler: 'marca.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/marcas/:id/modelos',
      handler: 'marca.findModelos',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};