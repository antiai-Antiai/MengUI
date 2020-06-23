import React from 'react';
import Button, { ButtonType, ButtonSize } from  './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button onClick={(e) => {e.preventDefault();alert('ddd')}}> Default </Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}> Danger </Button>
      <Button disabled> Hello </Button>
      <Button size={ButtonSize.Small}>small</Button>
      <Button size={ButtonSize.large}>Large</Button>
      <Button btnType={ButtonType.Link} href={'http://www.baidu.com'} target="_blank"> Link </Button>
      <Button btnType={ButtonType.Link} href={'http://www.baidu.com'} disabled> Disabled Link </Button>
    </div>
  );
}

export default App;
