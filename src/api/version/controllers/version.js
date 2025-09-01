'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::version.version', ({ strapi }) => ({
  // Override del método find para incluir población por defecto
  async find(ctx) {
    const { query } = ctx;
    
    const entity = await strapi.entityService.findMany('api::version.version', {
      ...query,
      populate: {
        modelo: {
          populate: ['marca']
        }
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  // Override del método findOne para incluir población por defecto
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findOne('api::version.version', id, {
      ...query,
      populate: {
        modelo: {
          populate: ['marca']
        }
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));