import React from 'react'


export const RenderFilters = ({
  filters,
  handleRemoveFilter
}) => (
  <div className="active-filters">
    {filters.map(filter => (
      <div className="filter-item" style={{marginTop:5, marginBottom:3, display:'flex',justifyContent:'center',alignItems:'center'}}>
        <span onClick={() => handleRemoveFilter(filter)} style={{cursor:'pointer', padding:5}}>X</span>
        <p style={{padding:5, marginBottom:0}}>{filter}</p>
      </div>
    ))}
  </div>
)
