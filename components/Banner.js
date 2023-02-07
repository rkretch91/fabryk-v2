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
          className="w-6/6 visible absolute bottom-16 z-10 dark:invisible sm:bottom-40 md:bottom-80 lg:bottom-16 lg:w-5/6 xl:-bottom-4 xl:w-4/6"
        />
        <Image
          src="/static/images/banner/pizza.png"
          alt="pizza"
          width={700}
          height={700}
          className="visible absolute -bottom-16 -right-24 z-50 dark:invisible sm:bottom-16 sm:-right-16 sm:w-4/6 lg:-bottom-40 lg:w-3/6 xl:-bottom-44 xl:left-0 xl:w-2/6"
        />
        <Image
          src="/static/images/banner/train.png"
          alt="train"
          width={1300}
          height={1300}
          className="xs:invisible invisible absolute -bottom-16 right-0 z-30 w-4/6 dark:invisible sm:invisible md:invisible lg:invisible xl:visible"
        />
        <Image
          src="/static/images/banner/tree.png"
          alt="tree"
          width={1000}
          height={1000}
          className="sm:z-5 sm:w-6/6 visible absolute -right-20 dark:invisible sm:bottom-80 sm:z-0 md:bottom-96 md:z-0 md:w-5/6 lg:bottom-16 lg:z-20 lg:w-3/6"
        />
        <Image
          src="/static/images/banner/us.png"
          alt="us"
          width={500}
          height={500}
          className="xs:w-1/3 visible absolute top-16 z-50 w-4/6 dark:invisible sm:left-64 sm:top-60 sm:w-3/6 md:left-28 lg:top-0 lg:w-2/4 xl:top-0 xl:w-1/4"
        />
      </>
      <>
        <Image
          src="/static/images/banner/church.png"
          alt="church"
          width={1200}
          height={1200}
          className="w-6/6 invisible absolute bottom-0 z-10 dark:visible lg:w-5/6 xl:w-4/6"
        />
        <Image
          src="/static/images/banner/pizza-fritta.png"
          alt="pizza-fritta"
          width={700}
          height={700}
          className="invisible absolute -bottom-16 -left-24 z-50 w-4/6 dark:visible sm:-bottom-32 sm:-right-16 sm:w-4/6 md:w-3/6 lg:-bottom-40 lg:w-3/6 xl:-bottom-44 xl:left-0 xl:w-2/6"
        />
        <Image
          src="/static/images/banner/sign.png"
          alt="sign"
          width={500}
          height={500}
          className="invisible absolute z-30 w-4/6 dark:visible md:w-2/6 xl:w-1/6"
        />
        <Image
          src="/static/images/banner/spacesuit.png"
          alt="spacesuit"
          width={300}
          height={300}
          className="invisible absolute -top-16 right-0 z-50 w-2/6 dark:visible md:w-2/6 lg:left-64 xl:right-96 xl:left-auto xl:w-2/6"
        />
        <Image
          src="/static/images/banner/us-night.png"
          alt="us-night"
          width={500}
          height={500}
          className="xs:w-1/3 invisible absolute top-16 -right-4 z-40 w-4/6 dark:visible sm:top-60 sm:w-3/6 lg:top-auto lg:bottom-0 xl:bottom-0 xl:w-2/6 xl:w-1/4"
        />
      </>
    </div>
  )
}
