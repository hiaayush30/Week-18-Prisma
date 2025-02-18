//seeding some data so wen a new dev clones the codebase and runs the command he/she has some dummy data

import { PrismaClient } from "@prisma/client"
const client = new PrismaClient();

const dummyData = async () => {
    client.user.create({
        data: {
            age: 21,
            username: "Tester",
            password: '123',
            todos: {
                create: {
                    description: 'hello there',
                    title: 'title',
                }
            }
        }
    })
}
dummyData();