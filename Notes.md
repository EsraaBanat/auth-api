# My NOTES :

## Package.json :

- ### **Packeges that I used to bulit this server :**

    * dotenv
    * express
    * cors
    * sequelize
    * sequelize-cli
    * sqlite3
    * pg
    * base-64
    * bcrypt
    * jest
    * supertest
    * morgan

<br>

- ### **Scripts:**

```  
  "start":"NOD_ENV=production node index.js", >>>>  for production enviroment so I can use `npm start` for production

    "test": "NODE_ENV=test jest --coverage",  >>>>  for test enviroment so I can use `npm test` for test

    "dev":"NOD_ENV=development nodemon index.js",  >>>>  for development enviroment so I can use `npm dev` for development

    "init:config": "sequelize init:config",  >>>>  Initializes configuration I can use `npm init:config`

    "db:create": "sequelize db:create",  >>>>  Create database specified by configuration I can use `npm db:create`

    "test:watch": "NODE_ENV=test jest --watchAll", >>>>>>  `npm test:watch` #runs all tests

 ```

 res.end() function is used to end the response process. res.send() function is the combination of res.write(), res.setHeaders() and res.end().

 res.send can only be called once, since it is equivalent to res.write + res.end()

 res.send is equivalent to res.write + res.end So the key difference is res.send can be called only once where as res.write can be called multiple times followed by a res.end.

a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

ALTERNATIVELY, I recommend using body-parser (it is an NPM package) to do the same thing. It is developed by the same peeps who built express and is designed to work with express. body-parser used to be part of express. Think of body-parser specifically for POST Requests (i.e. the .post request object) and/or PUT Requests (i.e. the .put request object).

# **References** :

- ## [Sequelize Cli](https://github.com/sequelize/cli)
