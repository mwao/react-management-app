import logo from './logo.svg';
import './App.css';
import './component/Customer';
import Customer from './component/Customer';
const customers=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'961111',
  'gender':'남자',
  'job':'대학생'

},{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'이정현',
  'birthday':'951127',
  'gender':'여자',
  'job':'회사원'
},{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'메롱',
  'birthday':'??????',
  'gender':'?',
  'job':'무직'
}
]

function App() {
  return (
    customers.map(customers=>
      <Customer 
   name={customers.name}
   birthday={customers.birthday}
   gender={customers.gender}
   job={customers.job}
   id={customers.id}
   image={customers.image}></Customer>
      )
   
  );
}

export default App;
