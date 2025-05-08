import { getCustomer } from "@/lib/queries/getCustomer";
import CustomerForm from "./CustomerForm";

export default async function GetCustomerForm({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  try {
    const params = await searchParams; // <-- await because now it's a Promise

    console.log('Search Params:', params);

    const { customerId } = await searchParams
    console.log('Customer ID:', customerId);

    if (!customerId) {
      return <div>Customer ID is missing</div>;
    }

    const customer = await getCustomer(Number(customerId));
    console.log('Customer:', customer);

    if (!customer) {
      return <div>Customer not found</div>;
    }

    return (
      <div>
        <CustomerForm customer={customer} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching customer form:", error);
    return <div>Error fetching customer form</div>;
  }
}