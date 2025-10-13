import { TechType } from "@/lib/generated/prisma";
const tech = {
  techs: [
    {
      name: "JavaScript",
      icon: "/images/icons/javascript.png",
      type: TechType.LANGUAGE,
      order: 1,
    },
    {
      name: "TypeScript",
      icon: "/images/icons/typescript.png",
      type: TechType.LANGUAGE,
      order: 2,
    },

    // WEB
    {
      name: "ReactJS",
      icon: "/images/icons/react.png",
      type: TechType.WEB,
      order: 1,
    },
    {
      name: "NextJs",
      icon: "/images/icons/nextjs.png",
      type: TechType.WEB,
      order: 2,
    },

    // MOBILE
    {
      name: "React Native",
      icon: "/images/icons/react-native.png",
      type: TechType.MOBILE,
      order: 1,
    },
    {
      name: "Expo",
      icon: "/images/icons/expo.png",
      type: TechType.MOBILE,
      order: 2,
    },

    // STATE_MANAGEMENT
    {
      name: "React Query",
      icon: "/images/icons/react-query.png",
      type: TechType.STATE_MANAGEMENT,
      order: 1,
    },
    {
      name: "Redux Toolkit",
      icon: "/images/icons/rtk.png",
      type: TechType.STATE_MANAGEMENT,
      order: 2,
    },
    {
      name: "Zustand",
      icon: "/images/icons/zustand.svg",
      type: TechType.STATE_MANAGEMENT,
      order: 3,
    },

    // STYLING
    {
      name: "Tailwind",
      icon: "/images/icons/tailwind.png",
      type: TechType.STYLING,
      order: 1,
    },
    {
      name: "Styled Components",
      icon: "/images/icons/styled-components.png",
      type: TechType.STYLING,
      order: 2,
    },
    {
      name: "ShadCN",
      icon: "/images/icons/shadcn.png",
      type: TechType.STYLING,
      order: 3,
    },

    // BACKEND
    {
      name: "Firebase",
      icon: "/images/icons/firebase.png",
      type: TechType.BACKEND,
      order: 1,
    },
    {
      name: "Prisma",
      icon: "/images/icons/prisma.jpg",
      type: TechType.BACKEND,
      order: 2,
    },
    {
      name: "NeonDB",
      icon: "/images/icons/neondb.png",
      type: TechType.BACKEND,
      order: 3,
    },
    {
      name: "Vercel",
      icon: "/images/icons/vercel.png",
      type: TechType.BACKEND,
      order: 4,
    },
  ],
};

export default tech;
