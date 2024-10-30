import { cn } from "@/lib/utils";

interface IWrapperContainerProps {
  className?: string;
  children: React.ReactNode;
}
const WrapperContainer = ({ className, children }: IWrapperContainerProps) => {
  return (
    <div className={cn("px-[15px] sm:px-20 2xl:px-[162px]", className)}>
      {children}
    </div>
  );
};

export default WrapperContainer;
