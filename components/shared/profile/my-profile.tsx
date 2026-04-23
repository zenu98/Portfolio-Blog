import Image from "next/image";
import Highlight from "./highlight";
import { getTechsByType } from "@/lib/actions/product.actions";

const MyProfile = async () => {
  const tech = await getTechsByType();

  const typeNames: Record<string, string> = {
    LANGUAGE: "💬 언어",
    WEB: "🌐 웹",
    MOBILE: "📱 모바일",
    STATE_MANAGEMENT: "🔄 상태관리",
    STYLING: "🎨 스타일링",
    BACKEND: "⚙️ 백엔드",
  };

  const typeOrder = [
    "LANGUAGE",
    "WEB",
    "MOBILE",
    "STATE_MANAGEMENT",
    "STYLING",
    "BACKEND",
  ];

  return (
    <div className="page-container flex flex-col w-full min-h-120 gap-8 bg-[#f8d058]">
      <div>
        <h1 className="h2-responsive font-bold flex items-center gap-3 border-b-2 border-gray-200 dark:border-gray-400 py-4">
          📚 자기소개
        </h1>

        <div className="space-y-4 py-4 ">
          <p className="leading-relaxed whitespace-pre-wrap dark:text-gray-100">
            안녕하십니까. 저는 스타트업에서 8개월 가량{" "}
            <Highlight>실무경험</Highlight>이 있는 프론트엔드 개발자입니다.
            <br />
            실무에서 몇가지 <Highlight>핵심프로젝트</Highlight>를 맡은 바
            있으며, 프론트엔드 개발을 전담하여 책임지어 프로젝트를 진행한 경험을
            가지고 있습니다.
          </p>

          <p className="leading-relaxed dark:text-gray-100">
            신입개발자로 입사했지만 실무에 들어가고나서는 그 이상을 해내려고
            항상 노력해왔습니다.
            <br />
            저는 프론트엔드 개발을 할 때 유저친화적인{" "}
            <Highlight>UI/UX</Highlight>를 구현하는 것을 목표로 하며 그 과정에
            있어서 <Highlight>코드품질과 성능</Highlight>을 올리는 것을 중요하게
            생각합니다.
            <br />
            이러한 생각을 가진 이유는 스타트업이라는 회사 특징 상 시간과의
            싸움을 했던 프로젝트들이 상당히 많았고 이를 위해 많은 실패와 경험을
            겪었기 때문입니다. 이를 위해 동료개발자 뿐만이 아니라{" "}
            <Highlight>디자인 팀</Highlight>
            과도 적극적으로 커뮤니케이션 하여 반복되는 작업과 비효율적인
            프로세스 구조 등을 다같이 개선해 나가는 작업을 했습니다.
          </p>

          <p className="leading-relaxed dark:text-gray-100">
            구체적으로는 <Highlight>여행대로</Highlight> 라는 여행관련 플랫폼의
            개발 및 유지보수에 참여했습니다.
            <br />
            처음 입사했을 때 기존 앱의 UI는 엄지손가락 만한 크기 안에 여러
            버튼이 있고 각 화면이 너무 복잡하게 얽혀있는 구조였습니다.
            <br />
            이와 관련하여 디자인팀과 동료 개발자들과의 회의를 통하여{" "}
            <Highlight>전체적인 UI 개편 작업을 주도</Highlight>하여 성공적으로
            진행했습니다.
            <br />
            이어서 앱의 중요 서비스인 앱 내{""} <Highlight>채팅 기능</Highlight>
            과 소셜로그인 등의 추가기능, 코드 개선, 성능 최적화 등을 맡아
            개발하였습니다.
            <br />
            이후 회사의 새 프로젝트를 단독으로 담당하여{" "}
            <Highlight>한달의 시간안에</Highlight> 외식리뷰 플랫폼을 개발하여
            서비스 한 경험으로 이어지게 되었습니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {/* 학력 */}
        <div className="flex flex-col sm:flex-row gap-4  ">
          <div className="space-y-4 flex-1/2">
            <h2 className="h2-responsive font-bold flex items-center gap-3">
              📚 학력
            </h2>
            <div className="border border-gray-200 dark:border-none  dark:bg-[oklch(0.208_0.042_265.755)]  rounded-lg p-6 space-y-3">
              <h3 className="h3-responsive font-semibold">
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
          <div className="space-y-4 flex-1/2 ">
            <h2 className="h2-responsive font-bold flex items-center gap-3">
              🏢 인적정보
            </h2>
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

        {/* 경력 */}
        <div className="space-y-4">
          <h2 className="h2-responsive font-bold flex items-center gap-3">
            💼 경력
          </h2>
          <div className="border border-gray-200 dark:border-none sm:max-w-1/2 dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg p-6">
            <div className="flex  items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-[oklch(25%_0.02_247.896)] rounded-full"></div>
              <span className="text-responsive">
                데이터랩스 : 2024.06 ~ 2025.01
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="h2-responsive font-bold flex items-center gap-3">
            💼 기술
          </h2>
          <div className="border border-gray-200 dark:border-none sm:max-w-1/2 dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg p-6">
            <div className="flex  items-center gap-3 mb-2">
              <div className="w-3 h-3"></div>
              <div className="space-y-6">
                {typeOrder.map((type) => {
                  const items = tech[type];
                  if (!items || items.length === 0) return null;

                  return (
                    <div key={type}>
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        {type}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {items.map((item: any) => (
                          <div
                            key={item.id}
                            className="flex flex-col items-center"
                          >
                            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-600 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-110 cursor-pointer">
                              <Image
                                src={item.icon}
                                alt={item.name}
                                width={50}
                                height={50}
                              />
                            </div>
                            <div className="text-center text-xs mt-1">
                              {item.name.split(" ").map((word, index) => (
                                <div key={index}>{word}</div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
