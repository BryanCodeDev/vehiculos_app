'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::marca.marca', ({ strapi }) => ({
  async findWithModelos(id) {
    return await strapi.entityService.findOne('api::marca.marca', id, {
      populate: {
        modelos: {
          populate: ['versiones']
        }
      }
    });
  },

  async findByPais(pais) {
    return await strapi.entityService.findMany('api::marca.marca', {
      filters: {
        paisOrigen: {
          $eqi: pais
        }
      },
      populate: {
        modelos: true
      }
    });
  }
}));