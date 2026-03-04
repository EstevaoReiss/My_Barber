import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Barbershop } from "@prisma/client";
import { Button } from "./ui/button";
import {  StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface BabershopItemProps {
  babershop: Barbershop;  
}

const BabershopItem = ({ babershop }: BabershopItemProps) => {  
  return (
    <Card className=" min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative  h-[159px] w-full">
          <Image 
            fill 
            className="object-cover rounded-2xl " 
            src={babershop.imageUrl}   
            alt={babershop.name}        
          />

          <Badge className="absolute left-2 top-2" variant="secondary">
            <StarIcon size ={12} className="fill-primary text-primary" ></StarIcon>
            <p className="text-xs semi-bold space-y-3">5.0</p>
          </Badge>
        </div>
        <div className="px-2 py-2">
          <h3 className="font-semibold text-sm">{babershop.name}</h3>
          <p className="text-xs text-gray-400">{babershop.address}</p>
        </div>
        <div className="px-1 py-3">
           
            <Button variant="secondary" className=" w-full mt-3 " asChild>
              <Link href={`/barbershops/${babershop.id}`}>Reserva

              </Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BabershopItem;