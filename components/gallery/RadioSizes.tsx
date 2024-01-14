import React from 'react'
import { RadioGroup } from '@headlessui/react'
import { sizes } from '@/utils/Constant'
import { FaCheckCircle } from 'react-icons/fa'

const RadioSizes = ({ radioButton, handleRadioButton }: { radioButton: number, handleRadioButton: (value: number) => void }) => {
    return (
        <RadioGroup value={radioButton} onChange={handleRadioButton}>
            <div >
                {sizes.map((size, i) => (
                    <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                            `${active ? 'ring-2 ring-white/60 ring-offset-2  border' : ''}
                    ${checked ? 'bg-[#F5F5F5] ' : 'bg-white  border'}
                    relative flex cursor-pointer rounded-sm px-5 py-4 shadow-sm focus:outline-none border`
                        }
                    >
                        {({ active, checked }) => (
                            <>
                                <div className="flex w-full items-center text-gray-950 justify-between">
                                    <div className="mr-6 flex">
                                        <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${checked ? '' : 'text-gray-900'
                                                } w-28`}
                                        >
                                            {size.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description>
                                            {size.size}
                                        </RadioGroup.Description>
                                    </div>
                                    {checked ? (
                                        <div className="shrink-0 text-green-700">
                                            <FaCheckCircle className="h-6 w-6" />
                                        </div>
                                    ) : <div></div>}
                                </div>
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default RadioSizes