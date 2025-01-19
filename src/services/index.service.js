import prisma from '../configs/database.js';

export const getData = () => {
    const admins = prisma.admin.findMany();
    const data = {
        message: 'Hello World',
        user: admins,
    };

    return data;
};