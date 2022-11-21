import './App.css';
import {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';

function App() {
  const [showModal, setShowModals] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on momo farm", id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModals(false)
  }
  
  const subtitle = "All the latest event in Marioland"

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle}/>
      {showEvents && (
      <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>
      )}
      {!showEvents && (
      <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>
      )}
   
      {showEvents && <EventList events={events} handleClick={handleClick}/>}
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal &&
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Error odit nam et reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, 
            laborum, quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
        </Modal>
      }
      <div>
        <button onClick={() => setShowModals(true)}>show modal</button>
      </div>
    
    </div>
  );
}

export default App;
