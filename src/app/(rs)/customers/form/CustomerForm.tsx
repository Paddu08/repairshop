"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
  import {
  InsertCustomerSchemaType,
  insertCustomerSchema,
  SelectCustomerSchemaType
} from "@/zod-schemas/customer"
import { InputWithLabels } from "@/components/inputs/InputWithLabels"
import { Button } from "@/components/ui/button"
import usStates from "@/constants/StatesArray"
import { SelectWithLabels } from "@/components/inputs/SelectWithLabel"
import { CheckboxWithLabel } from "@/components/inputs/CheckboxWithLabel"

type Props = {
  customer?: SelectCustomerSchemaType
  isManager?: boolean | undefined
}

export default function CustomerForm({ customer,isManager= false }: Props) {
  console.log(isManager)
  const defaultValues: InsertCustomerSchemaType = {
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

  const form = useForm<InsertCustomerSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertCustomerSchema),
    defaultValues,
  })

  function submitForm(data: InsertCustomerSchemaType) {
    console.log(data)
  }

  return (
    <div className="flex flex-col gap-1 md:px-8">
      <div>
        <h2 className="text">Customer form</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)} className=" flex flex-col  md:flex-row gap-4 md:gap-8">
            <div className="flex flex-col gap-4 w-full max-w-xs">
              
                <InputWithLabels<InsertCustomerSchemaType> fieldTitle="First Name"
                    nameinSchema="fname"/>
                    <InputWithLabels<InsertCustomerSchemaType> fieldTitle="Last  Name"
                    nameinSchema="lname"/>
                    <InputWithLabels<InsertCustomerSchemaType> fieldTitle="Address 1"
                    nameinSchema="address1"/>
                    <InputWithLabels<InsertCustomerSchemaType> fieldTitle="Address 2"
                    nameinSchema="address2"/>
                     <InputWithLabels<InsertCustomerSchemaType> fieldTitle="City"
                    nameinSchema="city"/>

               
                     <InputWithLabels<InsertCustomerSchemaType> fieldTitle="Zip Code"
                    nameinSchema="zip"/>
                    
                    
                    
                </div>  
                <div className="flex flex-col gap-4 w-full max-w-xs">
                <SelectWithLabels<InsertCustomerSchemaType> fieldTitle="State"
                    nameinSchema="state" data={usStates}/>

{isManager && customer?.id ? (
                            <CheckboxWithLabel<InsertCustomerSchemaType>
                                fieldTitle="Active"
                                nameInSchema="active"
                                message="Yes"
                            />) : null}
                <InputWithLabels<InsertCustomerSchemaType> fieldTitle="Phone Number"
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
