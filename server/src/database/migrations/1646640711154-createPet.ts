import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPet1646640711154 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table({
      name: 'pets',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'breed',
          type: 'varchar'        
        },
        {
          name: 'color',
          type: 'varchar'
        },
        {
          name: 'sex',
          type: 'varchar'
        },
        {
          name: 'birth',
          type: 'varchar'
        },
        {
          name: 'owner',
          type: 'varchar'
        },
        {
          name: 'address',
          type: 'varchar'
        },
        {
          name: 'contact',
          type: 'varchar'
        },
        {
          name: 'cpf',
          type: 'varchar'
        },
        {
          name: 'rg',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        },
        {
          name: 'notes',
          type: 'varchar'
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }

      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pets');

  }

}
