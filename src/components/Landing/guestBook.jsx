import React from 'react';
import useResponsive from './useResponsive';
import {
  GuestBookSection,
  GuestBookHeader,
  GuestBookTitle,
  GuestBookSubtitle,
  GuestBookGrid,
  GuestBookCard,
  GuestBookCardHeader,
  GuestBookName,
  GuestBookRole,
  GuestBookText,
} from '../../style/LandingStyle';

const GUESTS = [
  { name: 'Emily', role: 'Visitor', text: 'The forum exceeded my expectations. The sessions were insightful and the speakers were top-notch.' },
  { name: 'Jay', role: 'Visitor', text: 'A fantastic event! I was able to connect with professionals from various industries.' },
  { name: '방문자1', role: '홍보기획팀원', text: 'AI에 대한 새로운 시각을 얻을 수 있어서 정말 유익했습니다.' },
  { name: '강민지', role: '연구기획팀원', text: '요즘 시대에 너무 도움이 되는 포럼이에요. AI의 기본적인 내용부터 짚었는데 많이 도움이 되었습니다!' },
  { name: '김재민', role: 'student', text: '패널 토론과 발표 내용이 알차고 흥미로웠어요. 특히 세션3가 기억에 남았습니다.' },
  { name: 'Heasther', role: 'Visitor', text: 'Loved the hands-on demonstrations and panel discussions. Looking forward to next year!' },
  { name: 'Jay', role: 'Visitor', text: 'An excellent platform to explore emerging trends in technology and innovation.' },
  { name: '박찬재', role: 'Visitor', text: '포럼 분위기도 즐거웠고 정보도 풍부해서 만족스러웠어요.' },
  { name: 'Jay', role: 'Visitor', text: 'A fantastic event! I was able to connect with professionals from various industries.' }
];


const GuestBook = () => {

  const { isMobile } = useResponsive(); 
  const displayGuests = isMobile ? GUESTS.slice(0, 5) : GUESTS;
  
  return (
    <GuestBookSection>
      <GuestBookHeader>
        <GuestBookTitle>GuestBook</GuestBookTitle>
        <GuestBookSubtitle>Explore the what, when, and where of our forum.</GuestBookSubtitle>
      </GuestBookHeader>

      <GuestBookGrid>
        {displayGuests.map((g, idx) => (
          <GuestBookCard key={idx} $index={idx}>
            <GuestBookCardHeader>
              <GuestBookName>{g.name}</GuestBookName>
              <GuestBookRole>{g.role}</GuestBookRole>
            </GuestBookCardHeader>
            <GuestBookText>{g.text}</GuestBookText>
          </GuestBookCard>
        ))}
      </GuestBookGrid>
    </GuestBookSection>
  );
};

export default GuestBook;
