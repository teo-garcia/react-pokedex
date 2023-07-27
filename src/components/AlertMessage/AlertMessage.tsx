import { FaInfoCircle } from 'react-icons/fa'

export type AlertMessageProps = {
  message: string
}

const AlertMessage = (props: AlertMessageProps) => {
  const { message } = props
  return (
    <div className="flex w-10/12 flex-col items-center justify-center gap-y-8 text-center md:w-7/12 lg:py-28 xl:w-6/12">
      <FaInfoCircle className="h-16 w-16 text-yellow-400 md:h-24 md:w-24" />
      <h2 className="text-4xl font-bold dark:text-white md:text-5xl xl:text-6xl">
        {message}
      </h2>
    </div>
  )
}

export { AlertMessage }
