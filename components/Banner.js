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
          <Image src="/static/images/banner/pizza.png" alt="pizza" width={500} height={500} />
          <Image src="/static/images/banner/train.png" alt="train" width={500} height={500} />
          <Image src="/static/images/banner/tree.png" alt="tree" width={500} height={500} />
          <Image src="/static/images/banner/us.png" alt="us" width={500} height={500} />
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
