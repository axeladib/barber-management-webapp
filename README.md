# Queuely by AxelAdib

## _Built for barber by barber_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Queuely is a cloud based tools for barber to manage their business for all sizer
Powered by Netlify and PostgreSQL.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Customer Form - that are consist of presentation of the name barber, price, location of barber and most important number of queue also who and what number is currently queue.
- Customer Form - that let users to fill the name, address and phone number for direct contact through whatsapp.

And of course Queuely itself is open source with a [public repository][dill]
on GitHub.

## Installation

Queuely development requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install express sequelize pg pg-hstore body-parser cors jsonwebtoken bcryptjs --save
```
- express : building RESFUL APIs
- sequelize : building the model of database
- cors : create the connection of URLs between the backend and frontend
- body-parser : request the data from the server when the client side post the data to the server
- jsonwebtoken - create the unique token or id that are personalise to one user only

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Development

### Define the Sequelize Model

- user.model.js
- role.model.js

This is the **Table that represent the model of USER AND ROLE DB**
> #### After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them
>
> -  create a new User: create(object)
> - find a User by id: findByPk(id)
> - find a User by email: findOne({ where: { email: ... } })
> - get all Users: findAll()
> - find all Users by username: findAll({ where: { username: ... } })
> These functions will be sued in our **Controllers and Middlewares**

### Initialise Sequelize

create at app/models/index.js

**Purpose of initialise the Sequelize**
- Association between the Users and Roles in **Many to many associations **
> One USER can have several ROLES
> one ROLE can be taken by several USERS

_User.belongsToMany(Role)_ indicate that user model can belong to many Roles and vice versa

**through, foreignKey, otherKey** is a new item created for the new table of _userroles_ as connection between _users_ and _roles_ table /
via the primary key is _foreign keys_

### Configure Auth Key

File :
_app/config/auth.config.js_

- use the JWT function such as **verify()** and **sign()** that needs the secret key to encode and decode token. 


### Middleware

File :
_middleware/verifySignUp.js_

**To verify a Signup Action**
- check if username or email duplicate or not
- check if the roles in the request is existed or not

