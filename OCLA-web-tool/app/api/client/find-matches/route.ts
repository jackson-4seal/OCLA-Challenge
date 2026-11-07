import { db } from '@/src/prisma/db'
// need?
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        console.log(await db.orm.public.Connection.all());
        const { county, caseType } = await req.json();
        console.log(county, caseType);

        console.log(db);
        const results = await db.orm.public.Connection
            .where({county})
            .include("attorney")
            .all();
        //     where: {
        //         county: body.county,
        //         attorney: {
        //             area: body.caseType,
        //         },
        //     },
        //     select: {
        //         isPrimary: true,
        //         attorney: {
        //             select: {
        //                 name: true,
        //                 address: true,
        //                 location: true,
        //             },
        //         },
        //     },
        // });

        const attorneys = results
       .filter((c) => c.attorney.area === caseType)
       .map((c) => ({
        isPrimary: c.isPrimary,
        attorney: {
          name: c.attorney.name,
          address: c.attorney.address,
          location: c.attorney.location,
        },
      }))

        return NextResponse.json({ attorneys });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {error: "failed to get matching attorneys" },
            { status:500 }
        );
    }
}