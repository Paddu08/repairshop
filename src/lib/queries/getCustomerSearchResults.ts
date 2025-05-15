import { db } from "@/db";
import { customers } from "@/db/schema";
import { ilike, or, sql } from "drizzle-orm"

export async function getCustomerSearchResults(searchText: string) {
    const results = await db.select()
        .from(customers)
        .where(or(
            ilike(customers.phone, `%${searchText}%`),
            ilike(customers.city, `%${searchText}%`),
            ilike(customers.zip, `%${searchText}%`),
            sql`lower(concat(${customers.fname}, ' ', ${customers.lname})) LIKE ${`%${searchText.toLowerCase().replace(' ', '%')}%`}`,
        ))
        .orderBy(customers.lname)
    return results
}