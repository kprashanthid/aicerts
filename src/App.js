import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/Navbar';
import Navitem from './components/Navitem';
import Corousel from './components/Corousel';
import EventTimer from './components/EventTimer';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Container fluid className="custom-container" >
      <Row>
        <Col xs={3} sm={3} className="nav-elements1"><Navbar/></Col>
        <Col xs={6} sm={6} className="nav-elements2"><Navitem/></Col>
        <Col xs={3} sm={3} className="nav-elements3">
          <button className='nav-button' >Get Certified</button>
        </Col>
      </Row>
    </Container>
    <Corousel/>
    <h1 className='coro-head'>AI CERTS EVENT</h1>
    <br/> <br/> <br/> <br/> <br/>
    <div className='event'>
      <h1 >Countdown to Event</h1>
      <EventTimer eventDate="2024-06-08T00:00:00" />
    </div>
    <Footer/>
    <div className='coro-head1'></div>
    </>
  );
}

export default App;
