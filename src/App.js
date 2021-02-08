import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Customer';
import Customer from './component/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles=(theme)=>({
  root:{
    width:'100%',
    marginTop:theme.spacing(3),
    overflowX:'auto'
  },
  table:{
    minWidth:1080
  },
})

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

class App extends React.Component{
  render(){
    const {classes}=this.props;
  return (
    <div>
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>

        </TableHead>
        <TableBody>
{customers.map(customers=>{return(
      <Customer 
   name={customers.name}
   birthday={customers.birthday}
   gender={customers.gender}
   job={customers.job}
   id={customers.id}
   image={customers.image}></Customer>)
     } )}
        </TableBody>
      </Table>
      </Paper>
    </div>
  );
  }
}


export default withStyles(styles)(App);
