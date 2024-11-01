import {
  CardCarouselContainer,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  WrapperContainer,
} from "@/components/shared";
import { CarouselDots } from "@/components/shared/CustomCarousel";

const Explore = () => {
  return (
    <WrapperContainer>
      <CardCarouselContainer
        title="Explore our wide variety of categories"
        subTitle="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      />
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 5,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 100 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
              <div className="p-1 text-black w-full h-[100px] bg-white">
                {index + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots dotCount={4} />
      </Carousel>
    </WrapperContainer>
  );
};

export default Explore;
