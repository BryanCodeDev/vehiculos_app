'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::modelo.modelo', ({ strapi }) => ({
  // Obtener todas las versiones de un modelo específico
  async findVersiones(ctx) {
    const { id } = ctx.params;
    
    try {
      const modelo = await strapi.entityService.findOne('api::modelo.modelo', id, {
        populate: {
          versiones: true,
          marca: true
        }
      });

      if (!modelo) {
        return ctx.notFound('Modelo no encontrado');
      }

      ctx.body = {
        data: {
          modelo: modelo.nombre,
          marca: modelo.marca.nombre,
          versiones: modelo.versiones
        }
      };
    } catch (error) {
      ctx.throw(500, `Error al obtener versiones: ${error.message}`);
    }
  },

  // Override del método find para incluir población por defecto
  async find(ctx) {
    const { query } = ctx;
    
    const entity = await strapi.entityService.findMany('api::modelo.modelo', {
      ...query,
      populate: {
        marca: true,
        versiones: true
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  // Override del método findOne para incluir población por defecto
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findOne('api::modelo.modelo', id, {
      ...query,
      populate: {
        marca: true,
        versiones: true
      }
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));