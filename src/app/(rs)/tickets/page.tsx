import TicketSearch from "@/app/(rs)/tickets/form/TicketSearch"
import { getOpenTickets } from "@/lib/queries/getOpenTickets"
import { getTicketSearchResults } from "@/lib/queries/getTicketSearchResults"

export const metadata = {
    title: "Ticket Search",
}

export default async function Tickets({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { searchText } = await searchParams

    if (!searchText) {
        const results = await getOpenTickets()
        return (
            <>
                <TicketSearch />
                 <>{JSON.stringify( results)}</>
                {/* {results.length ? <TicketTable data={results} /> : <p className="mt-4">No open tickets found</p>} */}
            </>
        )
    }

    const results = await getTicketSearchResults(searchText)

    return (
        <>
            <TicketSearch />
             <>{JSON.stringify( results)}</>
        </>
    )
}
