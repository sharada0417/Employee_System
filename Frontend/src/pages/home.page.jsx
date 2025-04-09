import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const employeeData = [
  { id: 1, name: "Sharada", address: "Rathnapura" },
  { id: 2, name: "Sunil", address: "Kandy" },
  { id: 3, name: "Nimal", address: "Colombo" },
  { id: 4, name: "Kavinda", address: "Galle" },
];

function Homepage() {
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
              {employeeData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.address}</TableCell>
                  <TableCell className="space-x-2">
                    <Button className="bg-green-500 hover:bg-green-700 text-white">
                      View
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white">
                      Update
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-700 text-white">
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
