import { MemberDto, MemberParameters } from "./dto/create-member.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { MemberService } from "./member.service";
export declare class MemberController {
    private readonly memberService;
    constructor(memberService: MemberService);
    create(createMemberDto: MemberDto): Promise<import("./entities/member.entity").MemberEntity>;
    findAll(): Promise<import("./entities/member.entity").MemberEntity[]>;
    findByParams(params: MemberParameters): Promise<MemberDto[]>;
    findOne(id: string): Promise<MemberDto>;
    update(id: string, updateUserDto: UpdateMemberDto): Promise<string>;
    remove(id: string): Promise<string>;
}
