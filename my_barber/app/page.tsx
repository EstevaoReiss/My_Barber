import { Input } from "./_components/input";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react"; // Só importe o SearchIcon
import { Button } from "./_components/ui/button";
import Image from "next/image"; // Importe o Image do Next.js
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
const home = () => {
  return (
    <div className="p-5" >
      <Header />
      <h1 className="text-xl font-bold">Ola Mundo</h1>

      <div className="flex items-center gap-2 mt-6" >
        <Input placeholder="Faça sua busca..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>
      <div className="relative h-[150px] w-full mt-6" >
        <Image
          alt="Banner Principal"
          src="/banner-01.png"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <Card className="mt-6">
        <CardContent className=" flex justify-between p-0" >
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3>Corte de cabelo</h3>


            <div className="flex items-center gap-2 pl-5">
              <Avatar className="w-6 h-6" >
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" alt="Avatar do Cliente" />
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

export default home;