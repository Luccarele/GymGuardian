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
exports.MemberService = void 0;
const member_entity_1 = require("./entities/member.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
let MemberService = class MemberService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(memberDto) {
        const member = this.repository.create(memberDto);
        return this.repository.save(member);
    }
    async findAll() {
        return await this.repository.find();
    }
    async findByParams(params) {
        const searchParams = {};
        if (params.id) {
            searchParams.id = (0, typeorm_1.Like)(`%${params.id}%`);
        }
        if (params.complete_name) {
            searchParams.complete_name = (0, typeorm_1.Like)(`%${params.complete_name}%`);
        }
        if (params.plan) {
            searchParams.plan = (0, typeorm_1.Like)(`%${params.plan}%`);
        }
        const foundMembers = await this.repository.find({
            where: searchParams,
        });
        return foundMembers.map((result) => (0, class_transformer_1.plainToInstance)(member_entity_1.MemberEntity, result));
    }
    async findOne(id) {
        const foundMembers = await this.repository.findOne({ where: { id } });
        if (!foundMembers) {
            throw new common_1.HttpException(`Member with the id ${id} not Found`, common_1.HttpStatus.NOT_FOUND);
        }
        return foundMembers;
    }
    async updateMember(id, updateMemberDto) {
        const foundMembers = await this.repository.findOne({ where: { id } });
        if (!foundMembers) {
            throw new common_1.HttpException(`Member with the id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        await this.repository.update(id, updateMemberDto);
        return `Member updated successfully`;
    }
    async removeMember(id) {
        const foundMember = await this.repository.findOne({ where: { id } });
        if (!foundMember) {
            throw new common_1.HttpException(`Member with the id ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        await this.repository.delete(id);
        return `Member deleted successfully`;
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(member_entity_1.MemberEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MemberService);
//# sourceMappingURL=member.service.js.map