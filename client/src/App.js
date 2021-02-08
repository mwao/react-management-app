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

class App extends React.Component{
  state={
    customers:""
  }
  componentDidMount(){
    this.callApi().then(res=>this.setState({customers:res}))
    .catch(err=>console.log(err));
  }
  callApi=async()=>{
    const response=await fetch('/api/customers');
    const body=await response.json();
    return body;
  }
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
{this.state.customers?this.state.customers.map(customers=>{return(
      <Customer 
   name={customers.name}
   birthday={customers.birthday}
   gender={customers.gender}
   job={customers.job}
   id={customers.id}
   image={customers.image}></Customer>)
     } )
     :""}
        </TableBody>
      </Table>
      </Paper>
    </div>
  );
  }
}


export default withStyles(styles)(App);
