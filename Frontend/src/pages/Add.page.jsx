import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Define the schema for validation using Zod
const formSchema = z.object({
  EmpName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  EmpAddress: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
  EmpNumber: z.string().min(10, {
    message: "Mobile number must be at least 10 digits.",
  }),
})

const Add = () => {
  // Initialize the form using useForm with validation resolver
  const form = useForm({
    resolver: zodResolver(formSchema),  // <-- Added this line to initialize the form
    defaultValues: {
      EmpName: '',
      EmpAddress: '',
      EmpNumber: '',
    },
  })

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data)  // <-- Show form data in console
  }

  return (
    <div className="flex justify-center items-center pt-12">  {/* <-- Reduced top margin */}
      <Card className="w-full sm:w-80">  {/* <-- Reduced card size */}
        <CardHeader>
          <CardTitle>Employee Details</CardTitle>
          <CardDescription>Please add your details</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>  {/* <-- Added this to pass the form object */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control} 
                name="EmpName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        value={field.value || ''}  
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control} 
                name="EmpAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 Main St"
                        value={field.value || ''}  
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control} 
                name="EmpNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123-456-7890"
                        value={field.value || ''}  
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Add
