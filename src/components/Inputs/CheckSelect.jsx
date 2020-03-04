import React, { useState, useEffect } from 'react'

const optionsData = [
  { value: "videos", label: "Videos" },
  { value: "courses", label: "Courses" },
  { value: "articles", label: "Articles" },
  { value: "projects", label: "Projects" },
]

const CheckOption = ({ innerProps }) => {
  return (
    <div className="check-select-option">
      {/* <components.Option {...innerProps}> */}
        <input type="checkbox" checked={innerProps.isSelected} onChange={() => null} />
        <label style={{paddingLeft:4}}>{innerProps.value}</label>
      {/* </components.Option> */}
    </div>
  )
}

export const CheckSelect = ({
  // options,
  // active,
  // onAdd,
  // onRemove
}) => {
  const [selectedOption, setSelectedOption] = useState([
    optionsData[0],
    optionsData[1]
  ])
  const [featuresOptions, setFeaturesOptions] = useState(null)

  useEffect(() => {
    const tempOptions = optionsData;
    tempOptions.map(option => {
      option.isFeatureSelected = false;
    })
    setFeaturesOptions(optionsData)
  }, [])

  const handleChange = (eSelectedOption) => {
    console.log('onChange:', eSelectedOption)
    setSelectedOption(eSelectedOption)
  }

  return (
    <div>
      select with options
    </div>
  )

  // const CheckboxList = () => (
  //   <div className="checkboxes-inner">
  //     checklist
  //   </div>
  // )

  // return (
  //   <Select
  //     isMulti
  //     name="contentTypes"
  //     closeMenuOnSelect={false}
  //     hideSelectedOptions={false}
  //     value={selectedOption}
  //     defaultValue={[optionsData[0], optionsData[1]]}
  //     onChange={handleChange}
  //     options={optionsData}
  //     components={{ Option: CheckOption }}
  //   />
  // )
}