import Image from "next/image";

const IntroPage = () => {
  return (
    <div className="flex flex-col sm:flex-row page-container bg-[#8498ac] w-full min-h-svh">
      <div className="flex flex-col flex-1  border-r-1 border-white/30 p-4 gap-6">
        <Image
          src="/images/me.jpg"
          alt="123"
          width={177 * 1}
          height={236 * 1}
        />
        <div className="text-white">
          <div className="flex flex-col gap-1 mb-8">
            <span className="text-2xl font-bold">
              소프트웨어공학 / 디지털컨텐츠 학사
            </span>
            <span className="font-semibold">2023년 08월 졸업</span>
            <span className="font-semibold">성공회대학교 - 서울특별시</span>
            <span className="font-semibold">
              데이터랩스 : 2024.06 ~ 2025.01
            </span>
          </div>
          <div className="space-y-4 w-4/5 ">
            <div className="border border-gray-200 dark:border-none dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-medium min-w-[80px]">생년월일 :</span>
                  <span className="">1998.07.05</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium min-w-[80px]">전화번호 :</span>
                  <span className="">010-7363-2820</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium min-w-[80px]">이메일 :</span>
                  <span className="">zenu987@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1  flex flex-col px-4">
        <div className="leading-none font-black flex-1 tracking-wide h-auto font-english border-b-1 border-white/30 text-[200px] text-black ">
          <p>INTRO</p>
        </div>
        <div className="flex flex-1 text-right justify-end items-center">
          <div className="py-8">
            <p className="text-white text-responsive font-bold leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
              웹, 모바일 등 다양한 프로젝트와 스타트업 경험이 있는 프론트엔드
              개발자입니다.
            </p>

            <p className=" text-white font-bold text-responsive leading-loose animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 whitespace-pre-line">
              {`실무 기간 동안 여행 플랫폼 앱 운영 및 실시간 채팅 시스템 구축
                외식 리뷰 플랫폼 구현 및 운영 등 
                다양한 프론트엔드 프로젝트를 성공적으로 완수했습니다.
      새로운 기술을 배우고 실무에 적용하는 것을 즐기며, 팀과의 원활한
            협업을 통해 더 나은 결과물을 만들어내는 것을 추구합니다.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
