import React, { useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocation, useNavigate } from 'react-router';
import { useSaveEmployeeMutation, useUpdateEmployeeMutation, useGetEmployeeByIdQuery } from "@/lib/employeeApi.js";


const formSchema = z.object({
  empID: z.number().optional(),
  empName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  empAddress: z.string().min(2, { message: "Address must be at least 2 characters." }),
  empNumber: z.string().min(10, { message: "Mobile number must be at least 10 digits." }),
});

const Add = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const empID = location.state?.empID; // Get empID from state if updating
  const isUpdate = !!empID;

  const { data: employee, isLoading: isFetching, error: fetchError } = isUpdate
    ? useGetEmployeeByIdQuery(empID)
    : { data: null, isLoading: false, error: null };

  const [saveEmployee] = useSaveEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      empID: isUpdate ? empID : 0,
      empName: '',
      empAddress: '',
      empNumber: '',
    },
  });

  useEffect(() => {
    if (isUpdate && employee?.content) {
      const emp = employee.content;
      form.reset({
        empID: emp.empID,
        empName: emp.empName,
        empAddress: emp.empAddress,
        empNumber: emp.empNumber,
      });
    }
  }, [employee, isUpdate, form]);

  const onSubmit = async (data) => {
    try {
      if (isUpdate) {
        await updateEmployee(data).unwrap();
        console.log('Employee updated successfully');
      } else {
        await saveEmployee(data).unwrap();
        console.log('Employee saved successfully');
      }
      navigate('/');
    } catch (err) {
      console.error('Failed to save/update employee:', err);
    }
  };

  if (isUpdate && isFetching) return <div>Loading...</div>;
  if (isUpdate && fetchError) return <div>Error: {fetchError.message}</div>;

  return (
    <div className="flex justify-center items-center pt-12">
      <Card className="w-full sm:w-[450px]">
        <CardHeader>
          <CardTitle>{isUpdate ? 'Update Employee' : 'Employee Details'}</CardTitle>
          <CardDescription>{isUpdate ? 'Update employee details' : 'Please add Employee details'}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {isUpdate && (
                <FormField
                  control={form.control}
                  name="empID"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ID</FormLabel>
                      <FormControl>
                        <Input disabled value={field.value} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
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
              <Button type="submit">
                {isUpdate ? 'Update' : 'Submit'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Add;