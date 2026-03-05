import { Card, CardContent } from "./ui/card";

const Footer    = () => {
    return ( 
           <footer>

        <Card className="py-6 px-5  ">
          <CardContent className=" text-sm text-gray-400">
            @2026 Copyrigth. <span className="font-bold">My Barber</span>
          </CardContent>

        </Card>
      </footer>
     );
}
 
export default Footer  ;