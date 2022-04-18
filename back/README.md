# Argent Bank API

This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
  
  > This [tutorial](https://www.youtube.com/watch?v=lKKUJ4xyxXI) helped me to install mongoDB !

Please make sure you have the right version. You can verify this by using the following command in your terminal:

`Check Mongo version`
```bash
mongo --version
```

### Instructions

`Change directories`
```bash
cd back/
```

`install dependencies`
```bash
npm install
```

`Launch server`
```bash
npm run dev:server
```

`And populate data base` 
```bash
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs
