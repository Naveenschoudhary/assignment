import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { getFileNameFromUrl } from "@/utils/common";
import RadioSizes from "./RadioSizes";
import { IoCloseOutline } from "react-icons/io5";

interface ImageData {
    id: number;
    previewURL: string;
    webformatURL: string;
    largeImageURL?: string;
    previewWidth: number;
    previewHeight: number;
    webformatWidth: number;
    webformatHeight: number;
    webformatUrl: string;
    user: string;
    tags: string;
}

interface ImageModel {
    show: boolean;
    onClose: () => void;
    data?: ImageData;
}

export function ImageModel({ show, onClose, data }: ImageModel) {
    console.log(`ImageModel`, data);
    const [radioButton, setRadioButton] = useState<number>(1);
    const downloadImage = async (imageUrl: string, previewUrl: string) => {
        try {
            const fileName =
                getFileNameFromUrl(previewUrl) || `${new Date().toISOString()}.jpg`;
            const response = await axios.get(imageUrl, { responseType: "blob" });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            'use server'
        } catch (err) {
            console.error("Error downloading image:", err);
        }
    };
    const handleRadioButton = (value: number) => {
        setRadioButton(value);
    };
    return (
        <Transition appear show={show}>
            <Dialog as="div" className="relative z-10  " onClose={onClose}>
                <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto ">
                    <div className="flex flex-col md:flex-row min-h-full items-center justify-center  text-center min-w-[70vw]">
                        <Transition.Child
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full relative overflow-y-auto max-w-md transform overflow-hidden rounded-md  min-h-[80vh] max-h-[95vh]  bg-white text-left align-middle shadow-xl transition-all min-w-[70vw]">
                                {/* Header */}
                                <Dialog.Title className="text-lg absolute top-0 w-full h-[60px] flex justify-between items-center px-4 font-medium leading-6 text-gray-900 bg-[#F5F5F5]">
                                    <h3>Perview ID: {data?.id}</h3>
                                    <button onClick={onClose}>
                                        <IoCloseOutline />
                                    </button>
                                </Dialog.Title>
                                {/* Image Container */}
                                <div className="px-4 mt-[80px]  flex flex-col  md:flex-row gap-4 ">
                                    <div className="max-w-3/4 h-[600] border ">
                                        {data?.largeImageURL && (
                                            <Image
                                                src={data?.largeImageURL}
                                                width={data?.webformatWidth || 500}
                                                height={data?.webformatHeight || 400}
                                                alt="some"
                                                className="rounded-md"
                                            />
                                        )}
                                    </div>
                                    <div className="md:w-1/3 ">
                                        <h2 className="text-xl mb-4">Download</h2>
                                        {/* Radio Button */}
                                        <RadioSizes
                                            radioButton={radioButton}
                                            handleRadioButton={handleRadioButton}
                                        />
                                        {/* download Button */}
                                        <button
                                            onClick={() =>
                                                // @ts-ignore
                                                downloadImage(data?.largeImageURL, data?.previewURL)
                                            }
                                            className="bg-[#4BC34B] py-2 px-4 w-full mt-4 text-white"
                                        >
                                            Download for free
                                        </button>
                                        {/* Information user */}
                                        <h2 className="text-xl my-4">Information</h2>
                                        <div className="">
                                            <div>User</div>
                                            <p className="font-bold mt-2">{data?.user}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Tags  */}
                                <div className="text-black flex justify-start gap-2 my-4  px-4 mt-2">
                                    tags :{" "}
                                    {data?.tags.split(", ").map((tag) => (
                                        <div className="bg-[#F5F5F5] text-[#767676] rounded-sm front-thin text=sm px-2 py-1">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
