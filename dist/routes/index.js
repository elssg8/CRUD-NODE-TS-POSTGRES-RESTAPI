"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = (0, express_1.Router)();
exports.default = router;
router.get('/users', index_controller_1.getUsers);
router.get('/users/:id', index_controller_1.getUserbyId);
router.post('/users', index_controller_1.createUser);
//# sourceMappingURL=index.js.map