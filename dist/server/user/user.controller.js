"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./user.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAll() {
        return {
            code: 200,
            data: await this.userService.findAll(),
            message: 'Success.'
        };
    }
    async findOne(_id) {
        return {
            code: 200,
            data: await this.userService.findOne(_id),
            message: 'Success.'
        };
    }
    async addOne(body) {
        await this.userService.addOne(body);
        return {
            code: 200,
            message: 'Success.'
        };
    }
    async editOne(_id, body) {
        await this.userService.editOne(_id, body);
        return {
            code: 200,
            message: 'Success.'
        };
    }
    async deleteOne(_id) {
        await this.userService.deleteOne(_id);
        return {
            code: 200,
            message: 'Success.'
        };
    }
};
__decorate([
    common_1.Get('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    common_1.Get(':_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addOne", null);
__decorate([
    common_1.Put(':_id'),
    __param(0, common_1.Param('_id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.EditUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "editOne", null);
__decorate([
    common_1.Delete(':_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteOne", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map