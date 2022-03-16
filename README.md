# REST API made in Javascript

A RESTful API made in Javascript using node.js and express for studying purposes. 
By using a HTTP Client like Postman, access to the following URLs to obtain or manipulate the existing data.

## Methods 
When running the server, access to the following URL: localhost:5000 with the following methods.
- GET: users/id - to get a specific user by its id
- GET: users/ - to get all users
- POST: users/ - to create a new user
- PUT: users/id - to modify an existing user by its id
- DELETE: users/id - to delete a specific user by its id

## Package dependency

- [Express](https://expressjs.com/es/) →  Library for APIs development

## How to run it?

Assuming you already have downloaded Node.JS and NPM: Clone or download the code and just run the following command on the directory.

`npm install`

_Wait for the package installation._

`npm run start`

Now the server is running on the specified port (by default, on port 5000).

## How to build your own

Just by running the following commands:

`npm init`

`npm install express`

`node <nameoffile>.js`

You could add as a script inside package.json the following:

`"start": "node app.js"`

Now you can start building your API!

## Comments

- The _db.json_ file is just a hard-coded json to simulate a database.
- Whenever you manipulate the existing data, it won't destroy the _db.json_ data. Everytime the code is executed, a replica of the db will be created internally.
