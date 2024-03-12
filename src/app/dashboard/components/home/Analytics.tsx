"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const LineChart = dynamic(() => import("./LIneChart"), {
  ssr: false, // Disable server-side rendering
});
const PieChart = dynamic(() => import("./PieChart"), {
  ssr: false, // Disable server-side rendering
});
const BarChart = dynamic(() => import("./BarChart"), {
  ssr: false, // Disable server-side rendering
});
const Analytics = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <LineChart />
        </CardContent>
      </Card>
      <Card className="col-span-4 md:col-span-3">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>You made 265 sales this month.</CardDescription>
        </CardHeader>
        <CardContent>
          <PieChart />
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <LineChart />
        </CardContent>
      </Card>
      <Card className="col-span-4 md:col-span-3">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>You made 265 sales this month.</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
