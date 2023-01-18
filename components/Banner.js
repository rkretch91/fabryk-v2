import { useTheme } from 'next-themes'
import Image from './Image'

export default function Banner() {
  const { theme, resolvedTheme } = useTheme()
  const isDarkTheme = theme === 'dark' || resolvedTheme === 'dark'

  return (
    <div className="home-banner relative space-y-2 pt-6 pb-8 md:space-y-5">
      {!isDarkTheme ? (
        <>
          <Image
            src="/static/images/banner/bunker.png"
            alt="bunker"
            width={1200}
            height={1200}
            className="absolute -bottom-20 left-0"
          />
          <Image
            src="/static/images/banner/pizza.png"
            alt="pizza"
            width={700}
            height={700}
            className="absolute -bottom-44 z-50"
          />
          <Image
            src="/static/images/banner/train.png"
            alt="train"
            width={1300}
            height={1300}
            className="absolute -bottom-20 right-0 z-30"
          />
          <Image
            src="/static/images/banner/tree.png"
            alt="tree"
            width={1000}
            height={1000}
            className="absolute right-0 -bottom-5 z-20"
          />
          <Image
            src="/static/images/banner/us.png"
            alt="us"
            width={500}
            height={500}
            className="absolute top-0 left-96 z-50"
          />
        </>
      ) : (
        <>
          <Image src="/static/images/banner/church.png" alt="church" width={500} height={500} />
          <Image
            src="/static/images/banner/pizza-fritta.png"
            alt="pizza-fritta"
            width={500}
            height={500}
          />
          <Image src="/static/images/banner/sign.png" alt="sign" width={500} height={500} />
          <Image
            src="/static/images/banner/spacesuit.png"
            alt="spacesuit"
            width={500}
            height={500}
          />
          <Image src="/static/images/banner/us-night.png" alt="us-night" width={500} height={500} />
          <Image
            src="/static/images/banner/aperitivo.png"
            alt="aperitivo"
            width={500}
            height={500}
          />
        </>
      )}
    </div>
  )
}
