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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoDto = void 0;
const class_validator_1 = require("class-validator");
const status_enum_1 = require("../entities/status.enum");
const error_messages_1 = require("../../constants/error-messages");
class UpdateTodoDto {
}
exports.UpdateTodoDto = UpdateTodoDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: error_messages_1.ERROR_MESSAGES.NAME_REQUIRED }),
    (0, class_validator_1.MinLength)(3, { message: error_messages_1.ERROR_MESSAGES.NAME_MIN_LENGTH }),
    (0, class_validator_1.MaxLength)(10, { message: error_messages_1.ERROR_MESSAGES.NAME_MAX_LENGTH }),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: error_messages_1.ERROR_MESSAGES.DESCRIPTION_REQUIRED }),
    (0, class_validator_1.MinLength)(10, { message: error_messages_1.ERROR_MESSAGES.DESCRIPTION_MIN_LENGTH }),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([status_enum_1.StatusEnum.PENDING, status_enum_1.StatusEnum.IN_PROGRESS, status_enum_1.StatusEnum.COMPLETED], {
        message: `Status must be one of: ${status_enum_1.StatusEnum.PENDING}, ${status_enum_1.StatusEnum.IN_PROGRESS}, ${status_enum_1.StatusEnum.COMPLETED}`,
    }),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "status", void 0);
//# sourceMappingURL=update-todo.dto.js.map