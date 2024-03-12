import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { ReactNode } from "react";
import LineChart from "./home/LIneChart";

const ChartCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <Card className={className}>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">{children}</CardContent>
      </Card>
      ƒ
    </div>
  );
};

export default ChartCard;
