import { Input } from "./_components/input";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BabershopItem from "./_components/babershop-item";
import { Barbershop } from "@prisma/client";
import { QuickSeachOptions } from "./_constants/search/Search";
import BookingItem from "./_components/booking-item";
const Home = async () => {

  const babershops: Barbershop[] = await db.barbershop.findMany({});
  const popularBabershops: Barbershop[] = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },

  });

  return (
    <div className="p-5">
      <Header />
      <h1 className="text-xl font-bold">Olá Mundo</h1>

      <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faça sua busca..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>

      <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden" >

        {QuickSeachOptions.map((option) => (
          <Button className="gap-2" variant="secondary" key={option.title}>
            <Image src={option.imageUrl} width={16} height={16} alt={option.title} />
            <p> {option.title}</p>
          </Button>

        ))}


      </div>
      <div className="relative h-[150px] w-full mt-6">

        <Image
          alt="Banner Principal"
          src="/banner-01.png"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>
      
      
      <BookingItem />


      <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>

      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {babershops.map((babershop) => (
          <BabershopItem key={babershop.id} babershop={babershop} />
        ))}
      </div>

      <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
        Populares
      </h2>

      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden mb-5">
        {popularBabershops.map((babershop) => (
          <BabershopItem key={babershop.id} babershop={babershop} />
        ))}
      </div>
      <footer>

        <Card className="py-6 px-5  ">
          <CardContent className=" text-sm text-gray-400">
            @2026 Copyrigth. <span className="font-bold">My Barber</span>
          </CardContent>

        </Card>
      </footer>
    </div>

  );
};

export default Home; 