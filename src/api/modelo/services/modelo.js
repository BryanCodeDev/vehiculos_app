'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::modelo.modelo', ({ strapi }) => ({
  async findByMarca(marcaId) {
    return await strapi.entityService.findMany('api::modelo.modelo', {
      filters: {
        marca: {
          id: marcaId
        }
      },
      populate: {
        marca: true,
        versiones: true
      }
    });
  },

  async findByYear(year) {
    return await strapi.entityService.findMany('api::modelo.modelo', {
      filters: {
        anoLanzamiento: year
      },
      populate: {
        marca: true,
        versiones: true
      }
    });
  }
}));