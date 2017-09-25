import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import {loadParagraphs} from '../../store/paragraphs/paragraphs.actions'
import ParagraphEditor from '../Paragraph/Paragraph.view'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'

class ParagraphList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.onChange = this.onChange.bind(this)
    this.onSendClick = this.onSendClick.bind(this)
  }
  render () {
    return <Section size={'xlarge'}>
      <Heading tag={'h3'}>
        Make your changes!
      </Heading>

      <Heading tag={'h4'}>
        {this.props.title}
      </Heading>
      <Box>
        {
          this.props.paragraphs.map((paragraph, i) =>
            <ParagraphEditor
              key={`k-${i}`}
              name={`k-${i}`}
              paragraph={paragraph}
              onClick={this.onSendClick}
              onChange={(e) => this.onChange(e)}
              userInput={this.state[`k-${i}`]}
            />
          )
        }
      </Box>
    </Section>
  }
  componentDidMount () {
    this.props.loadParagraphs(this.props.location.query.articleUrl)
      .catch(err => console.error(err))
  }
  onSendClick (originalText, userText) {
    return request
      .post('http://localhost:3000/api/edit')
      .send({
        articleUrl: this.props.title,
        originalText,
        userText
      })
      .end((err, res) => {
        console.log(err, res)
      })
  }
  onChange (e) {
    this.setState({ [e.target.name]: e.target.value }) }
}

const mapStateToProps = state => {
  const {paragraphs} = state
  return ({
    title: paragraphs.title,
    paragraphs: paragraphs.paragraphs
  })
}

export default connect(mapStateToProps, { loadParagraphs })(ParagraphList)
