import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'

import { Pet } from './Pet';
import { ReportFile } from './ReportFile';

import { v4 } from 'uuid'

@Entity('reports')
class Report {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    description: string;

    @Column()
    outcome: string;

    @Column()
    opened: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Pet, pet => pet.reports)
    @JoinColumn({ name: 'petID' })
    pet: Pet

    @OneToMany(() => ReportFile, file => file.report, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'report_id' })
    files: ReportFile[];

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { Report }