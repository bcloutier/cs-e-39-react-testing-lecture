import List from './lecture/2_List';
import User from './lecture/3_User';
import CreateList from './lecture/4_CreateList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <List
          title="New List"
          items={['First item', 'Second item', 'Third item']}
        /> */}
        {/* <User /> */}

        <CreateList />
      </header>
    </div>
  );
}

export default App;
