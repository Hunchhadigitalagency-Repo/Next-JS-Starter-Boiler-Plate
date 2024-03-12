"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
const LineChart = dynamic(() => import("../components/home/LIneChart"), {
  ssr: false, // Disable server-side rendering
});
const BarChart = dynamic(() => import("../components/home/BarChart"), {
  ssr: false, // Disable server-side rendering
});

const ChartPage = () => {
  return (
    <ScrollArea className="h-full">
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Line Chart</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <LineChart />
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Bar Chart</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <BarChart />
        </CardContent>
      </Card>
    </div>
    </div>
    </ScrollArea>
  );
};

export default ChartPage;
