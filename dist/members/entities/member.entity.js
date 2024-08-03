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
exports.MemberEntity = void 0;
const typeorm_1 = require("typeorm");
const nanoid_1 = require("nanoid");
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
const nanoid = (0, nanoid_1.customAlphabet)(alphabet, 6);
function generateReadableId() {
    return nanoid();
}
;
let MemberEntity = class MemberEntity {
    generateId() {
        if (!this.id) {
            this.id = generateReadableId();
        }
    }
};
exports.MemberEntity = MemberEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 21 }),
    __metadata("design:type", String)
], MemberEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'complete_name', type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], MemberEntity.prototype, "complete_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MemberEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address', type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], MemberEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_number', type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], MemberEntity.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], MemberEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registration_date', type: 'date' }),
    __metadata("design:type", Date)
], MemberEntity.prototype, "registration_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'plan', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MemberEntity.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_status', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], MemberEntity.prototype, "payment_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'authorization_and_therms', type: 'boolean' }),
    __metadata("design:type", Boolean)
], MemberEntity.prototype, "authorization_and_therms", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MemberEntity.prototype, "generateId", null);
exports.MemberEntity = MemberEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member' })
], MemberEntity);
//# sourceMappingURL=member.entity.js.map