import './assets/app.css'
import GlobalStyle from './assets/GlobalStyle';
import MovieHeader from './components/common/MovieHeader';
import MovieFooter from './components/common/MovieFooter';
import Routes from './Routes';
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Layout>
          <MovieHeader />
          <Content>
            <Routes />
          </Content>
          <MovieFooter />
        </Layout>
      </div>
    </>
  );
}

export default App;
