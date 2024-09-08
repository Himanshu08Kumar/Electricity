import React, { useState } from 'react';

const DateFilter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <div style={{
      marginBottom:'2rem',
      display: 'flex',
      justifyContent:'center'
    }}>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={{
          width: '8%',
          height: '40px',
          padding: '3px',
          fontSize: '16px',
          border: '1px solid #ccc',
          marginRight:'20px',
          borderRadius:'1rem'
          
        }}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        style={{
          width: '8%',
          height: '40px',
          padding: '3px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius:'1rem',
          
        }}
      />
      <button 
      onClick={handleFilter}
      style={{
        marginLeft:'15px',
        fontWeight:'800px',
        background:'#4361ee',
        color:'white',
        width: '8%',
        height: '40px',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius:'10px'
      }}
      >
        Filter by Date</button>
    </div>
  );
};

export default DateFilter;
