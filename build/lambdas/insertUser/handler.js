"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createPrismaClient_1 = require("@libs/createPrismaClient");
const uuid_1 = require("uuid");
const handler = async () => {
    const prisma = (0, createPrismaClient_1.createPrismaClient)();
    try {
        await prisma.user.create({
            data: { uuid: (0, uuid_1.v4)() },
        });
    }
    catch (e) {
        console.error(e);
    }
    finally {
        prisma.$disconnect();
    }
};
exports.default = handler;
//# sourceMappingURL=handler.js.map