import React from 'react'
import styled from 'styled-components'

const StyledFilterItem = styled.div`
  margin-top: 5px;
  margin-bottom: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  .close {
    cursor: pointer;
    padding: 5;
    //line-height: 1.2;
  }

  .filter-item-text {
    padding: 5;
    margin-bottom: 0;
  }
`

export const RenderFilters = ({
  filters,
  handleRemoveFilter
}) => (
  <div className="active-filters">
    {filters.map((filter, index) => (
      <StyledFilterItem className="filter-item" key={index}>
        <span className="close" onClick={() => handleRemoveFilter(filter)}>X</span>
        <p className="filter-item-text">{filter}</p>
      </StyledFilterItem>
    ))}
  </div>
)
