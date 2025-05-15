import { db } from "@/db";
import { tickets, customers } from "@/db/schema"
import { eq, asc } from "drizzle-orm"

export async function getOpenTickets() {
    const results = await db.select({
        id: tickets.id,
        ticketDate: tickets.createdAt,
        title: tickets.title,
        firstName: customers.fname,
        lastName: customers.lname,
        tech: tickets.tech,
        completed: tickets.completed,
    })
        .from(tickets)
        .leftJoin(customers, eq(tickets.customerId, customers.id))
        // .where(eq(tickets.status, false))
        .orderBy(asc(tickets.createdAt))

    return results
}   