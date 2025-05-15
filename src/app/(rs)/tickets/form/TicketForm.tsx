"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import {   selectTicketSchemaType, insertTicketSchemaType, insertTicketSchema } from "@/zod-schemas/tickets"
import { InputWithLabels } from "@/components/inputs/InputWithLabels"
import { SelectCustomerSchemaType } from "@/zod-schemas/customer"
import { TextareaWithLabels } from "@/components/inputs/TextAreaWithLabel"
import { DisplayServerActionResponse } from "@/components/DislayServerAction"
import { LoaderCircle } from "lucide-react"
import { saveTicketAction } from "@/app/actions/saveTicketAction"
import { useAction } from "next-safe-action/hooks"

import { useToast } from '@/hooks/use-toast'



type Props = {
  customer: SelectCustomerSchemaType,
  ticket?: selectTicketSchemaType,
}

export default function TicketForm({ customer, ticket }: Props) {
  const defaultValues: insertTicketSchemaType = {
    id: ticket?.id || 0,
    customerId: (ticket?.customerId ?? customer.id)!,

    title: ticket?.title || "",
    description: ticket?.description || "",
    tech: ticket?.tech || "",
    status: ticket?.status || "Open",
  }
      const { toast } = useToast()
 

  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertTicketSchema),
    defaultValues,
  })

  const {
        execute: executeSave,
        result: saveResult,
        isPending: isSaving,
        reset: resetSaveAction,
    } = useAction(saveTicketAction, {
        onSuccess({ data }) {
            if (data?.message) {
                toast({
                    variant: "default",
                    title: "Success! 🎉",
                    description: data.message,
                })
            }
        },
        onError() {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Save Failed",
            })
        }
    })

    async function submitForm(data: insertTicketSchemaType) {
        executeSave(data)
    }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
                    <DisplayServerActionResponse result={saveResult} />

        <h2 className="text">Ticket form</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)}  className=" flex flex-col  md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col gap-4 w-full max-w-xs">


             <InputWithLabels<insertTicketSchemaType> fieldTitle="Title"
                                nameinSchema="title"/>
                               
                                <InputWithLabels<insertTicketSchemaType> fieldTitle="Ticket ID"
                                nameinSchema="id"/>
                                <InputWithLabels<insertTicketSchemaType> fieldTitle="Tech"
                                nameinSchema="tech"/>
                                 <InputWithLabels<insertTicketSchemaType> fieldTitle="status"
                                nameinSchema="status"/>
                                <TextareaWithLabels<insertTicketSchemaType> fieldTitle="description"
                                nameinSchema="description"/>
                               
                                
            <Button type="submit">{isSaving ? (
                                        <>
                                            <LoaderCircle className="animate-spin" /> Saving
                                        </>
                                    ) : "Save"}</Button>
                                      <Button
                                    type="button"
                                    variant="destructive"
                                    title="Reset"
                                    onClick={() => {
                                        form.reset(defaultValues)
                                        resetSaveAction()
                                    }}
                                >
                                    Reset
                                </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
