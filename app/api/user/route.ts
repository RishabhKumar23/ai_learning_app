import db from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, name } = await request.json();

    // if user already exists
    const user = await db.select().from(usersTable).where(eq(usersTable.email, email));

    // If user not exists
    if (user?.length == 0) {
        const result = await db.insert(usersTable).values({
            name: name,
            email: email,
        }).returning({ id: usersTable.id, name: usersTable.name, email: usersTable.email });
        return NextResponse.json(result);
    }
    return NextResponse.json(user[0]);
}