#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/d04c34dcc26d6fc2ffa814e7bd68bc9ad869c6cd67dcac70b55d02745da08e51/contract';
import endContract from '../../snapshots/d04c34dcc26d6fc2ffa814e7bd68bc9ad869c6cd67dcac70b55d02745da08e51/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  primaryKey,
  sql,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Attorney',
        columns: [
          col('address', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('area', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('caseLoad', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('location', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('monthly', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'Attorney_area_check_372f4233',
            sql`"area" IN ('TRANSFER', 'DISCHARGE', 'NEGLECT')`,
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'Connection',
        columns: [
          col('attID', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('connID', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('county', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('isPrimary', 'bool', { notNull: true, codecRef: { codecId: 'pg/bool@1' } }),
        ],
        constraints: [primaryKey(['connID'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Form',
        columns: [
          col('case', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('county', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('date', 'timestamptz(3)', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-date@1', typeParams: { precision: 3 } },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'Form_case_check_ba0806b1',
            sql`"case" IN ('TRANSFER', 'DISCHARGE', 'NEGLECT')`,
          ),
        ],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Connection',
        index: 'Connection_attID_idx_500ffb83',
        columns: ['attID'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Connection',
        foreignKey: {
          name: 'Connection_attID_fkey',
          columns: ['attID'],
          references: { schema: 'public', table: 'Attorney', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
