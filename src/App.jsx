import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import SearchBar from './components/SearchBar';
import DateFilter from './components/DateFilter';
import EditConnection from './components/EditConnection';
import { fetchData } from './utils/dataService'; 
import { message, Spin } from 'antd';

const App = () => {
  const [connections, setConnections] = useState([]);
  const [filteredConnections, setFilteredConnections] = useState([]);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData(); // Fetch data from the Excel sheet
        setConnections(data);
        setFilteredConnections(data); // Initially, all data is displayed
        setLoading(false);
      } catch (error) {
        message.error('Error loading data');
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSearch = (applicantId) => {
    if (!applicantId) {
      setFilteredConnections(connections); // If search term is empty, show all data
      return;
    }
  
    const searchResult = connections.filter(
      (connection) => connection.ID_Number && connection.ID_Number.toString() === applicantId
    );
    
    setFilteredConnections(searchResult);
  };
  const handleFilterByDate = (startDate, endDate) => {
    if (!startDate || !endDate) {
      setFilteredConnections(connections);
      return;
    }
  
    // Parse the dates from the input
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Filter connections by date range
    const filtered = connections.filter((connection) => {
      const date = new Date(connection.Date_of_Application);
      return date >= start && date <= end;
    });
  
    setFilteredConnections(filtered);
  };

  const handleEditSave = (updatedConnection) => {
    console.log("Updated Connection:", updatedConnection); 
    const updatedConnections = connections.map((connection) =>
      connection.ID === updatedConnection.ID ? updatedConnection : connection
    );
    setConnections(updatedConnections);
    setFilteredConnections(updatedConnections);
    setSelectedConnection(null);
    message.success('Connection updated successfully!');
  };
  

  const handleEditClick = (connection) => {
    setSelectedConnection(connection);
    setModalVisible(true);
  };

  return (
    <div className="app-container">
      <h1
      style={{
        textAlign:'center',
        color:'#023047',
        fontSize:'42px',
        fontWeight:'700',
        borderBottom:'1px solid #023047',
        margin:'2rem 25%'
      }}
      >
        Electricity Connection Management
        </h1>
      <SearchBar onSearch={handleSearch} />
      <DateFilter onFilter={handleFilterByDate} />

      {loading ? (
        <Spin tip="Loading data..." />
      ) : (
        <DataTable connections={filteredConnections} onEdit={handleEditClick} />
      )}

      {selectedConnection && (
        <EditConnection
          visible={modalVisible}
          connection={selectedConnection}
          onSave={handleEditSave}
          onCancel={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default App;
