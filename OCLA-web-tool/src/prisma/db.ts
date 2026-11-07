import 'dotenv/config';
import postgres from '@prisma/orm-postgres/runtime';
import { contractFromJson } from '@prisma/orm-postgres/static';
import type { Contract } from './contract.d';
import contractJson from './contract.json' with { type: 'json' };

export const contract = contractFromJson<Contract>(contractJson);

export const db = postgres({
  contract,
  url: process.env['DATABASE_URL']!,
});

// model User {
//   id        Int                @id @default(autoincrement())
//   email     String             @unique
//   username  String?
//   name      String?
//   posts     Post[]
//   createdAt DateTime           @default(now()) @onCreate(now())
//   updatedAt temporal.UpdatedAt
// }

// model Post {
//   id        Int                @id @default(autoincrement())
//   title     String
//   content   String?
//   author    User               @relation(fields: [authorId], references: [id])
//   authorId  Int
//   createdAt DateTime           @default(now()) @onCreate(now())
//   updatedAt temporal.UpdatedAt
// }

// DATABASE_URL="postgresql://neondb_owner:npg_o9kHgKytpXd6@ep-patient-glitter-bd8k98e3.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"