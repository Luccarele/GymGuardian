import { 
    BeforeInsert, 
    Column, 
    Entity, 
    PrimaryColumn, 
} from "typeorm";
import { customAlphabet } from 'nanoid';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
const nanoid = customAlphabet(alphabet, 6);

function generateReadableId(): string {
    return nanoid();
};

// Database Model.
@Entity({ name: 'member' })
export class MemberEntity {
    @PrimaryColumn({ type: 'varchar', length: 21 })
    id?: string;

    @Column({ name: 'complete_name', type: 'varchar', length: 256 })
    complete_name: string;

    @Column({ name: 'gender', type: 'varchar', length: 50 })
    gender: string;

    @Column({ name: 'address', type: 'varchar', length: 256 })
    address: string;

    @Column({ name: 'phone_number', type: 'varchar', length: 20 })
    phone_number: string;

    @Column({ name: 'email', type: 'varchar', length: 256 })
    email: string;

    @Column({ name: 'registration_date',type: 'date' })
    registration_date: Date;

    @Column({ name: 'plan', type: 'varchar', length: 50 })
    plan: string;

    @Column({ name: 'payment_status', type: 'varchar', length: 50 })
    payment_status: string;

    @Column({ name: 'authorization_and_therms', type: 'boolean' })
    authorization_and_therms: boolean;

    @BeforeInsert()
    generateId() {
        if (!this.id) {
            this.id = generateReadableId();
        }
}

}
