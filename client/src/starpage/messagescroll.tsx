import styled from "styled-components";

export type ScrollProps = {
  messages: string[];
};

type MessageProps = {
  message: string;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return <MessageDiv>{message}</MessageDiv>;
};

const MessageScroll: React.FC<ScrollProps> = ({ messages }) => {
  return (
    <ScrollDiv>
      {messages.length === 0 ? (
        <MessageDiv>
          No messages yet - be the first to plant your flag!
        </MessageDiv>
      ) : (
        messages.map((msg) => <Message message={msg} />)
      )}
    </ScrollDiv>
  );
};

export default MessageScroll;

const ScrollDiv = styled.div`
  min-width: 50%;
  align-self: center;
  border-style: solid;
  border-radius: 6px;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  text-align: left;
  max-height: 8rem;
`;

const MessageDiv = styled.div`
  padding: 10px;
  font-size: 1em;
`;
