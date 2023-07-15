module.exports = ({ env }) => ({
  responses: {
    privateAttributes: ['_v', 'id', 'created_at'],
  },
  rest: {
    defaultLimit: 250,
    maxLimit: 100,
    withCount: true,
  },
});
