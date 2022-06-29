"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = exports.currentUserRouter = void 0;
const express = require("express");
const currentUserRouter = (req, res) => {
    res.status(200).json({
        name: 'Current user'
    });
};
exports.currentUserRouter = currentUserRouter;
const superUserRouter = (req, res) => {
    res.status(200).json({
        name: 'Super user'
    });
};
const createServer = () => {
    const app = express();
    app.use('/api/currentUser', exports.currentUserRouter);
    app.use('/api/superUser', superUserRouter);
    app.use('/api', (req, res) => res.status(200).send('Hello World!'));
    return app;
};
exports.createServer = createServer;
