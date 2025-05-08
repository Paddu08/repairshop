
"use client"

import { useFormContext } from "react-hook-form"


import { FormControl,FormField,FormItem,FormMessage,FormLabel } from "../ui/form"
 
import {Input } from "@/components/ui/input"
import { InputHTMLAttributes } from "react"

type Props<S> ={
    fieldTitle:string,
    nameinSchema: keyof S & string,
    className?:string,
}
& 
InputHTMLAttributes<HTMLInputElement>


export function InputWithLabels<S>({ fieldTitle,nameinSchema,className, ...props}: Props<S>) {
    const form=useFormContext()

    return (
        <FormField
        control={form.control}
        name={nameinSchema}
        render={({ field }) => (
            <FormItem className={className}>
                <FormLabel className= "text base">{fieldTitle}</FormLabel>
                <FormControl>
                    <Input {...field}  className={`w-full  max-w  disabled:text-blue-500 dark:disabled:text-green-500 disabled:opacity-70 {className}`}
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

