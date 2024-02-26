import React from "react";

const ChatList = () => {
  const ChatComponent: React.FC = () => {
    return (
      <div>
        <img src="프로필" alt="프로필 사진" />
        <div>
          <div>보노보노</div>
          <div>
            안녕하세요 보노보노 사무소 입니다 어떤 상담으로 오셨나요?안녕하세요
            보노보노 사무소 입니다 어떤 상담 어짜구저짜구!!
          </div>
        </div>
        <div>1시간</div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div>대화 기록</div>
        <div>더보기 </div>
      </div>
      <ChatComponent />
      <ChatComponent />
    </div>
  );
};

export default ChatList;
