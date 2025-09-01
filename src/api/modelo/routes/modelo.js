'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/modelos',
      handler: 'modelo.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/modelos/:id',
      handler: 'modelo.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/modelos',
      handler: 'modelo.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/modelos/:id',
      handler: 'modelo.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/modelos/:id',
      handler: 'modelo.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/modelos/:id/versiones',
      handler: 'modelo.findVersiones',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};