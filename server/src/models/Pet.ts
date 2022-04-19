import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm'

@Entity('pets')
class Pet {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    breed: string;

    @Column()
    color: string;

    @Column()
    sex: string;

    @Column()
    birth: string;

    @Column()
    owner: string;

    @Column()
    address: string;

    @Column()
    contact: string;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @Column()
    email: string;

    @Column()
    notes: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
}

export { Pet }