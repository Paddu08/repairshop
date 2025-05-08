
"use client"

import { useFormContext } from "react-hook-form"


import { FormControl,FormField,FormItem,FormMessage,FormLabel } from "../ui/form"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


type Dataobj={
    id:string,
    description:string,
}

type Props<S> = {
    fieldTitle:string,
    nameinSchema: keyof S & string,
    className?:string,
    data: Dataobj[],
}


export function SelectWithLabels<S>({ fieldTitle,nameinSchema,className,data }: Props<S>) {
    const form=useFormContext()

    return (
        <FormField
        control={form.control}
        name={nameinSchema}
        render={({ field }) => (
            <FormItem className={className}>
                <FormLabel className= "text base mb-2">{fieldTitle}</FormLabel>
                <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a value" />
                        </SelectTrigger>
                        <SelectContent>
                            {data.map((item) => (
                                <SelectItem key={item.id} value={item.id.toString()}>{item.description}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
    )
}
 
