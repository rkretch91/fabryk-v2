import { useTheme } from 'next-themes'
import Image from './Image'

export default function Banner() {
  return (
    <div className="home-banner relative space-y-2 pt-6 pb-8 md:space-y-5">
      <>
        <Image
          src="/static/images/banner/bunker.png"
          alt="bunker"
          width={1200}
          height={1200}
          loading="eager"
          className="w-6/6 absolute bottom-10 z-10 block dark:hidden sm:bottom-0 lg:w-5/6 xl:w-4/6"
        />
        <Image
          src="/static/images/banner/pizza.png"
          alt="pizza"
          width={700}
          height={700}
          loading="eager"
          className="absolute -bottom-10 left-0 z-50 block w-4/6 dark:hidden sm:-bottom-40 sm:bottom-16 sm:w-4/6 lg:w-3/6 xl:w-2/6"
        />
        <Image
          src="/static/images/banner/cat.png"
          alt="train"
          width={1300}
          height={1300}
          loading="eager"
          className="absolute top-0 right-0 z-10 block w-3/6 dark:hidden lg:right-64 lg:top-auto lg:bottom-0 lg:w-2/6"
        />
        <Image
          src="/static/images/banner/tree.png"
          alt="tree"
          width={1000}
          height={1000}
          loading="eager"
          className="sm:z-5 sm:w-6/6 absolute -left-20 bottom-56 block dark:hidden sm:left-auto sm:-right-20 sm:bottom-80 sm:z-0 md:bottom-96 md:z-0 md:w-5/6 lg:bottom-16 lg:z-20 lg:w-3/6"
        />
        <Image
          src="/static/images/banner/us.png"
          alt="us"
          width={500}
          height={500}
          loading="eager"
          className="absolute bottom-0 right-0 z-40 block w-4/6 dark:hidden sm:w-1/5 lg:top-auto"
        />
      </>
      <>
        <Image
          src="/static/images/banner/church.png"
          alt="church"
          width={1200}
          height={1200}
          loading="eager"
          className="w-6/6 absolute bottom-0 z-10 hidden dark:block lg:w-5/6 xl:w-4/6"
        />
        <Image
          src="/static/images/banner/pizza-fritta.png"
          alt="pizza-fritta"
          width={700}
          height={700}
          loading="eager"
          className="absolute -bottom-8 -left-24 z-40 hidden w-4/6 dark:block sm:-bottom-32 sm:-right-16 sm:w-4/6 md:w-3/6 lg:-bottom-40 lg:w-3/6 xl:-bottom-44 xl:left-0 xl:w-2/6"
        />
        <Image
          src="/static/images/banner/sign.png"
          alt="sign"
          width={500}
          height={500}
          loading="eager"
          className="absolute z-30 hidden w-4/6 dark:block md:w-2/6 xl:w-1/6"
        />
        <Image
          src="/static/images/banner/spacesuit.png"
          alt="spacesuit"
          width={300}
          height={300}
          loading="eager"
          className="absolute top-0 right-0 z-50 hidden w-2/6 dark:block lg:right-64 xl:left-auto xl:w-2/6"
        />
        <Image
          src="/static/images/banner/us-night.png"
          alt="us-night"
          width={500}
          height={500}
          loading="eager"
          className="absolute bottom-0 right-0 z-40 hidden w-3/6 dark:block sm:w-1/5 lg:top-auto"
        />
      </>
    </div>
  )
}
