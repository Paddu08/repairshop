import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTickets";
import TicketForm from "./TicketForm";


export default async function GetForm({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  try {
    const customerId = searchParams.customerId;
    const ticketId = searchParams.ticketId;

    if (!customerId && !ticketId) {
      return <div>Either Customer ID or Ticket ID is required</div>;
    }

    if (ticketId) {
      const ticket = await getTicket(Number(ticketId));
      if (!ticket) return <div>Ticket not found</div>;

      const customer = await getCustomer(ticket.customerId);
      if (!customer) return <div>Customer not found</div>;

      return <TicketForm customer={customer} ticket={ticket} />;
    }

    // fallback if only customerId is present
    const customer = await getCustomer(Number(customerId));
    if (!customer) return <div>Customer not found</div>;

    return <TicketForm customer={customer} />;
  } catch (error) {
    console.error("Error fetching form:", error);
    return <div>Error fetching form</div>;
  }
}
