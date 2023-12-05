"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = void 0;
const cors_1 = __importDefault(require("cors"));
const ACCEPTED_ORIGINS = ['http://localhost:3000','https://w6gnbm68-3150.brs.devtunnels.ms/', 'http://localhost:1234', 'https://sekaidev.com', 'http://sekaidev.com'];
const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => (0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
            callback(null, true);
            return;
        }
        callback(new Error('Not Allowed by CORS'));
    }
});
exports.corsMiddleware = corsMiddleware;
