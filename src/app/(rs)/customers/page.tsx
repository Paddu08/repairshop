
import CustomerSearch from "@/app/(rs)/customers/form/CustomerSearch"


export const metadata = {
    title: "Customer Search",
}


import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults"
import CustomerTable from "./form/CustomerTable"






export default async function Customers({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { searchText } = await searchParams

    if (!searchText) return <CustomerSearch />

    const results = await getCustomerSearchResults(searchText)

    return (
        <>Home page


            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Customer Search</h1>
                <CustomerSearch />
               {results.length ? <CustomerTable data={results} /> : (
                <p className="mt-4">No results found</p>
            )}
            </div>



        </>
    )
}
