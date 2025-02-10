// Get

import { PrismaClient } from '@prisma/client/'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient

export async function Get(params:Request) {
    try{

        const traveau = await prisma.traveaux.findMany();
        return NextResponse.json(traveau, {status:200})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({error : 'Error Failed'} , {status:500})
    }
}