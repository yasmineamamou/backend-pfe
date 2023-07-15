'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    let entity;

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.file.create(data, { files });
    } else {
      entity = await strapi.services.file.create(ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.file });
  },
};
