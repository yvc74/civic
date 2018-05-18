import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Dropdown } from '../src';
import { checkA11y } from '@storybook/addon-a11y';
import {
  withKnobs,
  text, object, array,
} from '@storybook/addon-knobs';

class StatefulDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.options[0].value };
  }

  render() {
    return (
      <Dropdown
        onChange={option => this.setState({ value: option.value })}
        options={this.props.options}
        value={this.state.value}
      />
    );
  }
}

export default () => storiesOf(Dropdown.displayName, module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic usage', () => {
    const options = object('options', [
      { value: 'Portland, OR', label: 'Portland, OR' },
      { value: 'Seattle, WA', label: 'Seattle, WA' },
      { value: 'San Francisco, CA', label: 'San Francisco, CA' },
    ]);

    return <StatefulDropdown options={options} />;
  });
