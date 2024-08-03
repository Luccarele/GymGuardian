export class MemberDto {
    id?: string;
    complete_name: string;
    gender: string;
    address: string;
    phone_number: string;
    email: string;
    registration_date: Date;
    plan: string;
    payment_status: string;
    authorization_and_therms: boolean;
}

export class MemberParameters {
    id: string;
    complete_name: string;
    plan: string;
}
  