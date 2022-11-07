import React from 'react'

import Heading from '../components/Heading'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: 'This is just a headline',
    color: { control: 'color' },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args} />

export const Regular = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Regular.args = {
  highlightFirstPhase: false,
  label: 'This is just a headline',
}

export const Highlight = Template.bind({})
Highlight.args = {
  highlightFirstPhase: false,
  label: 'This is just a headline',
}
