import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileImage from '@/assets/profile.png';
import { Button } from '@/components/ui/button';
import { useParams, Link } from 'react-router';
import { useGetAllEmployeesQuery, useGetEmployeeByIdQuery } from '@/lib/employeeApi.js';

const View = () => {
  const { empID } = useParams(); 
  const { data: allEmployees, isLoading: allLoading, error: allError } = useGetAllEmployeesQuery(); 
  const { data: singleEmployee, isLoading: singleLoading, error: singleError } = empID
    ? useGetEmployeeByIdQuery(empID) 
    : { data: null, isLoading: false, error: null };

  if (allLoading || singleLoading) return <div>Loading...</div>;
  if (allError) return <div>Error: {allError.message}</div>;
  if (empID && singleError) return <div>Error: {singleError.message}</div>;
  if (empID && !singleEmployee?.content) return <div>No employee found</div>;

  const employeesToDisplay = empID ? [singleEmployee?.content] : allEmployees?.content;

  return (
    // Modified: Changed grid classes to use 3 columns on md and above for one row of 3 cards.
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 justify-items-center">
      {employeesToDisplay?.map((emp) => (
        <Card key={emp.empID} className="w-full sm:w-[450px] rounded-lg shadow-lg mb-4">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Employee Card</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-4">
            <div className="flex justify-center mb-2">
              <img
                src={profileImage}
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="flex items-center">
              <h2 className="font-semibold text-base mr-2">ID :</h2>
              <p className="text-gray-700 text-lg">{emp.empID}</p>
            </div>
            <div className="flex items-center">
              <h2 className="font-semibold text-base mr-2">Name :</h2>
              <p className="text-gray-700 text-lg">{emp.empName}</p>
            </div>
            <div className="flex items-center">
              <h2 className="font-semibold text-base mr-2">Address :</h2>
              <p className="text-gray-700 text-lg">{emp.empAddress}</p>
            </div>
            <div className="flex justify-end pt-2">
              <Link to="/">
                <Button>Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default View;
