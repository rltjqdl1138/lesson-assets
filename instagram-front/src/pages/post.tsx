
import styled from "styled-components";
import { PostComponent1, PostComponent2, PostComponent3, PostComponent4, PostComponent5 } from "../post-component";
import { MockPostComponent1, MockPostComponent2, MockPostComponent3, MockPostComponent4, MockPostComponent5 } from "../post-component/types";
import { useState } from "react";

const WIDTH = 475;
const PageContainer = styled.div`
  width: ${WIDTH}px;
  margin: auto;
`;
const TitleContainer = styled.div`
  font-family: LINESeedKR-Bd;
  font-size: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
const Divider = styled.div`
  border-bottom: 0.3px solid #AAAAAA;
  height:40px;
  width: 100%;
`;

const JSONContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 400px;
  height: 400px;
  background-color: rgba(255,255,255,0.7)
`

export function PostPage(){
  const [JSONData, setJSONData] = useState<string>("");
  console.log(JSONData);
  return (
    <PageContainer>
      <TitleContainer
        onMouseEnter={()=>setJSONData(JSON.stringify(MockPostComponent1, null, "  "))}
      >Version 1</TitleContainer>
      <PostComponent1 item={MockPostComponent1}/>
      <Divider />

      <TitleContainer
        onMouseEnter={()=>setJSONData(JSON.stringify(MockPostComponent2, null, "  "))}
      >Version 2</TitleContainer>
      <PostComponent2 item={MockPostComponent2}/>
      <Divider />

      <TitleContainer
        onMouseEnter={()=>setJSONData(JSON.stringify(MockPostComponent3, null, "  "))}
      >Version 3</TitleContainer>
      <PostComponent3 item={MockPostComponent3}/>
      <Divider />

      <TitleContainer
        onMouseEnter={()=>setJSONData(JSON.stringify(MockPostComponent4, null, "  "))}
      >Version 4</TitleContainer>
      <PostComponent4 item={MockPostComponent4}/>
      <Divider />

      <TitleContainer
        onMouseEnter={()=>setJSONData(JSON.stringify(MockPostComponent5, null, "  "))}
      >Version 5</TitleContainer>
      <PostComponent5 item={MockPostComponent5}/>
      <Divider />
      <JSONContainer>
        <textarea style={{width:'100%', height:'100%', backgroundColor:'transparent'}} rows={10} value={JSONData} />
        
      </JSONContainer>
    </PageContainer>
  )
}
