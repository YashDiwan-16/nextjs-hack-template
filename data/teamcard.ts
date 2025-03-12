export type SocialLinkType = 'linkedin' | 'twitter' | 'github' | 'instagram';

export interface SocialLink {
  type: SocialLinkType;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  socialLinks: SocialLink[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Blockchain visionary with 10+ years in fintech. Previously led innovation at Ethereum Foundation.",
    imageSrc: "/team/member1.jpg",
    socialLinks: [
      { type: 'linkedin', url: "#" },
      { type: 'twitter', url: "#" }
    ]
  },
  {
    name: "David Chen",
    role: "CTO",
    bio: "Full-stack developer with expertise in smart contracts and decentralized applications. Former lead at ConsenSys.",
    imageSrc: "/team/member2.jpg",
    socialLinks: [
      { type: 'linkedin', url: "#" },
      { type: 'github', url: "#" }
    ]
  },
  {
    name: "Maya Patel",
    role: "Head of Product",
    bio: "Product strategist with a background in UX design. Passionate about creating intuitive blockchain experiences.",
    imageSrc: "/team/member3.jpg",
    socialLinks: [
      { type: 'linkedin', url: "#" },
      { type: 'instagram', url: "#" }
    ]
  }
];

export const getSocialIconColor = (type: SocialLinkType): string => {
  switch (type) {
    case 'linkedin':
      return "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300";
    case 'twitter':
      return "text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300";
    case 'github':
      return "text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white";
    case 'instagram':
      return "text-pink-500 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300";
    default:
      return "";
  }
};
