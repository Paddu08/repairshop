

"use client"

import { useFormContext } from "react-hook-form"


import { FormControl,FormField,FormItem,FormMessage,FormLabel } from "../ui/form"
 
import {  TextareaHTMLAttributes } from "react"
import { Textarea } from "@/components/ui/textarea"

type Props<S> ={
    fieldTitle:string,
    nameinSchema: keyof S & string,
    className?:string,
}
& 
TextareaHTMLAttributes<HTMLTextAreaElement>


export function InputWithLabels<S>({ fieldTitle,nameinSchema,className, ...props}: Props<S>) {
    const form=useFormContext()

    return (
        <FormField
        control={form.control}
        name={nameinSchema}
        render={({ field }) => (
            <FormItem className={className}>
                <FormLabel className= "text base mb-2">{fieldTitle}</FormLabel>
                <FormControl>
                    <Textarea {...field}  className={`w-full  max-w  disabled:text-blue-500 dark:disabled:text-green-500 disabled:opacity-70 {className}`}
                    {...props}
                    {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />

    )
}

