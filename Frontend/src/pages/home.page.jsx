import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useGetAllEmployeesQuery, useDeleteEmployeeMutation } from '@/lib/employeeApi.js'; // Import RTK Query hooks
import { Link } from 'react-router';

function Homepage() {
  const { data: employees, isLoading, error } = useGetAllEmployeesQuery(); // Fetch all employees
  const [deleteEmployee] = useDeleteEmployeeMutation(); // Mutation for deleting an employee

  const handleDelete = async (empID) => {
    try {
      await deleteEmployee(empID).unwrap(); // Delete employee and unwrap the result
      // Cache invalidation will automatically refetch the employee list
    } catch (err) {
      console.error('Failed to delete employee:', err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex justify-center items-start mt-10 px-2">
      <Card className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px]">
        <CardHeader>
          <CardTitle>Employee details</CardTitle>
          <CardDescription>Here Full Employee details</CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="table-auto w-full">
            <TableHeader>
              <TableRow>
                {["ID", "Name", "Address", "Actions"].map((header) => (
                  <TableHead key={header}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees?.content?.map((employee) => (
                <TableRow key={employee.empID}>
                  <TableCell>{employee.empID}</TableCell>
                  <TableCell>{employee.empName}</TableCell>
                  <TableCell>{employee.empAddress}</TableCell>
                  <TableCell className="space-x-2">
                    <Link to={`/view/${employee.empID}`}>
                      <Button className="bg-green-500 hover:bg-green-700 text-white">
                        View
                      </Button>
                    </Link>
                    <Link to="/add" state={{ empID: employee.empID }}>
                      <Button className="bg-blue-500 hover:bg-blue-700 text-white">
                        Update
                      </Button>
                    </Link>
                    <Button
                      className="bg-red-500 hover:bg-red-700 text-white"
                      onClick={() => handleDelete(employee.empID)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Homepage;