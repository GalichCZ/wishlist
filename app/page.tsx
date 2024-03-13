import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Card } from '@/components/card'
import list from '../public/items.json'
import { HeadingText } from '@/components/heading-text'

export default function Home() {
  const items = list.wishItems
  return (
    <main className="">
      <TracingBeam className="px-6">
        <HeadingText />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ id, name, price, image, description, link, currency }) => (
            <Card
              key={id}
              id={id}
              name={name}
              price={price}
              image={image}
              description={description}
              link={link}
              currency={currency}
            />
          ))}
        </div>
      </TracingBeam>
    </main>
  )
}
