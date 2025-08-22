import React, { useEffect, useState } from 'react';
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

const GuestBook = () => {
  const { isMobile } = useResponsive();
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch("https://api.gksf11.com/guestbook/");
        if (!response.ok) {
          throw new Error("데이터를 불러올 수 없습니다.");
        }
        const data = await response.json();

        const normalizedData = Array.isArray(data) ? data : [data];

        
        const sortedData = normalizedData.sort(
          (a, b) => new Date(b.written_at) - new Date(a.written_at)
        );

     
        setGuests(sortedData.slice(0, 9));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  const displayGuests = isMobile ? guests.slice(0, 5) : guests;

  return (
    <GuestBookSection>
      <GuestBookHeader>
        <GuestBookTitle>GuestBook</GuestBookTitle>
        <GuestBookSubtitle>
          Explore the what, when, and where of our forum.
        </GuestBookSubtitle>
      </GuestBookHeader>

      {loading && <p>불러오는 중...</p>}
      {error && <p style={{ color: "red" }}>에러 발생: {error}</p>}

      <GuestBookGrid>
        {displayGuests.map((g, idx) => (
          <GuestBookCard key={g.id || idx} $index={idx}>
            <GuestBookCardHeader>
              <GuestBookName>{g.author}</GuestBookName>
              <GuestBookRole>{g.belonging}</GuestBookRole>
            </GuestBookCardHeader>
            <GuestBookText>{g.message}</GuestBookText>
          </GuestBookCard>
        ))}
      </GuestBookGrid>
    </GuestBookSection>
  );
};

export default GuestBook;
