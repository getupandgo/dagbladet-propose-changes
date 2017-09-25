import React from 'react'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'

const ParagraphEditor = ({ paragraph, onClick, onChange, userInput, name }) => (
  <Box margin={'small'} colorIndex={'light-2'}>
    <Paragraph>
      {paragraph}
    </Paragraph>
    <TextInput
      name={name}
      value={userInput}
      onDOMChange={onChange}
    />
    <Button
      label={'Send changes'}
      onClick={() => onClick(paragraph, userInput)}
    />
  </Box>
)

export default ParagraphEditor
