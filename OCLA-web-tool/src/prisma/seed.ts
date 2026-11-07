import { db } from "./db";

async function main() {
  const abc = await db.orm.public.Attorney.create({
    name: "ABC Firm",
    monthly: 8,
    caseLoad: 2,
    address: "123 Main St",
    location: "Bellingham, WA",
    area: "TRANSFER",
  });

  const org = await db.orm.public.Attorney.create({
    name: "Org",
    monthly: 12,
    caseLoad: 5,
    address: "456 Oak Ave",
    location: "Seattle, WA",
    area: "DISCHARGE",
  });

  await db.orm.public.Connection.create({
    attID: abc.id,
    county: "Whatcom",
    isPrimary: true,
  });

  await db.orm.public.Connection.create({
    attID: org.id,
    county: "King",
    isPrimary: true,
  });

  console.log("Seeded 2 attorneys and 2 connections.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => process.exit());