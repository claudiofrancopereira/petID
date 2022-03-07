import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm'

import { Report } from './Report';
import { PetFile } from './PetFile'

import { v4 } from 'uuid'

@Entity('petID')
class Pet {
    @PrimaryColumn()
    readonly id: string;

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
    micrichip: string;

    @Column()
    notes: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @OneToMany(() => PetFile, file => file.pet, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'petID' })
    files: PetFile[];

    @OneToMany(() => Report, report => report.pet, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'report' })
    reports: Report[];

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }

}

export { Pet }