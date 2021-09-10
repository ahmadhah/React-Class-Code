import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <H1>styled-component Example</H1>
      <Header>
        <Title>Styled Component</Title>
        component Example
      </Header>
      <FooterText>Ahmad Hannan</FooterText>

    </div>
  );
}

export default App;

const FooterText = styled.h5`
font-weight: bold;
font-size:100px;
`

const H1 = styled.h1`
  color: navy;
  font-family: Arial;
  background-color:green;
`
const Title = styled.h2`
padding: 20px;
border:3px solid Green;
background-color:pink;
color:whtie;
`
const Header = styled.div`
  min-width: 80%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted navy;
  background-color: navy;
`