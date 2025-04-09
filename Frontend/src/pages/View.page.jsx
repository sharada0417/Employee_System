import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileImage from '@/assets/profile.png';
import { Button } from '@/components/ui/button';

const View = () => {
  return (
    <div className="flex justify-center items-center pt-12">
      <Card className="w-full sm:w-[450px] rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Employee Card</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 p-4"> {/* Even padding on all sides */}
          <div className="flex justify-center mb-2">
            <img
              src={profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="flex items-center">
            <h2 className="font-semibold text-base mr-2">ID :</h2>
            <p className="text-gray-700 text-lg">1</p>
          </div>
          <div className="flex items-center">
            <h2 className="font-semibold text-base mr-2">Name :</h2>
            <p className="text-gray-700 text-lg">Sharada</p>
          </div>
          <div className="flex items-center">
            <h2 className="font-semibold text-base mr-2">Address :</h2>
            <p className="text-gray-700 text-lg">Kandy</p>
          </div>
          <div className="flex justify-end pt-2"> {/* Button aligned right */}
            <Button>Home</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default View;
