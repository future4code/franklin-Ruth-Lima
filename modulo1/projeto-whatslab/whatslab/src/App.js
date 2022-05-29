import './reset.css';
import { MessageList } from './components/MessageList';
import { SendMessage } from './components/SendMessage';
import styled from 'styled-components';

const MainContainer = styled.div`
  @media (max-width: 425px) {
    background-color: lightgray;
    width: 100vw;
    height: 130vw;
  }
`

function App() {
  return (
    <MainContainer>
      <MessageList />
      <SendMessage/>
    </MainContainer >
   
  );
}

export default App;
