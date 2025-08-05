// import React from 'react';
// import styled from 'styled-components';
// import Footer from '../components/common/Footer';

// const events = [
//   { id: 1, title: '11ST GKSF', img: 'img1.png' },
//   { id: 2, title: '10TH GKSF', img: '' },
//   { id: 3, title: '9TH GKSF', img: '' },
//   { id: 4, title: '8TH GKSF', img: '' },
//   { id: 5, title: '7TH GKSF', img: '' },
//   { id: 6, title: '6TH GKSF', img: '' },
//   { id: 7, title: '5TH GKSF', img: '' },
//   { id: 8, title: '4TH GKSF', img: '' },
//   { id: 9, title: '3RD GKSF', img: '' },
//   { id: 10, title: '2ND GKSF', img: '' },
//   { id: 11, title: '1ST GKSF', img: '' },
//   { id: 12, title: 'GLOBAL KOREAN STUDIES FORUM', img: '', isForum: true }
// ];

// const Container = styled.div`
//   min-height: 100vh;
//   color: #fff;
//   font-family: 'Montserrat', 'Pretendard', sans-serif;
// `;

// const Header = styled.header`
//   padding-top: 120px;
//   padding-left: 180px;
//   @media (max-width: 900px) {
//     padding-top: 60px;
//     padding-left: 24px;
//   }
//   @media (max-width: 600px) {
//     padding-top: 32px;
//     padding-left: 8px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2.8rem;
//   font-weight: 700;
//   letter-spacing: 0.08em;
//   line-height: 1.1;
//   margin-bottom: 40px;
//   @media (max-width: 900px) {
//     font-size: 2rem;
//     margin-bottom: 24px;
//   }
//   @media (max-width: 600px) {
//     font-size: 1.2rem;
//     margin-bottom: 12px;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 320px);
//   grid-template-rows: repeat(4, 220px);
//   gap: 40px 40px;
//   justify-content: center;
//   padding-bottom: 60px;
//   @media (max-width: 1200px) {
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: repeat(4, 180px);
//     gap: 24px 16px;
//   }
//   @media (max-width: 900px) {
//     grid-template-columns: repeat(2, 1fr);
//     grid-template-rows: repeat(6, 140px);
//     gap: 16px 8px;
//   }
//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//     grid-template-rows: repeat(12, 120px);
//     gap: 12px;
//     padding: 0 8px 32px 8px;
//   }
// `;

// const Item = styled.div`
//   background: ${({ $isForum }) => ($isForum ? '#222' : '#111')};
//   border: 2px solid #444;
//   border-radius: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   cursor: ${({ $isForum }) => ($isForum ? 'default' : 'pointer')};
//   box-sizing: border-box;
//   height: 100%;
//   width: 100%;
//   position: relative;
//   transition: box-shadow 0.2s;
//   &:hover {
//     box-shadow: ${({ $isForum }) => ($isForum ? 'none' : '0 0 16px #2e3c5d')};
//   }
// `;

// const EventImg = styled.img`
//   max-width: 120px;
//   max-height: 120px;
//   margin-bottom: 18px;
//   object-fit: contain;
// `;

// const EventTitle = styled.span`
//   font-size: ${({ $isForum }) => ($isForum ? '1.6rem' : '1.3rem')};
//   font-weight: 400;
//   letter-spacing: 0.08em;
//   color: #fff;
//   text-align: center;
//   font-family: 'Montserrat', 'Pretendard', sans-serif;
//   line-height: 1.2;
//   ${({ $isForum }) =>
//     $isForum &&
//     `
//     white-space: pre-line;
//     font-weight: 500;
//   `}
// `;

// const Archiving = () => {
//   return (
//     <Container>
//       <Header>
//         <Title>
//           GKSF
//           <br />
//           ARCHIVING
//         </Title>
//       </Header>
//       <main>
//         <Grid>
//           {events.map((event) => (
//             <Item key={event.id} $isForum={event.isForum}>
//               {event.img && <EventImg src={event.img} alt={event.title} />}
//               <EventTitle $isForum={event.isForum}>
//                 {event.isForum ? 'GLOBAL\nKOREAN\nSTUDIES\nFORUM' : event.title}
//               </EventTitle>
//             </Item>
//           ))}
//         </Grid>
//       </main>
//       <Footer />
//     </Container>
//   );
// };

// export default Archiving;
