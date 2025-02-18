import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const app = express();

const prismaClient = new PrismaClient();

app.get('/', async (req: Request, res: Response) => {
    try {
        const user=await prismaClient.user.create({
            data: {
                username: 'Wick',
                age: 20,
                password: '123'
            },
            select:{
                username:true,
                password:false
            }
        })
        const users = await prismaClient.user.findMany({
            include:{
                todos:true //prisma will fetch it using the foreign key in todos table
            }
        });
        res.json({
            message: 'server running',
            users: users,
            createdUser:user
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: 'something went wrong'
        })
    }
})

app.listen(3000);