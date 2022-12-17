import './App.css';
import { Input, Button, Form } from 'semantic-ui-react';

const getSearchResults = (endpoint, data) => {
  data = {
    search: 'Pizza',
    diet: 'Vegan',
    allergen: ['Lactose'],
    ingredient: ['Tomato'],
  };

  console.log(data);
  fetch(`http://localhost:3001/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
    console.log(res.statusText);
  });
};

const searchElements = () => {
  const getFormData = () => {
    let searchBar = document.getElementById('searchBar').value;

    return { searchBar };
  };

  const handleSearch = () => {
    let data = getFormData();
    if (data.searchBar === '') {
      let form = document.getElementsByTagName('form')[0];
      form.reportValidity();
      return;
    }
    getSearchResults('search', data);
  };

  const handleSurprise = () => {
    let data = getFormData();
    getSearchResults('surprise', data);
  };

  return (
    <div id="searchFields">
      <Form>
        <Input id="searchBar" type="text" placeholder="Search..." required />
        <div id="searchButtons">
          <Button type="button" onClick={handleSearch} primary>
            Search
          </Button>
          <Button type="button" onClick={handleSurprise}>
            Surprise me!
          </Button>
        </div>
      </Form>
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
