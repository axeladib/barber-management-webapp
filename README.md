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

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is \*actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Queuely uses a number of open source projects to work properly:

- [React] - UI frontend !
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
  to Markdown converter
- [jQuery] - duh

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

## Plugins

Queuely is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][PlDb]         |
| GitHub           | [plugins/github/README.md][PlGh]          |
| Google Drive     | [plugins/googledrive/README.md][PlGd]     |
| OneDrive         | [plugins/onedrive/README.md][PlOd]        |
| Medium           | [plugins/medium/README.md][PlMe]          |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

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