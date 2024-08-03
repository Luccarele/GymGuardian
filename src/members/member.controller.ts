import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from "@nestjs/common";
import { MemberDto, MemberParameters } from "./dto/create-member.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import { MemberService } from "./member.service";

// Crud Commands and Endpoint
@Controller("member")
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  // Create Member
  @Post()
  async create(@Body() createMemberDto: MemberDto) {
    return await this.memberService.create(createMemberDto);
  }

  // Find All Members
  @Get()
  async findAll() {
    return await this.memberService.findAll();
  }

  // Find Member with Filter
  @Get("search")
  async findByParams(@Query() params: MemberParameters): Promise<MemberDto[]> {
    return await this.memberService.findByParams(params);
  }

  // Find By Id
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.memberService.findOne(id);
  }

  // Update Member Data
  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateMemberDto
  ) {
    return await this.memberService.updateMember(id, updateUserDto);
  }

  // Delete Member
  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.memberService.removeMember(id);
  }
}
