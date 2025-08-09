import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    position: absolute;
    align-items: flex-start;
    padding-top: 250px;
  }
`;

const Modal = styled.div`
  border-radius: 2.4rem;
  border: 0.1rem solid var(--Glass, rgba(255, 255, 255, 0.4));
  background: var(--Background-Glass, rgba(16, 16, 16, 0.4));
  backdrop-filter: blur(calc(var(--Glass-L, 30px) / 2));
  max-width: 82rem;
  width: 90vw;
  padding: 5.2rem 4rem 3.2rem 4rem;
  box-sizing: border-box;
  color: #fff;
  position: relative;
  box-shadow: none;

  @media (max-width: 600px) {
    display: flex !important;
    width: 30rem !important;
    height: 50rem !important;
    padding: 3.2rem !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 1rem !important;
    border-radius: 1.8rem !important;
    border: 0.14rem solid var(--Glass, rgba(255, 255, 255, 0.4)) !important;
    background: rgba(255, 255, 255, 0.05) !important;
    backdrop-filter: blur(calc(var(--Glass-L, 30px) / 2)) !important;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 600px) {
    top: 1.6rem;
    right: 1.6rem;
    font-size: 1.4rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  margin-bottom: 3.6rem;
  letter-spacing: 0.04em;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 4rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (max-width: 600px) {
    gap: 4rem;
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  margin-bottom: 0.8rem;
  color: #919191;
  display: block;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 0.2rem solid;
  border-image: linear-gradient(90deg, #222, #222) 1;
  color: #919191;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  margin-bottom: 0.4rem;
  outline: none;
  box-shadow: none;
  font-family: 'IBM Plex Mono', monospace;
  &::placeholder {
    color: #bbb;
    font-size: 1.4rem;
    font-family: 'IBM Plex Mono', monospace;
  }
  &:focus {
    border-image: linear-gradient(90deg, #3a7bd5, #10d48d) 1;
    border-bottom: 0.2rem solid;
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 1.2rem 0;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;

const CommentInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 0.2rem solid;
  border-image: linear-gradient(90deg, #222, #222) 1;
  color: #919191;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  margin-bottom: 0.4rem;
  outline: none;
  box-shadow: none;
  font-family: 'IBM Plex Mono', monospace;
  &::placeholder {
    color: #bbb;
    font-size: 1.4rem;
    font-family: 'IBM Plex Mono', monospace;
  }
  &:focus {
    border-image: linear-gradient(90deg, #3a7bd5, #10d48d) 1;
    border-bottom: 0.2rem solid;
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 1.2rem 0;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;

const BtnRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  @media (max-width: 600px) {
    gap: 2rem;
  }
`;

const Button = styled.button`
  background: #232323;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.4rem;
  font-family: 'IBM Plex Mono', monospace;
  cursor: pointer;
  width: 16rem;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
  @media (max-width: 600px) {
    padding: 0.8rem 1.6rem;
    font-size: 1.2rem;
    width: 10rem;
  }
`;

const Guestbook = ({ onClose }) => {
  const [nickname, setNickname] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://api.gksf11.com/guestbook/', {
        author: nickname,
        belonging: affiliation,
        message: comment
      });
      alert('등록되었습니다!');
      setNickname('');
      setAffiliation('');
      setComment('');
      if (onClose) onClose();
    } catch (err) {
      alert('등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay>
      <Modal>
        <CloseBtn onClick={onClose} aria-label="닫기">
          ×
        </CloseBtn>
        <Title>방명록</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="affiliation">소속</Label>
            <Input
              id="affiliation"
              type="text"
              placeholder="소속을 작성해주세요 ex. 연구기획팀, 서강대 경영학과"
              value={affiliation}
              onChange={(e) => setAffiliation(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="comment">댓글</Label>
            <CommentInput
              id="comment"
              type="text"
              placeholder="댓글을 작성해주세요"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <BtnRow>
            <Button
              type="button"
              onClick={() => alert('미리보기 기능 준비중입니다')}
            >
              미리보기
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? '등록 중...' : '등록하기'}
            </Button>
          </BtnRow>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default Guestbook;
