import { db } from "@/db";
import { tickets, customers } from "@/db/schema"
import { eq, ilike, or, sql, asc } from "drizzle-orm"

export async function getTicketSearchResults(searchText: string) {
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
        .where(or(
            ilike(tickets.title, `%${searchText}%`),
            ilike(tickets.tech, `%${searchText}%`),
            ilike(customers.phone, `%${searchText}%`),
            ilike(customers.city, `%${searchText}%`),
            ilike(customers.zip, `%${searchText}%`),
            sql`lower(concat(${customers.fname}, ' ', ${customers.lname})) LIKE ${`%${searchText.toLowerCase().replace(' ', '%')}%`}`,
        ))
        .orderBy(asc(tickets.createdAt))

    return results
}

export type TicketSearchResultsType = Awaited<ReturnType<typeof getTicketSearchResults>>