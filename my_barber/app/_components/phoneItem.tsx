
"use client"
import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
interface PhoneItemProps {
    phone: string
}

const CopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
    return (
        <div className="p-5 ">

            <div className="flex justify-between" key={phone}>
                <div className="flex items-center space-x-1">
                    <SmartphoneIcon />
                    <p className="text-sm ">{phone}</p>

                </div>
                <Button variant="outline" size="sm" onClick={() => CopyPhoneClick(phone)}>Copiar</Button>
            </div>

        </div>
    );
}

export default PhoneItem;