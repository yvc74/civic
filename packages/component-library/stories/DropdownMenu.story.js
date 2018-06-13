import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, array, select, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Dropdown } from '../src';
import { checkA11y } from '@storybook/addon-a11y';

const displayName = Dropdown.displayName || 'Dropdown';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;


const label = 'Options';
const options = [
  object('option 1', { value: '0', label: 'David' }, 'group-id2'),
  { value: '1', label: 'Daniel' },
  { value: '2', label: 'Last' },
  { value: '3', label: 'Name' },
];
const defaultValue = '0';

const groupId = 'Group-ID1';

const value = select(label, options, defaultValue, groupId);

const demoCode = () => (
  <Dropdown
    dispatch={dispatch => action => dispatch(action)}
    reduxAction={payload => console.log({ type: 'ACTION', payload })}
    options={array('options', options)}
  />
);

class MultiSimpleValueDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedValue: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selectedValue) {
    action('changed', selectedValue);
    this.setState({ selectedValue });
  }
  render() {
    return (<Dropdown
      value={this.state.selectedValue}
      onChange={this.handleChange}
      multi
      options={array('options', options)}
    />);
  }
}

// const propDocs = { inline: true, propTables: [Dropdown] };

export default () => storiesOf(displayName, module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add(
    title,
    (demoCode)
  )
  .add(
    'multiple select returns simple value',
  () => { return <MultiSimpleValueDemo />; }
  );
