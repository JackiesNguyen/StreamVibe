import { cn } from '@/lib/utils'

interface IWrapperContainerProps {
  className?: string
  children?: React.ReactNode
}

const WrapperContainer = ({ className, children }: IWrapperContainerProps) => {
  return <div className={cn('xl:px-40 sm:px-20 px-4', className)}>{children}</div>
}

export default WrapperContainer
