module.exports = {
  <%= datasource %>: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_DATABASE || 'test',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
  },
  <%= admin_datasource %>: {
    host: process.env.DB_ADMIN_HOST || 'localhost',
    port: process.env.DB_ADMIN_PORT || 3306,
    database: process.env.DB_ADMIN_DATABASE || 'test',
    user: process.env.DB_ADMIN_USER || 'root',
    password: process.env.DB_ADMIN_PASSWORD || '',
  }
};