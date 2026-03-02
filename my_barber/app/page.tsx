import { Input } from "./_components/input";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react"; // Só importe o SearchIcon
import { Button } from "./_components/ui/button";
import Image from "next/image"; // Importe o Image do Next.js

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
    </div>
  );
};

export default home;