import React from 'react';
import {Provider} from 'react-redux';
import AddItem from './components/addItem';
import ListItems from './components/listItems';
import SelectedItem from './components/selectedItem';

const App = ({store}) => {
  return (
      <Provider store={store}>
        <section>
          <AddItem />
          <ListItems />
          <SelectedItem />
        </section>
      </Provider>  
  )
}

export default App;
