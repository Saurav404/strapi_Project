module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e5bdfee326c8353efe51f8b84e2eb5c7'),
  },
});
