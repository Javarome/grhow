"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const app = (0, app_1.createServer)();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Grhow server running on port ${PORT}`);
});
