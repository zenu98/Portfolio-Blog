const projectData = {
  projects: [
    {
      title: "여행대로 - 국내여행 플랫폼",
      slug: "tourapp",
      images: [
        "/images/projects/tourapp/tourappThumbnail.png",
        "/images/projects/tourapp/main.jpeg",
        "/images/projects/tourapp/chat.jpeg",
        "/images/projects/tourapp/chatopen.jpeg",
        "/images/projects/tourapp/chatdm.jpeg",
        "/images/projects/tourapp/profile.jpeg",
        "/images/projects/tourapp/stepcounter.jpeg",
      ],
      period: "2024.06 ~ 2025.01",
      personnel: "프론트 2명, 백엔드 2명",
      skills: ["React Native", "React Query", "Styled Component"],
      type: "main",
      additionalInfo: {
        Android:
          "https://play.google.com/store/apps/details?id=com.datatourapp",
        Ios: "https://apps.apple.com/kr/app/여행대로-여행정보-여행일정-동행모집-이미지마켓/id6458978344",
      },
      content: `
        여행대로 채팅 기능 단독 개발

- Socket.io를 통한 오픈채팅(단체채팅), 개인채팅 구현
- 채팅방 기록 리스트 구현
- SSE를 통한 채팅방 메세지 알림 구현
- 딥링크를 통한 채팅 메세지 수신시 푸시알림 기능 구현
- 채팅방 내 일정추가,변경 신고하기 기능 구현

실시간 통신을 이용한 채팅시스템을 개발하였습니다. Socket.io를 이용한 첫 개발이었고 채팅이라는 시스템에는 수많은 기능들이 내재되어 있어 가장 힘들었지만 보람찬 개발이었습니다. 

처음 만났던 문제로는 메시지 수신 방식이었습니다. FlatList로 메시지를 받아야 하는데 채팅은 가장 최신 메시지가 리스트의 마지막에 오는 형식입니다. 이를 어떻게 해결할까 고민해본 결과 FlatList에 inverted를 사용하여 역순으로 정렬하고 contentContainerStyle로 flexDirection: 'column-reverse'을 설정하여 가장 최신 메시지를 밑으로 나타내게 하였습니다. 

그 다음 문제는 이전 대화 내역을 불러오는 기능이었습니다. 채팅에서는 당연한 기능이지만 참여했던 팀원들 모두 정확하게 타사에서 어떻게 채팅 로직을 구현했는지 알 방법이 없어서 많이 고민했습니다. 그 결과로 저희는 첫 채팅방 입장시에는 Socket이 아닌 기본적인 데이터 페칭방식으로 일정 개수의 이전 대화내역을 불러오고 그 이후부터는 실시간통신을 이용하는 방법을 채택하였습니다.

그 외에도 단체채팅방의 읽음 카운트 처리, 입장/퇴장 메시지, 공지, 사용자 차단/강퇴, 방장기능 등등 채팅이라는 이름 하에 필요한 기능들은 대부분 구현하였습니다.

채팅시스템을 개발하면서 저는 신입개발자로서 소위 ‘정석’이라고 불러야 할 또는 대기업에서 실제로 어떤 방식으로 코드를 짜서 개발하고있는지 알 방법이 없어서 정말 시행착오도 많았고 배워간 것도 많은 개발경험을 한 것 같습니다.
      `,
    },
    {
      title: "포스팅나우 - 외식 리뷰 플랫폼",
      slug: "posting-now",
      images: [
        "/images/projects/postingnow/main.png",
        "/images/projects/postingnow/full.png",
        "/images/projects/postingnow/content.png",
        "/images/projects/postingnow/upload.png",
        "/images/projects/postingnow/mypage.png",
        "/images/projects/postingnow/auth.png",
        "/images/projects/postingnow/pay.png",
      ],
      period: "2024.09.05 ~ 2024.09.25",
      personnel: "프론트 1명, 백엔드 1명",
      skills: [
        "React.js",
        "Tanstack Query",
        "React Hook Form",
        "Styled Component",
      ],
      type: "main",
      additionalInfo: {
        Link: "https://postingnow.co.kr/",
      },
      content: `
      한달 안에 운영가능한 웹사이트를 개발하는 프로젝트였습니다. 메인 페이지는 슬라이드 형식의 이미지 리스트와 캐러셀 형식의 광고 배너가 있는 구조로 설계되었습니다.

      Figma를 통해 전체적인 웹사이트 구조를 분석한 결과, 슬라이드 형식의 이미지 리스트가 여러 곳에서 재사용되는 것을 확인했고, 개발 시간을 단축하기 위해 이 리스트를 컴포넌트화하여 빠르게 작업할 수 있도록 했습니다. 
      
      또한 반응형 웹사이트였기에 Grid를 활용해 해상도별로 이미지 리스트의 개수가 자동으로 조정되도록 구현했습니다.

      이 프로젝트는 프론트엔드 작업을 처음부터 끝까지 단독으로 맡았고 개발 기간도 짧았기 때문에, 빠르고 효율적인 구현 방법에 가장 많은 고민을 했습니다. 동시에 실제 운영이 바로 시작되어야 했기에 완성도 역시 중요했습니다. 
      
      40개 이상의 API 통신과 즉각적인 피드백이 필요한 웹사이트였기에 Tanstack Query를 활용해 서버-클라이언트 데이터를 효과적으로 관리했습니다. 회원가입 폼은 React-Hook-Form을 사용하여 유효성 검사와 렌더링 최적화를 통해 개발 기간을 단축했습니다. 무엇보다 컴포넌트화에 중점을 두어 코드 재사용성을 높임으로써 프로젝트를 성공적으로 완료했습니다.
      `,
    },
    {
      title: "상속재산분할협의서 작성사이트",
      slug: "inheritance-agreement",
      images: [
        "/images/projects/inheritance/cover.png",
        "/images/projects/inheritance/example1.png",
        "/images/projects/inheritance/example2.png",
        "/images/projects/inheritance/example3.png",
        "/images/projects/inheritance/postcode.png",
      ],
      period: "2024.11",
      personnel: "프론트 1명",
      skills: ["ReactJS", "Vite", "React Hook Form", "Zustand"],
      type: "main",
      additionalInfo: {
        Link: "https://inheritance.kro.kr/",
      },
      content: `
      변호사 법인에서 상속재산 분할 협의에 관한 복잡한 계산식을 간단하게 작성할 수 있도록 하는 사이트를 요청받아 단독으로 개발하게 되었습니다.

복잡한 폼 형식과 엄격한 유효성 검사가 들어가야 하는 사이트이기 때문에 본격적으로 React-Hook-Form을 사용한 프로젝트 입니다. 이전에 작성한 폼을 기반으로 협의서 양식을 작성하여 인쇄할 수 있게 하였습니다.
이 웹사이트는 서버와의 통신과 관계없이 클라이언트 데이터만으로 구성된 프로젝트입니다. 상속재산분할에 대한 복잡한 로직을 쉽게 계산하기 위해 의뢰받은 사이트로 이전 데이터가 다음 협의서 작성에 영향을 미치는 방식입니다. 그래서 Zustand를 이용하여 클라이언트 측 상태관리를 했으며 대부분의 형식이 폼으로 구성되어 있어 본격적으로 React-Hook-Form을 깊이 공부하고 적용하는데 좋았던 프로젝트 였습니다.

또한 재산에 관련된 사항이기 때문에 계산로직에 문제가 있으면 안됐고 상속자,재산유형 등에 따라서 복잡한 계산이 필요하여 몇번이나 검토하면서 개발을 했던 프로젝트였습니다. 또한 협의서를 출력하는 기능이 있어야 했는데 처음에는 pdf 관련 라이브러리들을 찾아보았는데 관련 라이브러리에 심각한 버그가 있어 사용하는데 부적합하다고 판단하여 @media print 기능을 이용하여 출력/인쇄 기능을 구현하였습니다.
      `,
    },
    {
      title: "게임플래너 - 게임 출시일정 소개 플랫폼",
      slug: "gameplanner",
      images: [
        "/images/projects/gameplanner/splashscreen.jpg",
        "/images/projects/gameplanner/full.gif",
        "/images/projects/gameplanner/main.jpg",
        "/images/projects/gameplanner/adventure.jpg",
        "/images/projects/gameplanner/category.jpg",
        "/images/projects/gameplanner/detail1.jpg",
        "/images/projects/gameplanner/detail2.jpg",
      ],
      period: "2024.03 ~ 2024.04",
      personnel: "프론트 1명, 백엔드 1명",
      skills: [
        "React Native",
        "Redux Toolkit",
        "React Query",
        "Typescript",
        "Expo",
      ],
      type: "main",
      additionalInfo: {},
      content: "",
    },
    {
      title: "Project AA",
      slug: "ProjectAA",
      images: [
        "/images/projects/aa/project-aa-main.gif",
        "/images/projects/aa/project-aa-detail.gif",
        "/images/projects/aa/project-aa-price.gif",
        "/images/projects/aa/project-aa-animation.gif",
      ],
      period: "2023.06",
      personnel: "1인",
      skills: ["ReactJS"],
      type: "side",
      additionalInfo: {},
      content: "",
    },
    {
      title: "캡스톤디자인 프로젝트",
      slug: "Capstone",
      images: [
        "/images/projects/capstone/capstone-design-main.gif",
        "/images/projects/capstone/capstone-design-d1.gif",
        "/images/projects/capstone/capstone-design-d2.gif",
        "/images/projects/capstone/capstone-design-d3.gif",
      ],
      period: "2023.06",
      personnel: "1인",
      skills: ["NextJS"],
      type: "side",
      additionalInfo: {},
      content: "",
    },
    {
      title: "포켓몬스터 상성 계산기",
      slug: "pokemon",
      images: [
        "/images/projects/pokemon/full.gif",
        "/images/projects/pokemon/open.gif",
        "/images/projects/pokemon/first.png",
        "/images/projects/pokemon/second.png",
        "/images/projects/pokemon/third.png",
        "/images/projects/pokemon/result.png",
      ],
      period: "2023.03",
      personnel: "1인",
      skills: ["ReactJS"],
      type: "side",
      additionalInfo: {},
      content: "",
    },
    {
      title: "동물단어 퍼즐",
      slug: "puzzle",
      images: [
        "/images/projects/puzzle/first.gif",
        "/images/projects/puzzle/second.gif",
        "/images/projects/puzzle/third.gif",
        "/images/projects/puzzle/firebase.png",
      ],
      period: "2023.03",
      personnel: "1인",
      skills: ["ReactJS"],
      type: "side",
      additionalInfo: {},
      content: "",
    },
  ],
};

export default projectData;
