import { api } from "encore.dev/api";
import { WebSocket } from "ws";
import { db } from "../db/drizzle";
import { messagesTable } from "../db/schema";
import { createId } from "@paralleldrive/cuid2";

interface Response {
  data: Message[];
}

interface Message {
    username: string;
    content: string;
    room: string;
}


export const post = api(
    { expose: true, method: "POST", path: "/message" },
    async (values : Message) => {
            await db.insert(messagesTable).values({
                id: createId(),
                timestamp: new Date(),
                ...values
            }).returning()
           }
);

