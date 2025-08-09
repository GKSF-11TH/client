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
    padding-top: ${({ $isSessionStep }) =>
      $isSessionStep ? '18rem' : '25rem'};
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
  font-family:
    'SF Pro', 'SUITE-Regular', 'Syncopate', 'IBM Plex Mono', 'Be Okay',
    sans-serif;

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

  /* 세션 선택 단계일 때 모바일에서 높이 증가 */
  @media (max-width: 600px) {
    &.session-step {
      height: 65rem !important;
    }
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
  font-family: 'SF Pro', sans-serif;
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
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const Section = styled.div`
  margin-bottom: 3.2rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #919191;
  display: block;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, #222, #222) 1;
  color: #919191;
  font-size: 14px;
  padding: 8px 0;
  margin-bottom: 4px;
  outline: none;
  box-shadow: none;
  font-family: 'IBM Plex Mono', monospace;
  &::placeholder {
    color: #bbb;
    font-size: 14px;
    font-family: 'IBM Plex Mono', monospace;
  }
  &:focus {
    border-image: linear-gradient(90deg, #3a7bd5, #10d48d) 1;
    border-bottom: 2px solid;
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 12px 0;
    &::placeholder {
      font-size: 12px;
    }
  }
`;

const CheckboxGroup = styled.div`
  margin-bottom: 24px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'IBM Plex Mono', monospace;
  margin-bottom: 8px;
  cursor: pointer;
  color: #919191;

  @media (max-width: 600px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
  accent-color: #000000;
  width: 18px;
  height: 18px;
`;

const SessionDesc = styled.div`
  margin-left: 24px;
  margin-top: 4px;
  color: #aaa;
  font-size: 14px;
  font-family: 'IBM Plex Mono', monospace;
  line-height: 1.4;

  @media (min-width: 601px) {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }
`;

const BtnRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
  @media (max-width: 600px) {
    gap: 20px;
    margin-top: 40px;
  }
`;

const Button = styled.button`
  background: #232323;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 32px;
  font-size: 14px;
  font-family: 'IBM Plex Mono', monospace;
  cursor: pointer;
  width: 160px;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: #444;
  }
  &:disabled {
    background: #444;
    color: #aaa;
  }
  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 12px;
    width: 100px;
  }
`;

const SuccessOverlay = styled(Overlay)`
  background: rgba(0, 0, 0, 0.5);
`;

const SuccessModal = styled.div`
  background: linear-gradient(135deg, #2e3c5d 0%, #3a7bd5 100%);
  border-radius: 18px;
  max-width: 400px;
  width: 90vw;
  padding: 48px 32px 32px 32px;
  box-sizing: border-box;
  color: #fff;
  text-align: center;
  box-shadow: 0 0 32px #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'SF Pro', 'Syncopate', sans-serif;
`;

const CheckIcon = styled.div`
  font-size: 2.8rem;
  margin-bottom: 18px;
`;

const SuccessTitle = styled.div`
  font-size: 1.2rem;
  font-family: 'Syncopate', 'SF Pro', sans-serif;
  font-weight: 400;
  margin-bottom: 12px;
`;

const SuccessDesc = styled.div`
  font-size: 1rem;
  font-family: 'SF Pro', 'SUITE-Regular', sans-serif;
  margin-bottom: 24px;
`;

const Preapply = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    sessions: []
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // 세션 선택 단계일 때 모달 높이를 늘리기 위한 조건부 스타일
  const modalStyle = step === 2 ? { height: '900px !important' } : {};

  const sessionOptions = [
    {
      date: '9월 12일 금요일',
      items: [
        {
          key: 'A',
          label: '세션 A 11:00 - 12:30',
          desc: '지방소멸 극복; 지역사회 활성화와 연대로 살아나는 마을'
        },
        {
          key: 'B',
          label: '세션 B 11:00 - 12:30',
          desc: '지방소멸 극복; 지역사회 활성화와 연대로 살아나는 마을'
        },
        {
          key: 'C',
          label: '세션 C 11:00 - 12:30',
          desc: '지방소멸 극복; 지역사회 활성화와 연대로 살아나는 마을'
        }
      ]
    },
    {
      date: '9월 13일 토요일',
      items: [
        {
          key: 'D',
          label: '세션 D 11:00 - 12:30',
          desc: '지방소멸 극복; 지역사회 활성화와 연대로 살아나는 마을'
        },
        {
          key: 'E',
          label: '세션 E 11:00 - 12:30',
          desc: '지방소멸 극복; 지역사회 활성화와 연대로 살아나는 마을'
        }
      ]
    }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSessionChange = (key) => {
    setForm((prev) => ({
      ...prev,
      sessions: prev.sessions.includes(key)
        ? prev.sessions.filter((s) => s !== key)
        : [...prev.sessions, key]
    }));
  };

  const handleNext = () => {
    setStep(2);
  };

  const handlePrev = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://api.gksf11.com/preapply/', form);
      setShowSuccess(true);
    } catch (err) {
      alert('신청에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    if (onClose) onClose();
  };

  return (
    <>
      <Overlay $isSessionStep={step === 2}>
        <Modal style={modalStyle} className={step === 2 ? 'session-step' : ''}>
          <CloseBtn onClick={onClose} aria-label="닫기">
            ×
          </CloseBtn>
          <Title>사전 신청</Title>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <Section>
                  <Label htmlFor="name">1. 이름</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="이름을 입력해주세요"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Section>
                <Section>
                  <Label htmlFor="phone">2. 휴대전화</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="전화번호를 입력해주세요"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </Section>
                <Section>
                  <Label htmlFor="email">3. 이메일</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </Section>
                <BtnRow>
                  <Button type="button" onClick={onClose}>
                    이전
                  </Button>
                  <Button type="button" onClick={handleNext}>
                    다음
                  </Button>
                </BtnRow>
              </>
            )}
            {step === 2 && (
              <>
                <Section>
                  <Label>4. 참가 희망 세션을 선택해주세요</Label>
                  {sessionOptions.map((group) => (
                    <div key={group.date} style={{ marginBottom: '18px' }}>
                      <div
                        style={{
                          fontWeight: 400,
                          marginBottom: '8px',
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '14px'
                        }}
                      >
                        {group.date}
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '1px',
                          background: '#333',
                          marginBottom: '12px'
                        }}
                      />
                      <CheckboxGroup>
                        {group.items.map((item) => (
                          <div key={item.key} style={{ marginBottom: '16px' }}>
                            <CheckboxLabel>
                              <Checkbox
                                type="checkbox"
                                checked={form.sessions.includes(item.key)}
                                onChange={() => handleSessionChange(item.key)}
                              />
                              <span
                                style={{
                                  fontWeight: 400,
                                  fontFamily: "'IBM Plex Mono', monospace"
                                }}
                              >
                                {item.label}
                              </span>
                            </CheckboxLabel>
                            <SessionDesc>{item.desc}</SessionDesc>
                          </div>
                        ))}
                      </CheckboxGroup>
                    </div>
                  ))}
                </Section>
                <BtnRow>
                  <Button type="button" onClick={handlePrev}>
                    뒤로가기
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? '등록 중...' : '등록하기'}
                  </Button>
                </BtnRow>
              </>
            )}
          </form>
        </Modal>
      </Overlay>
      {showSuccess && (
        <SuccessOverlay>
          <SuccessModal>
            <CheckIcon>✓</CheckIcon>
            <SuccessTitle>신청이 완료되었습니다</SuccessTitle>
            <SuccessDesc>포럼 소개 홈페이지를 더 둘러볼까요?</SuccessDesc>
            <Button onClick={handleSuccessClose}>홈으로 이동하기</Button>
          </SuccessModal>
        </SuccessOverlay>
      )}
    </>
  );
};

export default Preapply;
