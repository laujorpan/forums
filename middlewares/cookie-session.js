//middleware to manage sessions
const cookieSession = require('cookie-session');

module.exports = cookieSession({
  name: 'session',
  keys: ['forums'],
  maxAge: 60 * 60 * 1000 // 1 hour
});
