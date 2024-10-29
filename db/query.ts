const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

export class TaskQuery {
    constructor() {

    }

    async GetTask() {
        const tasks = await prisma.task.findMany();
        return tasks;
    }

    async CreateTask(name, description) {
        await prisma.task.create({
            data: {
                name: name,
                description: description,
                createdon: new Date()
            }
        })
    }

    async UpdateTask() {

    }

    async DeleteTask() {

    }
}
