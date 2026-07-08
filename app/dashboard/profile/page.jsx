"use client";

import Link from "next/link";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";

export default function ProfilePage() {
  return (
    <div className="space-y-6">

      <div>
        <p className="text-sm text-gray-400">
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          {" / Profile"}
        </p>

        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
      </div>

      <div className="flex flex-col gap-6 shadow ">

        {/* Profile Card */}
        <Card className="lg:col text-center bg-white text-black">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
            KR 
          </div>

          <h2 className="font-semibold text-gray-800">Kriti Ranjan</h2>

          <p className="text-sm text-gray-500">kriti@company.com</p>

          <div className="flex justify-center gap-2 mt-3">
            <Badge label="Admin" className="bg-blue-600" />

            <Badge label="Active" className="bg-green-600" dot />
          </div>

          <div className="mt-6">
            <Button className=" bg-blue-600 hover:bg-blue-700">
              Edit Profile
            </Button>
          </div>
        </Card>

        {/* Profile Details */}

        <Card className="bg-white shadow p-6" title="Profile Details">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-black">Department</span>

              <input
                type="text"
                defaultValue="Engineering"
                className="border rounded px-2 py-1 w-64 text-black"
              />
            </div>

            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-black">Role</span>

              <input
                type="text"
                defaultValue="Manager"
                className="border rounded px-2 py-1 w-64 text-black"
              />
            </div>

            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-black">Join Date</span>

              <input
                type="text"
                defaultValue="Jan 2023"
                className="border rounded px-2 py-1 w-64 text-black"
              />
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-black">Location</span>

              <input
                type="text"
                defaultValue="Delhi, India"
                className="border rounded px-2 py-1 w-64 text-black"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
