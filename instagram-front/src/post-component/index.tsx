import styled from "styled-components";
import { PostComponentType1, PostComponentType2, PostComponentType3, PostComponentType4, PostComponentType5 } from "./types";
import { useCallback, useState } from "react";

const WIDTH = 475;

const PostContainer = styled.div`
  width: ${WIDTH}px;
  margin-top:10px;
  margin-bottom:10px;
`;
const ProfileArea = styled.div`
  width: 100%;
  height: 46px;
  margin-bottom:12px;
  display: flex;
  flex-direction: row;
  justify-contents: center;
  align-items: center;
`;
const ProfileImgContainer = styled.div`
  width:32px;
  height:32px;
  margin-right:12px;
  display: flex;
  justify-contents: center;
  align-items: center;
`
const ProfileImg = styled.img`
  width:32px;
  height:32px;
  border: 0.3px solid #cccccc;
  object-fit: contain;
  border-radius: 16px;
`

const ProfileTextContainer = styled.div`
  flex:1;
  margin-top:-8px
`
const ProfileTextUpperContainer = styled.div`
  height:18px;
`

const ProfileNicknameSpan = styled.span`
  color: #000000;
  font-size:14px;
  font-weight:700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
`;
const ProfileDotSpan = styled.span`
  margin-left: 4px;
  margin-right: 4px;
  color: #737373;
  font-size:14px;
`;
const ProfileTimeSpan = styled.span`
  color: #737373;
  font-size:14px;
`;

const ProfileTextLowerContainer = styled.div`
  height:16px;
`
const ProfileLocationSpan = styled.span`
  color: #000000;
  font-size:12px;
`;

const CommentArea = styled.div`
  margin-top:8px;
`;
const CommentCountContainer = styled.div`
  font-size: 14px;
  color: #737373;
  cursor: pointer;
  
  &:hover {
    color: #444444;
    transition: 0.5s;
  }
`;
const CommentInputContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  height: 18px;
`;
const CommentInput = styled.input`
  flex:1;
  color: #000000;
  font-size: 14px;
  border-width: 0px;
  &::placeholder {
    font-size: 14px;
    color: #737373;
  };
  &:focus {
    outline: none;
  };
`;
const CommentConfirm = styled.a`
  color: #0095f6;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #000000;
    transition: 0.5s;
  };
`;

const ButtonArea = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  margin-bottom: 4px;
`;
const ButtonContainer = styled.a`
  width: 24;
  height: 24;
  padding: 8px 16px 8px 0px;
  color: inherit;
  cursor: pointer;
`;

const HeartButton = ({size, isSelected}:{size:number, isSelected:boolean})=>{
  return isSelected ?(
    <svg role="img" width={size} height={size} fill="red" viewBox="0 0 48 48">
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
    </svg>
  ) : (
    <svg role="img" width={size} height={size} >
      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z" />
    </svg>
  )
}
const CommentButton = ({size}:{size:number})=>{
  return(
    <svg role="img" width={size} height={size} fill="currentColor">
      <path stroke="currentColor" strokeWidth={2} strokeLinejoin="round" fill="none" d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" />
    </svg>
  );
}

const ShareButton = ({size}:{size:number})=>{
  return(
    <svg role="img" width={size} height={size} fill="currentColor">
      <line fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" x1={22} x2={9.218} y1={3} y2={10.083}></line>
      <polygon fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"></polygon>
    </svg>
  );
}


const LikeContainer = styled.a`
  width: 100%;
  height: 18px;
  text-decoration: none;
`;
const LikeTextSpan = styled.span`
  font-size: 14px;
  color: #000000;
  font-weight:700;
`;
const ContentContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  font-size: 14px;
  color: #000000;
`;
const ContentNicknameContainer = styled.div`
  margin-right:4px;
`;

const ContentNicknameTextSpan = styled.a`
  font-size: 14px;
  color: #000000;
  font-weight:700;
  text-decoration: none;
  cursor: pointer;
`;
const ContentHashtagTextSpan = styled.a`
  font-size: 14px;
  color: #00376b;
  text-decoration: none;
  float: left;
  margin-left:2px;
  margin-right:2px;
`
const ContentBR = styled.div`
  flex:1;
`


const MediaArea = styled.div`
  position: relative;
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  background-color: #000000;
  border-radius: 4px;
`
const MediaImg = styled.img`
  width:${WIDTH}px;
  height:${WIDTH}px;
  object-fit: contain;
  border-radius: 16px;
  border-radius: 4px;
`;

const MediaLeftButtonArea = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MediaRightButtonArea = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MediaButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #cccccc;
  opacity: 0.3;
  &:hover {
    transform: scale(1.05);
    opacity: 0.6;
    transition: 0.5s;
  }
`;

const MediaPagination = styled.div`
  position: absolute;
  width: 40px;
  height: 20px;
  bottom: 0px;
  right: 4px;
  text-align: center;
  font-size: 12px;
  color: #cccccc;
  font-family: Pretendard-Regular;
`;
const MediaPaginationSplash = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #333333;
  opacity: 0.4;
`

function MediaAreaContainer({imageUrl}:{imageUrl:string[]|string|null}){
  if(typeof imageUrl === 'string') return ( <MediaArea> <MediaImg src={imageUrl} /> </MediaArea>);
  if(imageUrl === null || imageUrl.length === 0) return (<MediaArea />)
  if(imageUrl.length === 1) return ( <MediaArea> <MediaImg src={imageUrl[0]} /> </MediaArea>);

  const [indexState, setIndexState] = useState<number>(0);
  const onBtnLeft = useCallback(()=>{
    if(indexState <= 0) setIndexState(imageUrl.length-1);
    else setIndexState(indexState-1);
  },[indexState]);

  const onBtnRight = useCallback(()=>{
    if(indexState >= imageUrl.length-1) setIndexState(0);
    else setIndexState(indexState+1);
  },[indexState]);

  return (
    <MediaArea>
      <MediaImg src={imageUrl[indexState]} /> 
      <MediaPagination>
        <MediaPaginationSplash />
        {indexState+1} / {imageUrl.length}
      </MediaPagination>
      <MediaLeftButtonArea onClick={onBtnLeft}>
        <MediaButton>
          <svg>
            <path d="M20,5 L10,15 L20,25" stroke="#555555" strokeWidth="3" strokeLinejoin="round" fill="transparent" strokeLinecap="round"/>
          </svg>
        </MediaButton>
      </MediaLeftButtonArea>
      <MediaRightButtonArea onClick={onBtnRight}>
        <MediaButton>
          <svg>
            <path d="M10,5 L20,15 L10,25" stroke="#555555" strokeWidth="3" strokeLinejoin="round" fill="transparent" strokeLinecap="round"/>
          </svg>
        </MediaButton>
      </MediaRightButtonArea>
    </MediaArea>
  );
}


interface PostComponent1Prop{
  item: PostComponentType1
}
export function PostComponent1({item}:PostComponent1Prop){
  const {nickname, imageUrl, content, timestamp} = item;
  return (
    <PostContainer>
      <ProfileArea>
        <ProfileImgContainer>
          <ProfileImg src="/img/blankProfile.png"/>
        </ProfileImgContainer>
        <ProfileTextContainer>
          <ProfileTextUpperContainer>
            <ProfileNicknameSpan>{nickname}</ProfileNicknameSpan>
            <ProfileDotSpan>•</ProfileDotSpan>
            <ProfileTimeSpan>1일</ProfileTimeSpan>
          </ProfileTextUpperContainer>
        </ProfileTextContainer>
      </ProfileArea>
      <MediaArea>
        <MediaImg src={imageUrl}/>
      </MediaArea>
      <div style={{height:20}} />
      <ContentContainer>
        <ContentNicknameContainer>
          <ContentNicknameTextSpan onClick={()=>{}}>{nickname}</ContentNicknameTextSpan>
        </ContentNicknameContainer>
        {content}
      </ContentContainer>
    </PostContainer>
  );
}


interface PostComponent2Prop{
  item: PostComponentType2
}
export function PostComponent2({item}:PostComponent2Prop){
  const {nickname, profileImageUrl, location, imageUrl, content, timestamp} = item;
  return (
    <PostContainer>
      <ProfileArea>
        <ProfileImgContainer>
          <ProfileImg src="/img/blankProfile.png"/>
        </ProfileImgContainer>
        <ProfileTextContainer>
          <ProfileTextUpperContainer>
            <ProfileNicknameSpan>{nickname}</ProfileNicknameSpan>
            <ProfileDotSpan>•</ProfileDotSpan>
            <ProfileTimeSpan>1일</ProfileTimeSpan>
          </ProfileTextUpperContainer>
          <ProfileTextLowerContainer>
            <ProfileLocationSpan>
              {location}
            </ProfileLocationSpan>
          </ProfileTextLowerContainer>
        </ProfileTextContainer>
      </ProfileArea>
      <MediaAreaContainer imageUrl={imageUrl}/>
      <div style={{height:20}} />
      <ContentContainer>
        <ContentNicknameContainer>
          <ContentNicknameTextSpan onClick={()=>{}}>{nickname}</ContentNicknameTextSpan>
        </ContentNicknameContainer>
        {content}
      </ContentContainer>
    </PostContainer>
  );
}


interface PostComponent3Prop{
  item: PostComponentType3
}
export function PostComponent3({item}:PostComponent3Prop){
  const {user, location, imageUrl, content, timestamp} = item;
  const {nickname, profileImageUrl} = user
  return (
    <PostContainer>
      <ProfileArea>
        <ProfileImgContainer>
          <ProfileImg src={profileImageUrl || "/img/blankProfile.png" }/>
        </ProfileImgContainer>
        <ProfileTextContainer>
          <ProfileTextUpperContainer>
            <ProfileNicknameSpan>{nickname}</ProfileNicknameSpan>
            <ProfileDotSpan>•</ProfileDotSpan>
            <ProfileTimeSpan>1일</ProfileTimeSpan>
          </ProfileTextUpperContainer>
          <ProfileTextLowerContainer>
            <ProfileLocationSpan>
              {location}
            </ProfileLocationSpan>
          </ProfileTextLowerContainer>
        </ProfileTextContainer>
      </ProfileArea>
      <MediaAreaContainer imageUrl={imageUrl}/>
      <div style={{height:20}} />
      <ContentContainer>
        <ContentNicknameContainer>
          <ContentNicknameTextSpan onClick={()=>{}}>{nickname}</ContentNicknameTextSpan>
        </ContentNicknameContainer>
        {content}
      </ContentContainer>
    </PostContainer>
  );
}


interface PostComponent4Prop{
  item: PostComponentType4
}
export function PostComponent4({item}:PostComponent4Prop){
  const {user, location, imageUrl, content, countComment, timestamp} = item;
  const {nickname, profileImageUrl} = user;
  const [InputValue, setInputValue] = useState<string>("");
  return (
    <PostContainer>
      <ProfileArea>
        <ProfileImgContainer>
          <ProfileImg src={profileImageUrl || "/img/blankProfile.png" }/>
        </ProfileImgContainer>
        <ProfileTextContainer>
          <ProfileTextUpperContainer>
            <ProfileNicknameSpan>{nickname}</ProfileNicknameSpan>
            <ProfileDotSpan>•</ProfileDotSpan>
            <ProfileTimeSpan>1일</ProfileTimeSpan>
          </ProfileTextUpperContainer>
          <ProfileTextLowerContainer>
            <ProfileLocationSpan>
              {location}
            </ProfileLocationSpan>
          </ProfileTextLowerContainer>
        </ProfileTextContainer>
      </ProfileArea>
      <MediaAreaContainer imageUrl={imageUrl}/>
      
      <ButtonArea>
        <ButtonContainer onClick={()=>{}}>
          <HeartButton size={24} isSelected={false} />
        </ButtonContainer>
        <ButtonContainer onClick={()=>{}}>
          <CommentButton size={24} />
        </ButtonContainer>
        <ButtonContainer onClick={()=>{}}>
          <ShareButton size={24} />
        </ButtonContainer>
      </ButtonArea>
      <ContentContainer>
        <ContentNicknameContainer>
          <ContentNicknameTextSpan onClick={()=>{}}>{nickname}</ContentNicknameTextSpan>
        </ContentNicknameContainer>
        {content}
      </ContentContainer>

      <CommentArea>
        <CommentCountContainer>
          댓글 {countComment}개 모두 보기
        </CommentCountContainer>
        <CommentInputContainer>
          <CommentInput value={InputValue} onChange={(e:any)=>setInputValue(e.target.value)} type="text" placeholder="댓글 달기..."/>
          <CommentConfirm style={{display: InputValue.length > 0 ? 'block' : 'none'}}>
            게시
          </CommentConfirm>
        </CommentInputContainer>
      </CommentArea>
    </PostContainer>
  );
}

interface PostComponent5Prop{
  item: PostComponentType5
}
export function PostComponent5({item}:PostComponent5Prop){
  const {user, location, imageUrl, content, countComment, countLike, timestamp} = item;
  const {nickname, profileImageUrl} = user;
  const [InputValue, setInputValue] = useState<string>("");
  const [isSelectedLike, setSelectedLike] = useState<boolean>(item.isSelectedLike);
  return (
    <PostContainer>
      <ProfileArea>
        <ProfileImgContainer>
          <ProfileImg src={profileImageUrl || "/img/blankProfile.png" }/>
        </ProfileImgContainer>
        <ProfileTextContainer>
          <ProfileTextUpperContainer>
            <ProfileNicknameSpan>{nickname}</ProfileNicknameSpan>
            <ProfileDotSpan>•</ProfileDotSpan>
            <ProfileTimeSpan>1일</ProfileTimeSpan>
          </ProfileTextUpperContainer>
          <ProfileTextLowerContainer>
            <ProfileLocationSpan>
              {location}
            </ProfileLocationSpan>
          </ProfileTextLowerContainer>
        </ProfileTextContainer>
      </ProfileArea>
      <MediaAreaContainer imageUrl={imageUrl}/>
      <ButtonArea>
        <ButtonContainer onClick={()=>setSelectedLike(!isSelectedLike)}>
          <HeartButton size={24} isSelected={isSelectedLike} />
        </ButtonContainer>
        <ButtonContainer onClick={()=>{}}>
          <CommentButton size={24} />
        </ButtonContainer>
        <ButtonContainer onClick={()=>{}}>
          <ShareButton size={24} />
        </ButtonContainer>
      </ButtonArea>
      <LikeContainer onClick={()=>{}}>
        <LikeTextSpan>좋아요 </LikeTextSpan>
        <LikeTextSpan>{countLike}</LikeTextSpan>
        <LikeTextSpan>개</LikeTextSpan>
      </LikeContainer>
      <ContentContainer>
        <ContentNicknameContainer>
          <ContentNicknameTextSpan onClick={()=>{}}>{nickname}</ContentNicknameTextSpan>
        </ContentNicknameContainer>
        {content}
      </ContentContainer>

      
      <CommentArea>
        <CommentCountContainer>
          댓글 {countComment}개 모두 보기
        </CommentCountContainer>
        <CommentInputContainer>
          <CommentInput value={InputValue} onChange={(e:any)=>setInputValue(e.target.value)} type="text" placeholder="댓글 달기..."/>
          <CommentConfirm style={{display: InputValue.length > 0 ? 'block' : 'none'}}>
            게시
          </CommentConfirm>
        </CommentInputContainer>
      </CommentArea>
    </PostContainer>
  );
}



export function PostComponent0(){
  return (
    <PostContainer>
      <ProfileArea>
        <ProfileImgContainer>
          <ProfileImg src="/img/unnamed.png"/>
        </ProfileImgContainer>
        <ProfileTextContainer>
          <ProfileTextUpperContainer>
            <ProfileNicknameSpan>anyoojin1</ProfileNicknameSpan>
            <ProfileDotSpan>•</ProfileDotSpan>
            <ProfileTimeSpan>1일</ProfileTimeSpan>
          </ProfileTextUpperContainer>
          <ProfileTextLowerContainer>
            <ProfileLocationSpan>
              롯데콘서트홀
            </ProfileLocationSpan>
          </ProfileTextLowerContainer>
        </ProfileTextContainer>
      </ProfileArea>
      <MediaArea>
        <MediaImg src="https://images.unsplash.com/photo-1559583985-c80d8ad9b29f"/>
      </MediaArea>
      <ButtonArea>
        <ButtonContainer onClick={()=>{}}>
          <HeartButton size={24} isSelected={false} />
        </ButtonContainer>
        <ButtonContainer onClick={()=>{}}>
          <CommentButton size={24} />
        </ButtonContainer>
        <ButtonContainer onClick={()=>{}}>
          <ShareButton size={24} />
        </ButtonContainer>
      </ButtonArea>
      <LikeContainer onClick={()=>{}}>
        <LikeTextSpan>좋아요 </LikeTextSpan>
        <LikeTextSpan>20</LikeTextSpan>
        <LikeTextSpan>개</LikeTextSpan>
      </LikeContainer>
      <ContentContainer>
        <ContentNicknameContainer>
          <ContentNicknameTextSpan onClick={()=>{}}>naver_clova</ContentNicknameTextSpan>
        </ContentNicknameContainer>
        asdfasdflkjkalsdjlfjasldf
      </ContentContainer>
    </PostContainer>
  );
}
