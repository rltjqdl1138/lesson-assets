export interface PostComponentType1{
  id: number;
  nickname: string;
  imageUrl: string|null;
  content: string|null;
  timestamp: number;
  //profileImageUrl: string|null;
  //location: string|null;
}
export const MockPostComponent1:PostComponentType1 = {
  id: 1,
  nickname: "SeungWon",
  imageUrl: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f",
  content: "열심히 과외중 1일차",
  timestamp: 0
};


export interface PostComponentType2{
  id: number;
  nickname: string;
  profileImageUrl: string|null;
  location: string|null;
  imageUrl: string[]|string|null;
  content: string|null;
  timestamp: number;
}
export const MockPostComponent2:PostComponentType2 = {
  id: 1,
  nickname: "SeungWon",
  profileImageUrl: null,
  location: "Starbucks 홍대입구",
  imageUrl: [
    "https://img.freepik.com/premium-photo/clouds-in-the-sky-wallpapers_771703-10100.jpg",
    "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f"
  ],
  content: "열심히 과외중 2일차",
  timestamp: 0
};


export interface PostComponentType3{
  id: number;
  user: {
    userId: number;
    nickname: string;
    profileImageUrl: string|null;
  }
  location: string|null;
  imageUrl: string[]|string|null;
  content: string|null;
  timestamp: number;
}
export const MockPostComponent3:PostComponentType3 = {
  id: 1,
  user: {
    userId: 1,
    nickname: "SeungWon",
    profileImageUrl: "/img/profileImage.png"
  },
  location: "Starbucks 홍대입구",
  imageUrl: [
    "https://img.freepik.com/premium-photo/clouds-in-the-sky-wallpapers_771703-10100.jpg",
    "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f"
  ],
  content: "열심히 과외중 3일차",
  timestamp: 0
}

export interface PostComponentType4{
  id: number;
  user: {
    userId: number;
    nickname: string;
    profileImageUrl: string|null;
  }
  location: string|null;
  imageUrl: string[]|string|null;
  content: string|null;
  timestamp: number;
  countComment: number;
}
export const MockPostComponent4:PostComponentType4 = {
  id: 1,
  user: {
    userId: 1,
    nickname: "SeungWon",
    profileImageUrl: "/img/profileImage.png"
  },
  location: "Starbucks 홍대입구",
  imageUrl: [
    "https://img.freepik.com/premium-photo/clouds-in-the-sky-wallpapers_771703-10100.jpg",
    "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f"
  ],
  content: "열심히 과외중 4일차",
  timestamp: 0,
  countComment: 6
}

export interface PostComponentType5{
  id: number;
  user: {
    userId: number;
    nickname: string;
    profileImageUrl: string|null;
  }
  location: string|null;
  imageUrl: string[]|string|null;
  content: string|null;
  timestamp: number;
  countComment: number;
  countLike: number;
  isSelectedLike: boolean;
}
export const MockPostComponent5:PostComponentType5 = {
  id: 1,
  user: {
    userId: 1,
    nickname: "SeungWon",
    profileImageUrl: "/img/profileImage.png"
  },
  location: "Starbucks 홍대입구",
  imageUrl: [
    "https://img.freepik.com/premium-photo/clouds-in-the-sky-wallpapers_771703-10100.jpg",
    "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f"
  ],
  content: "열심히 과외중 5일차",
  timestamp: 0,
  countComment: 6,
  countLike: 15,
  isSelectedLike: true
}


export interface CommentComponentType{
  id: number;
  user: {
    userId: number;
    nickname: string;
    profileImageUrl: string|null;
  }
  content: string|null;
  timestamp: number;
}

export const MockCommentComponentList:CommentComponentType[] = [
  {
    id:1,
    user:{
      userId: 2,
      nickname: "맹구",
      profileImageUrl: "img/mangu.png"
    },
    content: "응원할게",
    timestamp: 0,
  },
  {
    id:2,
    user:{
      userId: 3,
      nickname: "Hoon",
      profileImageUrl: "img/hoon.png"
    },
    content: "ㅋㅋㅋㅋ",
    timestamp: 0,
  },
  {
    id:3,
    user:{
      userId: 4,
      nickname: "철수",
      profileImageUrl: "img/chul.png"
    },
    content: "화이팅~~",
    timestamp: 0,
  },
  {
    id:4,
    user:{
      userId: 5,
      nickname: "JJangJJang",
      profileImageUrl: "img/jjangu.png"
    },
    content: "ㅁㅎ?",
    timestamp: 0,
  },
  {
    id:5,
    user:{
      userId: 6,
      nickname: "Boss",
      profileImageUrl: "img/wonjang.png"
    },
    content: "열심히 하길 바라요",
    timestamp: 0,
  },
  {
    id:6,
    user:{
      userId: 6,
      nickname: "J",
      profileImageUrl: "img/jjanga.png"
    },
    content: "❤️❤️❤️",
    timestamp: 0,
  },
]