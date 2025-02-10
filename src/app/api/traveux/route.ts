// Get

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const traveaux = await prisma.traveaux.findMany();
    return NextResponse.json(traveaux, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error Failed" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, desc } = await request.json();

    const newTraveau = await prisma.traveaux.create({
      data: { name, desc },
    });

    return NextResponse.json(newTraveau, { status: 201 });
  } catch (error) {
    console.log("Frérot tu troll ça marche pas", error);
    return NextResponse.json({ error: "Error Failed" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, ...data } = await request.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json(
        { error: "Id est nécessaire chef" },
        { status: 400 }
      );
    }

    const updateTraveu = await prisma.traveaux.update({
      where: { id },
      data,
    });

    return NextResponse.json(updateTraveu, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error Failed CHEF" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id || typeof id !== "number") {
      return NextResponse.json(
        { error: "Id est nécessaire chef" },
        { status: 400 }
      );
    }

    const deleteTraveau = await prisma.traveaux.delete({
      where: { id },
    });

    return NextResponse.json(deleteTraveau, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error Failed CHEF" }, { status: 500 });
  }
}
