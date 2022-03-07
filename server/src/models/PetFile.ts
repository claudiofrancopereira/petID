import { Column, CreateDateColumn, Entity, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm'

import { Pet } from './Pet';

import { v4 } from 'uuid'

@Entity('petFiles')
class PetFile {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Pet, pet => pet.files)
    @JoinColumn({ name: 'petID' })
    pet: Pet

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { PetFile }