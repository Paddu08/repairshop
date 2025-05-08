"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
  import {
  insertCustomerSchema,
  insertTicketSchemaType,
  type SelectCustomerSchema,
} from "@/zod-schemas/customer"
import { InputWithLabels } from "@/components/inputs/InputWithLabels"
import { Button } from "@/components/ui/button"
import usStates from "@/constants/StatesArray"
import { SelectWithLabels } from "@/components/inputs/SelectWithLabel"


type Props = {
  customer?: SelectCustomerSchema
}

export default function CustomerForm({ customer }: Props) {
  const defaultValues: insertTicketSchemaType = {
    id: customer?.id ?? 0,
    fname: customer?.fname ?? "",
    lname: customer?.lname ?? "",
    address1: customer?.address1 ?? "",
    address2: customer?.address2 ?? "",
    city: customer?.city ?? "",
    state: customer?.state ?? "",
    zip: customer?.zip ?? "",
    phone: customer?.phone ?? "",
  }

  const form = useForm<insertTicketSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  })

  function submitForm(data: insertTicketSchemaType) {
    console.log(data)
  }

  return (
    <div className="flex flex-col gap-1 md:px-8">
      <div>
        <h2 className="text">Customer form</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)} className=" flex flex-col  md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-4 w-full max-w-xs">
              
                <InputWithLabels<insertTicketSchemaType> fieldTitle="First Name"
                    nameinSchema="fname"/>
                    <InputWithLabels<insertTicketSchemaType> fieldTitle="Last  Name"
                    nameinSchema="lname"/>
                    <InputWithLabels<insertTicketSchemaType> fieldTitle="Address 1"
                    nameinSchema="address1"/>
                    <InputWithLabels<insertTicketSchemaType> fieldTitle="Address 2"
                    nameinSchema="address2"/>
                     <InputWithLabels<insertTicketSchemaType> fieldTitle="City"
                    nameinSchema="city"/>
                     <InputWithLabels<insertTicketSchemaType> fieldTitle="Zip Code"
                    nameinSchema="zip"/>
                    
                    
                </div>  
                <div className="flex flex-col gap-4 w-full max-w-xs">
                <SelectWithLabels<insertTicketSchemaType> fieldTitle="State"
                    nameinSchema="state" data={usStates}/>
                <InputWithLabels<insertTicketSchemaType> fieldTitle="Phone Number"
                    nameinSchema="phone"/>
                                    <div className="flex gap-2">

                  <Button type='submit' className="w-3/4" variant="default" title="save"> Save</Button>
                  <Button type='button'   variant="destructive" title="Reset" onClick={()=>form.reset(defaultValues)}> Reset</Button></div>  


                </div> 

               
            {/* Render input fields here using form components */}
          </form>
         
        </Form>
      </div>
    </div>
  )
}
