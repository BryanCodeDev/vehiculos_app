'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::marca.marca', ({ strapi }) => ({
  // Obtener todos los modelos de una marca específica
  async findModelos(ctx) {
    const { id } = ctx.params;
    
    try {
      const marca = await strapi.entityService.findOne('api::marca.marca', id, {
        populate: {
          modelos: {
            populate: ['versiones']
          }
        }
      });

      if (!marca) {
        return ctx.notFound('Marca no encontrada');
      }

      ctx.body = {
        data: {
          marca: marca.nombre,
          modelos: marca.modelos
        }
      };
    } catch (error) {
      ctx.throw(500, `Error al obtener modelos: ${error.message}`);
    }
  },

  // Override del método find para incluir población por defecto
  async find(ctx) {
    const { query } = ctx;
    
    const entity = await strapi.entityService.findMany('api::marca.marca', {
      ...query,
      populate: {
        modelos: {
          populate: ['versiones']
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

    const entity = await strapi.entityService.findOne('api::marca.marca', id, {
      ...query,
      populate: {
        modelos: {
          populate: ['versiones']
        }
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));