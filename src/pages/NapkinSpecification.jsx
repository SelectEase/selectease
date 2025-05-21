import React from 'react';
import styled from 'styled-components';

// Main container for the Pros and Cons section
const ProsConsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap; 
  gap: 24px; 
  justify-content: center; 
  padding: 2rem; 
  background-color: #fff; 
  border-radius: 12px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); 

  @media (min-width: 768px) {
    justify-content: space-between; 
    
  }
`;

// Individual column for Pros or Cons
const ProsConsColumn = styled.div`
  flex: 1;
  min-width: 300px; 
  padding: 24px; 
  background: #fff;
  border-radius: 8px; 
  
  // Adding the right border for the first column (Pros)
  &:first-child {
    @media (min-width: 768px) {
      border-right: 1px solid #e0e0e0;
      padding-right: 36px; 
      margin-right: 36px;
    }
  }

  
  
  @media (min-width: 768px) {
    &:last-child {
      padding-left: 0; 
    }
  }
`;

const ColumnHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
  text-align: left; 
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px; 
  position: relative; 
  &:last-child {
    margin-bottom: 0; 
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0; 
  width: 24px;
  height: 24px;
  border-radius: 6px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px; 
  font-size: 1rem;
  font-weight: bold;
  color: #fff; // White icon color
  background-color: ${props => (props.type === 'pros' ? '#FFC107' : '#dc3545')}; // Orange for pros, red for cons
  border: 1px solid ${props => (props.type === 'pros' ? '#FFC107' : '#dc3545')}; // Matching border
`;

const ItemContent = styled.div`
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
`;

const ItemText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0; 
  line-height: 1.4; 
`;

const ItemAuthorDate = styled.span`
  font-size: 0.85rem;
  color: #777;
  margin-top: 4px; 
`;

// Example data structure (you'll replace this with your actual props)
const mockData = {
  pros: [
    { text: 'Strong automation capabilities', author: 'Jane Doe', date: 'August 16, 2024' },
    { text: 'Easy integrations with major platforms', author: 'Jane Doe', date: 'August 16, 2024' },
    { text: 'Real-time anomaly detection', author: 'Jane Doe', date: 'August 16, 2024' },
  ],
  cons: [
    { text: 'Basic customization options', author: 'Jane Doe', date: 'August 16, 2024' },
    { text: 'Less effective on smartphones', author: 'Jane Doe', date: 'August 16, 2024' },
    { text: 'Limited advanced analytics', author: 'Jane Doe', date: 'August 16, 2024' },
  ],
};

const  NapkinSpecification = ({ prosData = mockData.pros, consData = mockData.cons }) => {
  return (
    <ProsConsContainer>
      <ProsConsColumn>
        <ColumnHeading>Pros</ColumnHeading>
        {prosData.map((item, index) => (
          <ListItem key={index}>
            <IconWrapper type="pros">+</IconWrapper>
            <ItemContent>
              <ItemText>{item.text}</ItemText>
              <ItemAuthorDate>{item.author} - {item.date}</ItemAuthorDate>
            </ItemContent>
          </ListItem>
        ))}
      </ProsConsColumn>

      <ProsConsColumn>
        <ColumnHeading>Cons</ColumnHeading>
        {consData.map((item, index) => (
          <ListItem key={index}>
            <IconWrapper type="cons">-</IconWrapper>
            <ItemContent>
              <ItemText>{item.text}</ItemText>
              <ItemAuthorDate>{item.author} - {item.date}</ItemAuthorDate>
            </ItemContent>
          </ListItem>
        ))}
      </ProsConsColumn>
    </ProsConsContainer>
  );
};

export default NapkinSpecification;