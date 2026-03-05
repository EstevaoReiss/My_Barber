import Image from "next/image";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, Ghost, HomeIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
const Header = () => {
    return (
        <Card>
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Image alt="My Barber Logo" src="/logo.png" width={100} height={100} />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className=" text-left">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="p5 flex flex-col gap-2 border-b border-solid py-5">
                            <Button className="justify-start gap-2" variant="ghost">
                                <HomeIcon size={18} />
                                incio</Button>
                            <Button className="justify-start gap-2" variant="ghost">
                                <CalendarIcon size={18} />Agendamentos</Button>
                        </div>

                         <div className="p5 flex flex-col gap-2 border-b border-solid py-5">
                            <Button className="justify-start gap-2" variant="ghost">
                                <HomeIcon size={18} />
                                incio</Button>
                            <Button className="justify-start gap-2" variant="ghost">
                                <CalendarIcon size={18} />Agendamentos</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;