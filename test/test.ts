import { api } from "encore.dev/api";
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


export const get = api(
    { expose: true, method: "GET", path: "/test" },
    async () => {
        const data = await db.select()
        .from(messagesTable)
        
    return { data }
    }
);

