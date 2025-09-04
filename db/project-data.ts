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
      type: "side",
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
        "/images/sample-products/p1-1.jpeg",
        "/images/sample-products/p1-2.jpg",
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
        link: "https://postingnow.co.kr/",
      },
      content: "",
    },
    {
      title: "상속재산분할협의서 작성사이트",
      slug: "inheritance-agreement",
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg",
      ],
      period: "2024.11",
      personnel: "프론트 1명",
      skills: ["ReactJS", "Vite", "React Hook Form", "Zustand"],
      type: "main",
      additionalInfo: {
        link: "https://inheritance.kro.kr/",
      },
      content: "",
    },
  ],
};

export default projectData;
