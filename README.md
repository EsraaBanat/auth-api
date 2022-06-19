# auth-api

# UML Diagram :

![](./Auth-API.jpg)

# Links :

## [Heroku App](https://esraa-auth-api.herokuapp.com/)

## [PR Link](https://github.com/EsraaBanat/auth-api/pull/2)

## [Github Actions](https://github.com/EsraaBanat/auth-api/actions)

<br>

# **How to use:**

You can test my app using [Postman](https://www.postman.com/downloads/) or [Httpie](https://httpie.io/)

Please use the table below to find out all Routes:
note: replace 'model' with 'food' or 'clothes' depends on what table do you want to do CRUD on it also choose any id you want to test.

| Page              | Path             | Method | Response and Usage                            | who is can access this page   |
|-------------------|------------------|--------|-----------------------------------------------|-------------------------------|
| Home Page         | /                | get    | "Home Page For My Auth-API Mini Project"      | any user                      |
| Signup Page       | /signup          | post   | to create a user                              | any user                      |
| Signin Page       | /signin          | post   | to login a user and receive a token           | any user                      |
| Users Page        | /users           | get    | to get all user names                         | only user with "admin" role   |
| Secret Page       | /secret          | get    | "Welcome to the secret area!"                 | any user                      |
| "Get All" Page    | /api/v1/model    | get    | get all data in the model                     | any user                      |
| "Get one" Page    | /api/v1/model/id | get    | get one item  in the model where item_id =id  | any user                      |
| "Post one" Page   | /api/v1/model    | post   | add new item to the model                     | any user                      |
| "Update one" Page | /api/v1/model/id | put    | update an item in the model                   | any user                      |
| "Delete one" Page | /api/v1/model/id | delete | delete an item from the model                 | any user                      |
| "Get All" Page    | /api/v2/model    | get    | get all data in the model                     | user , writer , editor ,admin |
| "Get one" Page    | /api/v2/model/id | get    | get one item  in the model where item_id =id  | user , writer , editor ,admin |
| "Post one" Page   | /api/v2/model    | post   | add new item to the model                     | writer , editor ,admin        |
| "Update one" Page | /api/v2/model/id | put    | update an item in the model                   | editor ,admin                 |
| "Delete one" Page | /api/v2/model/id | delete | delete an item from the model                 | only user with "admin" role   |
