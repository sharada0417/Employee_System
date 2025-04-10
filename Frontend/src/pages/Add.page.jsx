// src/pages/Add.page.jsx
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import the RTK Query hook
import { useSaveEmployeeMutation } from "@/lib/employeeApi.js";  // Adjust the path as needed

// Define the schema for validation using Zod
const formSchema = z.object({
  empName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  empAddress: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
  empNumber: z.string().min(10, {
    message: "Mobile number must be at least 10 digits.",
  }),
});

const Add = () => {
  // Initialize the form using useForm with validation resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      empName: '',
      empAddress: '',
      empNumber: '',
    },
  });

  // Use the saveEmployee mutation from employeeApi
  const [saveEmployee, { isLoading, error, isError, isSuccess }] = useSaveEmployeeMutation();

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const result = await saveEmployee(data).unwrap();
      console.log('Employee saved successfully:', result);
      // You can add a success notification or redirect here if desired.
    } catch (err) {
      console.error('Failed to save employee:', err);
      // Optionally, display an error notification here.
    }
  };

  return (
    <div className="flex justify-center items-center pt-12">
      <Card className="w-full sm:w-[450px]">
        <CardHeader>
          <CardTitle>Employee Details</CardTitle>
          <CardDescription>Please add Employee details</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="empName"
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
                name="empAddress"
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
                name="empNumber"
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
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>
              {isError && <p className="text-red-600">Error: {error?.data?.message || 'Submission failed'}</p>}
              {isSuccess && <p className="text-green-600">Employee saved successfully!</p>}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Add;
