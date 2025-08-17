import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Vector203 from '../../assets/images/Vector 203.png';

const GuestModal = ({ onClose, previewData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({
    nickname: previewData?.nickname || '',
    affiliation: previewData?.affiliation || '',
    comment: previewData?.comment || ''
  });
  
  // previewData가 변경될 때마다 editData 업데이트
  React.useEffect(() => {
    setEditData({
      nickname: previewData?.nickname || '',
      affiliation: previewData?.affiliation || '',
      comment: previewData?.comment || ''
    });
  }, [previewData]);

  // 수정 모드가 활성화될 때 EditInputName에 자동 포커스
  React.useEffect(() => {
    if (isEditing) {
      const inputElement = document.querySelector('input[placeholder="닉네임"]');
      if (inputElement) {
        inputElement.focus();
        // 커서를 텍스트 끝으로 이동
        inputElement.setSelectionRange(inputElement.value.length, inputElement.value.length);
      }
    }
  }, [isEditing]);
  
  console.log('GuestModal 렌더링됨');
  console.log('previewData:', previewData);
  console.log('editData:', editData);

  if (!previewData) {
    console.log('previewData가 없습니다');
    return null;
  }

  const handleModify = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // 수정된 데이터를 저장하는 로직
    console.log('수정된 데이터:', editData);
    
    // editData는 이미 최신 상태이므로 별도로 setEditData 할 필요 없음
    setIsEditing(false);
    // 여기에 실제 저장 로직 추가 가능
  };

  const handleCancel = () => {
    setEditData({
      nickname: previewData?.nickname || '',
      affiliation: previewData?.affiliation || '',
      comment: previewData?.comment || ''
    });
    setIsEditing(false);
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      await axios.post('http://api.gksf11.com/guestbook/', {
        author: editData.nickname,
        belonging: editData.affiliation,
        message: editData.comment
      });
      alert('등록되었습니다!');
      if (onClose) onClose();
    } catch (err) {
      alert('등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay onClick={onClose}>
        <Layout>
          <GuestBookCard onClick={(e) => e.stopPropagation()}>
                         <GuestBookCardHeader>
                               {!isEditing ? (
                  <>
                    <GuestBookName>{editData.nickname || '닉네임'}</GuestBookName>
                    <GuestBookRole>{editData.affiliation || '소속'}</GuestBookRole>
                  </>
                ) : (
                                    <>
                     <EditInputName
                       value={editData.nickname}
                       onChange={(e) => setEditData({...editData, nickname: e.target.value})}
                       placeholder="닉네임"
                     />
                     <EditInputRole
                       value={editData.affiliation}
                       onChange={(e) => setEditData({...editData, affiliation: e.target.value})}
                       placeholder="소속"
                     />
                   </>
                )}
              </GuestBookCardHeader>
              {!isEditing ? (
                <GuestBookText>{editData.comment || '댓글'}</GuestBookText>
              ) : (
                <EditTextArea
                  value={editData.comment}
                  onChange={(e) => setEditData({...editData, comment: e.target.value})}
                  placeholder="댓글"
                />
              )}
          </GuestBookCard>
          <ButtonContainer onClick={(e) => e.stopPropagation()}>
                         {!isEditing ? (
               <>
                 <Button onClick={handleModify}>수정하기</Button>
                 <Button onClick={handleRegister} disabled={loading}>
                   {loading ? '등록 중...' : '등록하기'}
                 </Button>
               </>
             ) : (
               <>
                 <Button onClick={handleSave}>저장하기</Button>
                 <Button onClick={handleCancel}>취소하기</Button>
               </>
             )}
          </ButtonContainer>
        </Layout>
    </Overlay>
  );
};

export default GuestModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    position: absolute;
    align-items: flex-start;
    padding-top: 250px;
  }
`;

const GuestBookCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 357px;
  height: 236px;
  border-radius: 16px;
  background-image: url(${Vector203});
  background-size: cover;
  background-position: center;
  background-color: #101010;
  position: relative;
  overflow: hidden;
  padding: 3rem;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 340px;
    height: auto;
    min-height: 236px;
    padding: 2.4rem;
    border-radius: 1.8rem;
  }
`;

const GuestBookCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 2;
  position: relative;
`;

const GuestBookName = styled.div`
  color: var(--Netural-5, #FBFBFB);

/* Desktop/Label/18_R */
font-family: "SF Pro";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 21.6px */
letter-spacing: 0.36px;
z-index: 2;
position: relative;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const GuestBookRole = styled.div`
  color: var(--Text-Tertiary, #919191);

/* Desktop/Caption/12_L */
font-family: "SF Pro";
font-size: 12px;
font-style: normal;
font-weight: 274;
line-height: 130%; /* 15.6px */
z-index: 2;
position: relative;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const GuestBookText = styled.div`
  color: var(--Text-Primary, #FBFBFB);

/* Desktop/Label/15_R */
font-family: "IBM Plex Mono";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 21px */
letter-spacing: 0.144px;
  text-align: left;
  z-index: 2;
  position: relative;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const EditInputName = styled.input`
  color: var(--Netural-5, #FBFBFB);
  font-family: "SF Pro";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.36px;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  z-index: 2;
  position: relative;
  width: auto;
  min-width: 0;
  height: auto;
  min-height: 0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-bottom-color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const EditInputRole = styled.input`
  color: var(--Text-Tertiary, #919191);
  font-family: "SF Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 274;
  line-height: 130%;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  z-index: 2;
  position: relative;
  width: auto;
  min-width: 0;
  height: auto;
  min-height: 0;
  text-align: right;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const EditTextArea = styled.textarea`
  color: var(--Text-Primary, #FBFBFB);
  font-family: "IBM Plex Mono";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.144px;
  text-align: left;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  z-index: 2;
  position: relative;
  width: 100%;
  resize: none;
  min-height: 0;
  height: auto;
  overflow: hidden;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const Layout = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const ButtonContainer = styled.div`
display: flex;
gap: 12px;
`;
const Button = styled.button`
  background: #232323;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.4rem;
  font-family: 'IBM Plex Mono';
  cursor: pointer;
  width: 16rem;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
  @media (max-width: 600px) {
  padding: 1.2rem 3.2rem;
    font-size: 1.3rem;
    width: 15rem;
  }
`;
