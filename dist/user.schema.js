"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    user_name: { type: String, required: true },
    password: { type: String, required: true }
});
//# sourceMappingURL=user.schema.js.map