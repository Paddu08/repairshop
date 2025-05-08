"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import {   selectTicketSchemaType, insertTicketSchemaType, insertTicketSchema } from "@/zod-schemas/tickets"
import { InputWithLabels } from "@/components/inputs/InputWithLabels"

type Props = {
  customer: selectTicketSchemaType,
  ticket?: selectTicketSchemaType,
}

export default function TicketForm({ customer, ticket }: Props) {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id || 0,
    customerId: ticket?.customerId ?? customer.id,

    title: ticket?.title || "",
    description: ticket?.description || "",
    tech: ticket?.tech || "",
  }

  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  })

  function submitForm(data: insertTicketSchemaType) {
    console.log(data)
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text">Ticket form</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)}  className=" flex flex-col  md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col gap-4 w-full max-w-xs">


             <InputWithLabels<insertTicketSchemaType> fieldTitle="First Name"
                                nameinSchema="title"/>
                               
                                <InputWithLabels<insertTicketSchemaType> fieldTitle="Address 1"
                                nameinSchema="description"/>
                                <InputWithLabels<insertTicketSchemaType> fieldTitle="Address 2"
                                nameinSchema="tech"/>
                                 <InputWithLabels<insertTicketSchemaType> fieldTitle="City"
                                nameinSchema="status"/>
                                
            <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
        <p>{JSON.stringify(form.getValues())}</p>
      </div>
    </div>
  )
}
