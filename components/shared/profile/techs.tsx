import { getTechsByType } from "@/lib/actions/product.actions";
import Image from "next/image";
import TextAnimation from "../text-animaition";

const typeOrder = [
  "LANGUAGE",
  "WEB",
  "MOBILE",
  "STATE_MANAGEMENT",
  "STYLING",
  "BACKEND",
];
const Techs = async () => {
  const tech = await getTechsByType();
  const allItems = typeOrder.flatMap((type) => tech[type] ?? []);

  return (
    <div className="flex flex-col page-container bg-[#8e9487] w-full items-center h-svh">
      <div className="flex flex-col sm:flex-row  pb-4 flex-[4] w-[96%] border-b-1  border-white/30">
        <TextAnimation />
        <div className="flex flex-1 leading-loose text-responsive   text-white font-bold whitespace-pre-line justify-start items-end sm:pl-8 sm:py-12 py-8">
          {`TypeScript 기반의 React / Next.js 웹 개발과
React Native 모바일 개발 경험을 보유하고 있습니다.
스타일링은 Tailwind CSS와 Styled-Components,
상태관리는 Tanstack Query와 Zustand를 주로 활용합니다.
          `}
        </div>
      </div>
      <div className="flex flex-1 overflow-x-auto items-center justify-center  [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center justify-center pr-8 gap-8 animate-[carousel_18s_linear_infinite] ">
          {allItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-[0_0_4em] h-16 sm:flex-[0_0_6em] sm:h-24 lg:flex-[0_0_8em] lg:h-32 2xl:flex-[0_0_10em] 2xl:h-40"
            >
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain py-4"
              />
            </div>
          ))}
        </div>
        <div
          aria-hidden
          className="flex items-center justify-center pr-8 gap-8 animate-[carousel_18s_linear_infinite] "
        >
          {allItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-[0_0_4em] h-16 sm:flex-[0_0_6em] sm:h-24 lg:flex-[0_0_8em] lg:h-32 2xl:flex-[0_0_10em] 2xl:h-40"
            >
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain py-4"
              />
            </div>
          ))}
        </div>
        <div
          aria-hidden
          className="flex items-center justify-center pr-8 gap-8 animate-[carousel_18s_linear_infinite] "
        >
          {allItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-[0_0_4em] h-16 sm:flex-[0_0_6em] sm:h-24 lg:flex-[0_0_8em] lg:h-32 2xl:flex-[0_0_10em] 2xl:h-40"
            >
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain py-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techs;
