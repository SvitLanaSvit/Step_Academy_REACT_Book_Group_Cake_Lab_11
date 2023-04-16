import './App.css';
import Cake from './Cake';
import Group from './MusicGroup';

function App() {
  return (
      <>
        <h1>'The Knife of Never Letting Go' by Patrick Ness</h1>
        <img src='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/11/5/1446736201287/84948ef9-5611-4d57-9130-fbe32b3177da-390x600.jpeg?width=300&quality=45&auto=format&fit=max&dpr=2&s=676aea4cc71def1e0ef229b244e3e500' alt='The Knife of Never Letting Go' className='photoBook'/>
        <p>Author: Patrick Ness</p>
        <p>Genre: Young Adult Science Fiction</p>
        <p>Number of pages: 496</p>
        <h2>Reviews:</h2>
        <ul>
          <li>"A heart-wrenching and thought-provoking read." - The Guardian</li>
          <li>"One of the best YA books I've ever read." - John Green</li>
          <li>"An unforgettable journey that will stay with you long after you finish the book." - BookPage</li>
        </ul>
        <hr/>
        <Group></Group>
        <hr/>
        <Cake></Cake>
      </>
  );
}

export default App;
