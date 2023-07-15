'use strict';

module.exports = {
  async checkTypeNameExists(ctx) {
    const { typeName } = ctx.params;

    try {
      // Perform a database query or check if the type name already exists
      const existingType = await strapi.query('type').findOne({ type: typeName });

      if (existingType) {
        ctx.send(false); // Type name already exists
      } else {
        ctx.send(true); // Type name doesn't exist
      }
    } catch (err) {
      console.error(err);
      ctx.send({ error: 'An error occurred while checking the type name.' }, 500);
    }
  },
};
