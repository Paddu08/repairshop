import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTickets"; // Assuming you have a getTicket function

export default async function GetForm({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  try { 
    const params = await searchParams;  // Await the searchParams to ensure they're resolved
    console.log('Search Params:', params);  // Log the searchParams to see their contents

    const customerId = params.customerId;
    const ticketId = params.ticketId;  // Assuming you're also passing a ticketId in the query parameters
    console.log('Customer ID:', customerId);  // Log the customerId to confirm it's correct
    console.log('Ticket ID:', ticketId);  // Log the ticketId to confirm it's correct

    if (!customerId && !ticketId) {
      return <div>Either Customer ID or Ticket ID is required</div>;
    }

    // If customerId is provided, fetch the customer
    if (customerId) {
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
              <input type="text" name="lname" />
            </label>
            <label>
              Phone:
              <input type="text" name="phone"  />
            </label>
            <button type="submit">Update</button>
          </form>
        </div>
      );
    }

    // If ticketId is provided, fetch the ticket
    if (ticketId) {
      const ticket = await getTicket(Number(ticketId));
      console.log('Ticket:', ticket);  // Log the ticket object to check its contents
      
      if (!ticket) {
        return <div>Ticket not found</div>;
      }

      return (
        <div>
          <h1>Ticket Form</h1>
          <form>
            <label>
              Ticket Title:
              <input type="text" name="title"  />
            </label>
            <label>
              Description:
              <textarea name="description" ></textarea>
            </label>
            <label>
              Status:
              <input type="text" name="status"  />
            </label>
            <button type="submit">Update</button>
          </form>
        </div>
      );
    }

  } catch (error) {
    console.error("Error fetching form:", error);
    return <div>Error fetching form</div>;
  }
}
