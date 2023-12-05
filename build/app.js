"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = require("./middlewares/cors");
const mongo_1 = require("./dataBase/mongo");
const experience_1 = __importDefault(require("./routes/experience"));
const project_1 = __importDefault(require("./routes/project"));
(0, mongo_1.MongoDBConnection)()
    .then(() => {
    var _a;
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.corsMiddleware)());
    app.disable('x-powered-by');
    const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 1234;
    app.use('/experiences', experience_1.default);
    app.use('/projects', project_1.default);
    app.listen(PORT, () => {
        console.log(`Server listening on port http://localhost:${PORT}`);
    });
});
