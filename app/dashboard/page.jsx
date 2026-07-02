// "use client" — useState use kar rahe hain
"use client";
import { useState } from "react";
import Link from "next/link";
import AreaChart from "@/app/components/ui/AreaChart";
import BarChart from "@/app/components/ui/BarChart";
import Sidebar from "@/app/components/ui/Sidebar";
import Navbar from "@/app/components/ui/Navbar";
import Card from "@/app/components/ui/Card";
import Badge from "@/app/components/ui/Badge";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";
import Input from "@/app/components/ui/Input";

export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page title */}
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Stat Cards — Day 2 Card component */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Primary Card" className="bg-blue-600">
          <p>View Details -</p>
        </Card>

        <Card title="Warning Card" className="bg-yellow-500">
          <p>View Details -</p>
        </Card>

        <Card title="Success Card" className="bg-green-600">
          <p>View Details -</p>
        </Card>

        <Card title="Danger Card" className="bg-red-600">
          <p>View Details -</p>
        </Card>
      </div>

      {/* Charts — Day 2 components */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Area Chart Example" className="bg-white text-black">
          <AreaChart />
        </Card>

        <Card title="Bar Chart Example" className="bg-white text-black">
          <BarChart />
        </Card>
      </div>

      {/* Badges + Buttons — Day 2 components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card header="Status Badges">
          <div className="flex flex-wrap gap-2">
            <Badge label="Active" className="bg-green-600" dot />
            <Badge label="Pending" className="bg-yellow-500" dot />
            <Badge label="Failed" className="bg-red-600" dot />
            <Badge label="Admin" className="bg-blue-600" />
          </div>
        </Card>

        <Card header="Actions">
          <div className="flex flex-wrap gap-3">
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setModalOpen(true)}
            >
              Open Modal
            </Button>

            <Button className="bg-green-600 hover:bg-green-700">Approve</Button>

            <Button className="bg-red-600 hover:bg-red-700">Delete</Button>

            <Button className="bg-gray-400 text-white hover:bg-gray-700">
              Cancel
            </Button>
          </div>
        </Card>
      </div>

      {/* Modal — Day 2 */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Item"
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Save
            </Button>
          </>
        }
      >
        <Input label="Name" placeholder="Enter name..." className="mb-4" />
        <Input label="Email" type="email" placeholder="email@example.com" />
      </Modal>
    </div>
  );
}
