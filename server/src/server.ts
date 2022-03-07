import "reflect-metadata";

import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());
app.listen(3333, () => {
    console.log( 'Server running on port 3333');
});
