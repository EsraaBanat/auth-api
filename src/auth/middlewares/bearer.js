'use strict';

const { users } = require('../../models/index');

module.exports = async (req, res, next) => {
  try {
    
    //  console.log('req.headers.authorization',req.headers.authorization);
     if (!req.headers.authorization) { _authError() }
     
     const token = req.headers.authorization.split(' ').pop();
     console.log('token',token);
     const validUser = await users.authenticateToken(token);
     console.log('validUser',validUser);
    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    console.log('Error inside bearer auth middleware/catch');
    _authError();
  }

  function _authError() {
    console.log('Error inside bearer auth middleware');
    next('Invalid Login');
  }
}