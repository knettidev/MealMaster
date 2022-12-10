import './App.css';
import { Input, Button } from 'semantic-ui-react';

const getSearchResults = (endpoint) => {
  fetch(`http://localhost:3001/${endpoint}`).then((res) => {
    console.log(res.statusText);
  });
};

const searchElements = () => {
  return (
    <div id="searchFields">
      <Input id="searchBar" type="text" placeholder="Search..." />
      <div id="searchButtons">
        <Button
          type="button"
          onClick={() => getSearchResults('search')}
          primary
        >
          Search
        </Button>
        <Button type="button" onClick={() => getSearchResults('surprise')}>
          Surprise me!
        </Button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>MealMaster</h1>
      {searchElements()}
    </div>
  );
}

export default App;
