'use client'

import Image from 'next/image'
import React, { FC } from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { formatToPrice } from '@/utils/formatNumber'

interface Props {
  id: number
  name: string
  price: number
  image: string
  description: string
  link: string
  currency: string
}

export const Card: FC<Props> = ({ id, name, price, image, description, link, currency }) => {
  return (
    <CardContainer key={id} className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="span"
            className="px-4 py-2 rounded-xl text-black text-xs font-normal"
          >
            {formatToPrice(price, currency)}
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Look
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
