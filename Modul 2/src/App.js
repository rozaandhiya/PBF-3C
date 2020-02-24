import React from 'react';
import logo from './logo.svg';
import PP from './joker.jfif'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function Biodata() {
  return (
    <center>
      <div>
        <img src={PP} alt="logo" className= "roudedCircle"/>
      </div>
      <br/>
      <br/>
      <div>
        <h3>Nama  : Rozaan Dhiya Ulhaq</h3>
        <h3>Kelas  : TI-3C</h3>
      </div>
    </center>
  )
}

export default Biodata;
