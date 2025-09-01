'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/versiones',
      handler: 'version.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/versiones/:id',
      handler: 'version.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/versiones',
      handler: 'version.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/versiones/:id',
      handler: 'version.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/versiones/:id',
      handler: 'version.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};