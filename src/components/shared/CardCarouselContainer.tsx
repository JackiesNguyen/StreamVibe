interface ICardCarouselContainerProps {
  title?: string;
  subTitle?: string;
}

const CardCarouselContainer = ({
  title,
  subTitle,
}: ICardCarouselContainerProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[14px]">
          <h2 className="text-white text-[38px] not-italic font-bold leading-[57px]">
            {title}
          </h2>
          <p className="text-grey-60 text-lg not-italic font-normal leading-[27px]">
            {subTitle}
          </p>
        </div>
        <div>Cai nay button next </div>
      </div>
    </div>
  );
};

export default CardCarouselContainer;
