import React, {useState, useEffect} from 'react'
import socketIOClient from 'socket.io-client'
import {List, Card, TableNumber, Status} from './styles'

const statuses ={
  PENDING: 'PENDENTE',
  PREPARING: 'PREPARANDO',
  DONE: 'FINALIZADO'
}

export default function Order(){
  const [orders, setOrders]=useState([]);

  useEffect(()=> {
    (async()=>{
      const res = await fetch('http://192.168.0.104:3001/orders')
      const orders = await res.json()
      setOrders(orders)
    })();

    const socket = socketIOClient('http://192.168.0.104:3001', {
      transports: ['websocket']
    })

    socket.on('newOrder', (order)=>{
      setOrders(
        (prevState)=>[order, ...prevState]
      )
    })
    
    socket.on('statusChange', (updateOrder)=>{
      setOrders((prevState) =>(
        prevState.map((order)=>(
          order._id === updateOrder._id ? updateOrder : order
        ))
      ))
    })
  }, []);
  
  return(
    <List 
      data={orders}
      keyExtractor={(order) => order._id}
      renderItem={({item: order})=>(
        <Card status={order.status}>
          <TableNumber status={order.status}>#{order.table}</TableNumber>
          <Status status={order.status}>{statuses[order.status]}</Status>
        </Card>
      )}
    />
  )
}