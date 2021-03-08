import './App.css';
import { Component } from 'react'; 
import Customer from "./components/Customer";

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '김은숙',
    'birth': '940610',
    'gender': '여자',
    'job': '취준생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김은숙',
    'birth': '940610',
    'gender': '여자',
    'job': '취준생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김은숙',
    'birth': '940610',
    'gender': '여자',
    'job': '취준생'
  },
]



class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map( customer => {
            return(
              <Customer 
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birth={customer.birth}
                gender={customer.gender}
                job={customer.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
