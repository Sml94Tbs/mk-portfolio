import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prima = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prima

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prima

