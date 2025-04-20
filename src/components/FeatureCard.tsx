
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function FeatureCard({ title, icon, children }: FeatureCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-chess-accent text-2xl">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
