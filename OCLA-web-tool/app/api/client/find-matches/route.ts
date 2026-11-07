import { db } from '@/src/prisma/db'
// need?
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        
        const body = await req.json();
        console.log(body);

        const results = await db.connection.findMany({
            where: {
                county: body.county,
                attorney: {
                    area: body.caseType,
                },
            },
            select: {
                isPrimary: true,
                attorney: {
                    select: {
                        name: true,
                        address: true,
                        location: true,
                    },
                },
            },
        });

        return NextResponse.json({
            attorneys: results
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {error: "failed to get matching attorneys" },
            { status:500 }
        );
    }
}