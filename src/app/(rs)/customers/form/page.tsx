import { getCustomer } from "@/lib/queries/getCustomer";

export default async function GetCustomerForm({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  try { 
    const params = await searchParams;  // Await the searchParams to ensure they're resolved
    console.log('Search Params:', params);  // Log the searchParams to see their contents

    const customerId = params.customerId;
    console.log('Customer ID:', customerId);  // Log the customerId to confirm it's correct

    if (!customerId) {
      return <div>Customer ID is missing</div>;
    }

    const customer = await getCustomer(Number(customerId));
    console.log('Customer:', customer);  // Log the customer object to check its contents
    
    if (!customer) {
      return <div>Customer not found</div>;
    }

    return (
      <div>
        <h1>Customer Form</h1>
        <form>
          <label>
            First Name:
            <input type="text" name="fname"  />
          </label>
          <label>
            Last Name:
            <input type="text" name="lname"  />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" />
          </label>
          {/* add more fields as needed */}
          <button type="submit">Update</button>
        </form>
      </div>
    );
  } catch (error) {
    console.error("Error fetching customer form:", error);
    return <div>Error fetching customer form</div>;
  }
}
