import './assets/app.css'
import GlobalStyle from './assets/GlobalStyle';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Routes from './Routes';
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Layout>
          <AppHeader />
          <Content>
            <Routes />
          </Content>
          <AppFooter />
        </Layout>
      </div>
    </>
  );
}

export default App;
