import GlobalStyle from './styles/GlobalStyle'
import {Container} from './styles/index'

import Orders from './components/Orders'

import logo from './images/logo.svg'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <img src={logo} alt="EzOrders" />
        <Orders />
      </Container>
    </>
  );
}

export default App;
