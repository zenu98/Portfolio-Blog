import Image from "next/image";

const MyProfile = () => {
  return (
    <div className=" wrapper flex flex-col w-full min-h-120 gap-8">
      <div className="justify-start">
        <Image src="/images/logo.svg" alt="123" width={300} height={300} />
      </div>
      <div className="pt-6 pb-6  dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg">
        <p
          className=" text-lg font-medium leading-relaxed whitespace-pre-line
        border-t-4 pt-6 sm:border-t-0 sm:border-l-4 sm:pt-0 sm:pl-6 sm:border-gray-400"
        >
          {`React를 중심으로 웹,모바일 등의 다양한 프로젝트와 스타트업 경험이 있는 개발자 입니다.
책임감 있는 프론트엔드 개발자가 되기 위해 끊임없이 노력하고 있습니다.
디지털컨텐츠 학부를 복수전공하여 디자인 감각을 가지고 사용자 경험에 맞추어 
알맞은 UX/UI 구현을 중요하게 생각하고 있습니다.`}
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {/* 학력 */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="space-y-4 flex-1/2">
            <h2 className=" text-2xl font-bold flex items-center gap-3">
              📚 학력
            </h2>
            <div className="border border-gray-200 dark:border-none  dark:bg-[oklch(0.208_0.042_265.755)]  rounded-lg p-6 space-y-3">
              <h3 className=" text-xl font-semibold">
                소프트웨어공학 / 디지털컨텐츠 학사
              </h3>
              <div className="flex items-center gap-4 ">
                <span className="flex items-center gap-2">
                  ➕ 2023년 08월 졸업
                </span>
              </div>
              <p className="">성공회대학교 - 서울특별시</p>
            </div>
          </div>

          {/* 인적정보 */}
          <div className="space-y-4 flex-1/2">
            <h2 className=" text-2xl font-bold flex items-center gap-3">
              🏢 인적정보
            </h2>
            <div className="border border-gray-200 dark:border-none dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-medium min-w-[80px]">생년월일:</span>
                  <span className="">1998.07.05</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium min-w-[80px]">전화번호:</span>
                  <span className="">010-7363-2820</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium min-w-[80px]">이메일:</span>
                  <span className="">zenu987@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 경력 */}
        <div className="space-y-4">
          <h2 className=" text-2xl font-bold flex items-center gap-3">
            💼 경력
          </h2>
          <div className="border border-gray-200 dark:border-none sm:max-w-1/2 dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg p-6">
            <div className="flex  items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-[oklch(25%_0.02_247.896)] rounded-full"></div>
              <span className=" font-semibold text-lg">
                데이터랩스 : 2024.06 ~ 2025.01
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
