"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    img: {
        type: String
    },
    url: {
        type: String,
        required: [true, 'The url is required']
    },
    description: {
        type: String,
        required: [true, 'The description is required']
    },
    tecnology: {
        type: Object
    },
    git: {
        type: String,
        required: [true, 'The git is required']
    }
});
ProjectSchema.methods.toJSON = function () {
    const _a = this.toObject(), { _v, _id } = _a, projects = __rest(_a, ["_v", "_id"]);
    projects.id = _id;
    return projects;
};
exports.default = (0, mongoose_1.model)('projects', ProjectSchema);
