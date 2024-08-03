import { MemberEntity } from "./entities/member.entity";
import { MemberDto, MemberParameters } from "./dto/create-member.dto";
import { Repository } from "typeorm";
import { UpdateMemberDto } from "./dto/update-member.dto";
export declare class MemberService {
    private readonly repository;
    constructor(repository: Repository<MemberEntity>);
    create(memberDto: MemberDto): Promise<MemberEntity>;
    findAll(): Promise<MemberEntity[]>;
    findByParams(params: MemberParameters): Promise<MemberDto[]>;
    findOne(id: string): Promise<MemberDto>;
    updateMember(id: string, updateMemberDto: UpdateMemberDto): Promise<string>;
    removeMember(id: string): Promise<string>;
}
