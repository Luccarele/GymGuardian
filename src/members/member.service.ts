import { MemberEntity } from "./entities/member.entity";
import { MemberDto, MemberParameters } from "./dto/create-member.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { FindOptionsWhere, Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { UpdateMemberDto } from "./dto/update-member.dto";

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly repository: Repository<MemberEntity>
  ) {}

  //--

  async create(memberDto: MemberDto) {
    const member = this.repository.create(memberDto);
    return this.repository.save(member);
  }

  //--

  async findAll() {
    return await this.repository.find();
  }

  //--

  async findByParams(params: MemberParameters): Promise<MemberDto[]> {
    const searchParams: FindOptionsWhere<MemberEntity> = {};

    if (params.id) {
      searchParams.id = Like(`%${params.id}%`);
    }
    if (params.complete_name) {
      searchParams.complete_name = Like(`%${params.complete_name}%`);
    }
    if (params.plan) {
      searchParams.plan = Like(`%${params.plan}%`);
    }

    const foundMembers = await this.repository.find({
      where: searchParams,
    });

    return foundMembers.map((result) => plainToInstance(MemberEntity, result));
  }

  //--

  async findOne(id: string): Promise<MemberDto> {
    const foundMembers = await this.repository.findOne({ where: { id } });

    if (!foundMembers) {
      throw new HttpException(
        `Member with the id ${id} not Found`,
        HttpStatus.NOT_FOUND
      );
    }

    return foundMembers;
  }

  //--

  async updateMember(
    id: string,
    updateMemberDto: UpdateMemberDto
  ): Promise<string> {
    const foundMembers = await this.repository.findOne({ where: { id } });

    if (!foundMembers) {
      throw new HttpException(
        `Member with the id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }

    // Space to attempt to create a check to see if there has been a change in the table.

    await this.repository.update(id, updateMemberDto);

    return `Member updated successfully`;
  }

  //--

  async removeMember(id: string) {
    const foundMember = await this.repository.findOne({ where: { id } });

    if (!foundMember) {
      throw new HttpException(
        `Member with the id ${id} not found`,
        HttpStatus.NOT_FOUND
      );
    }

    await this.repository.delete(id);
    return `Member deleted successfully`;
  }
}
