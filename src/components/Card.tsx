"use client";

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Box,
  Truck,
  ArrowLeft,
  Percent,
  Copy,
  LayoutGrid,
  Target,
  BarChart3,
  Waves,
  Users,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { CardDetailType } from "@/types/type";
import { datas } from "@/data/CardData";
import { useState } from "react";
import Hero from "./Hero";

const getIcon = (iconName: string) => {
  const icons: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  } = {
    "arrow-right": ArrowRight,
    box: Box,
    delivery: Truck,
    "arrow-left": ArrowLeft,
    truck: Truck,
    discount: Percent,
    copy: Copy,
    screen: LayoutGrid,
    ad: Target,
    statistic: BarChart3,
    mini: Waves,
    buying: Users,
    layers: Layers,
  };
  const Icon = icons[iconName] || ArrowRight;
  return <Icon className="h-6 w-6 text-gray-600" />;
};

export default function CustomCard() {
  const [filteredData, setFilteredData] = useState<CardDetailType[]>(datas);

  const handleSearch = (searchResults: CardDetailType[]) => {
    setFilteredData(searchResults);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((data: CardDetailType, index) => (
            <Link href="/" key={index}>
              <Card className="p-6 h-full transition-all duration-200 hover:border-gray-400 hover:shadow-md">
                <div className="flex flex-col h-full">
                  <div className="mb-4">{getIcon(data.icon)}</div>
                  <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {data.description}
                  </p>
                  <p className="text-gray-400 text-sm">{data.date}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
