import React, { useState } from 'react';
import { Input } from 'antd';
import { debounce } from 'lodash';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = debounce((value) => {
    onSearch(value);
  }, 300);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div 
    style={{
      marginBottom:'2rem',
      display: 'flex',
      justifyContent:'center'
    }}>

      <Input
        placeholder="Search by Applicant ID"
        value={searchTerm}
        onChange={onChange}
        style={{
          width: '25%',
          height: '40px',
          padding: '3px',
          fontSize: '16px',
          border: '1px solid #ccc',
          marginBottom:'1rem',
          textAlign:'center'
          
        }}
      />
    </div>
  );
};

export default SearchBar;
