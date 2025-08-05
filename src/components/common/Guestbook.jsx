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
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: linear-gradient(135deg, #181c22 0%, #111 100%);
  border-radius: 24px;
  max-width: 820px;
  width: 90vw;
  padding: 52px 40px 32px 40px;
  box-sizing: border-box;
  color: #fff;
  position: relative;
  box-shadow: none;
  @media (max-width: 600px) {
    padding: 24px 12px 16px 12px;
    max-width: 98vw;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 600px) {
    top: 16px;
    right: 16px;
    font-size: 1.4rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.7rem;
  font-family: 'Syncopate', 'SF Pro', sans-serif;
  font-weight: 700;
  margin-bottom: 36px;
  letter-spacing: 0.04em;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 18px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 600px) {
    gap: 18px;
  }
`;

const Label = styled.label`
  font-size: 1.08rem;
  font-family: 'SF Pro', 'SUITE-Regular', sans-serif;
  font-weight: 600;
  margin-bottom: 8px;
  color: #fff;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, #222, #222) 1;
  color: #fff;
  font-size: 1.08rem;
  padding: 8px 0;
  margin-bottom: 4px;
  outline: none;
  box-shadow: none;
  font-family: 'SF Pro', 'SUITE-Regular', sans-serif;
  &::placeholder {
    color: #bbb;
    font-size: 1rem;
    font-family: 'SF Pro', 'SUITE-Regular', sans-serif;
  }
  &:focus {
    border-image: linear-gradient(90deg, #3a7bd5, #10d48d) 1;
    border-bottom: 2px solid;
    outline: none;
    box-shadow: none;
  }
`;

// 댓글도 input으로 변경
const CommentInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, #222, #222) 1;
  color: #fff;
  font-size: 1.08rem;
  padding: 8px 0;
  margin-bottom: 4px;
  outline: none;
  box-shadow: none;
  font-family: 'SF Pro', 'SUITE-Regular', sans-serif;
  &::placeholder {
    color: #bbb;
    font-size: 1rem;
    font-family: 'SF Pro', 'SUITE-Regular', sans-serif;
  }
  &:focus {
    border-image: linear-gradient(90deg, #3a7bd5, #10d48d) 1;
    border-bottom: 2px solid;
    outline: none;
    box-shadow: none;
  }
`;

const BtnRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
  @media (max-width: 600px) {
    gap: 12px;
    margin-top: 18px;
  }
`;

const Button = styled.button`
  background: #232323;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 32px;
  font-size: 1.08rem;
  font-family: 'SF Pro', 'SUITE-Regular', sans-serif;
  cursor: pointer;
  width: 160px;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 0.95rem;
    width: 100px;
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
