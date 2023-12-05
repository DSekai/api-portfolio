"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experience_1 = require("../controllers/experience");
const router = (0, express_1.Router)();
router.get('/', experience_1.getAllExperience);
exports.default = router;
