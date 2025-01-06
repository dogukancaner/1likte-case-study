"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { datas } from "@/data/CardData";
import { CardDetailType } from "@/types/type";

interface HeroProps {
  onSearch: (filteredData: CardDetailType[]) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const handleSearch = (searchTerm: string) => {
    const filtered = datas.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filtered);
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal">
          1likte Ekibinden tavsiyeler ve yanıtlar
        </h1>
        <div className="relative max-w-3xl w-full">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
            size={20}
          />
          <Input
            type="search"
            placeholder="Yazılarda arayın..."
            className="w-full pl-10 py-6 bg-zinc-700 text-white placeholder:text-white"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
