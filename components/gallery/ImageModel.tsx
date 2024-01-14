import { Dialog } from "@headlessui/react";
import Image from "next/image";

interface ImageModel {
    show: boolean | string;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}


export function ImageModel({ show, setShow }: ImageModel) {
    return (
        <Dialog open={true} onClose={() => setShow(false)}>
            <div className=" flex items-center justify-center">
                <div className="flex gap-4">
                    <div>
                        <Image src="https://tikaraja.com/assets/mainbg.webp" width={600} height={500} alt="alt" />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
