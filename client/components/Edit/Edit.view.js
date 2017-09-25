import React from 'react'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Button from 'grommet/components/Button'

const Edit = ({ originalText, userText, onAcceptClick, onRejectClick, id }) => (
  <Box margin={'small'} colorIndex={'light-2'}>
    <Paragraph>
      {originalText}
    </Paragraph>
    <Paragraph>
      {userText}
    </Paragraph>
    <Button
      label={'Accept change'}
      onClick={() => onAcceptClick(id)}
    />
    <Button
      label={'Reject change'}
      onClick={() => onRejectClick(id)}
    />
  </Box>
)

export default Edit
