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
import { Barbershop } from "@prisma/client"; // 👈 Importe o tipo

const Home = async () => {  // 👈 Componente com letra maiúscula (convenção)

  const babershops: Barbershop[] = await db.barbershop.findMany({}); // 👈 Tipado
  
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

      <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>
      
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {babershops.map((babershop) => (
          <BabershopItem key={babershop.id} babershop={babershop} />
        ))}
      </div>

      <Card className="mt-4">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3>Corte de cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage 
                  src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" 
                  alt="Avatar do Cliente" 
                />
              </Avatar>
              <p className="text-sm">Kenny barbian</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-5 border-l border-solid">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">20:00</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home; // 👈 Export com letra maiúscula