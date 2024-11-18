import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import Malenia from '../assets/malenia.jpg';

const StyledApp = styled.div`
  // Your style here
`;

const Heading1 = styled.h1`
  color: red;
  font-size: 100px;
  background-color: powderblue;
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="montana" /> */}
      <Heading1>Lucas ta upando o boss de tando morrer </Heading1>
      <img src={Malenia} />
      <form>
        <label>Death Counting:</label>
        <br />
        <input type="text" id="fname" name="fname" value={99}/>
        <br />
        <label>Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" />
      </form>
    </StyledApp>
  );
}

export default App;
