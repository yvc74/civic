import React, { PropTypes } from 'react';
import Select from 'react-select';
import { css } from 'emotion';
import 'react-select/dist/react-select.css';

const dropdownClass = css`
  background-color: #FFF;
  cursor: pointer;
  font-size: 15px;
  margin: 10px;
`;

const Dropdown = ({
  options,
  onChange,
  value,
  clearable,
  searchable,
  disabled,
  placeholder,
}) => (
  <Select
    className={dropdownClass}
    arrowRenderer={null}
    multi={false}
    placeholder={placeholder}
    options={options}
    onChange={onChange}
    value={value}
    clearable={clearable}
    searchable={searchable}
    disabled={disabled}
  />
  );

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,  // eslint-disable-line react/forbid-prop-types
  clearable: PropTypes.bool,
  searchable: PropTypes.bool,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  clearable: false,
  searchable: true,
  placeholder: 'Select...',
  disabled: false,
};

export default Dropdown;
