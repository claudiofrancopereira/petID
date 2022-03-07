import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPet1646640711154 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table({
      name: 'pets',
      columns: [
        {
          name: 'id',
          type: 'uuid',
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
          name: 'microchip',
          type: 'varchar'
        },
        {
          name: 'notes',
          type: 'varchar'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }

      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pet');

  }

}
