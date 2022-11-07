import React from 'react'
import './headingregular.scss'
import PropTypes from 'prop-types'

const Index = ({ label, color, highlightFirstPhase }) => {
  return (
    <h1 style={{ color: color }} className="heading">
      {label.split(' ').map((phase, i) => (
        <span
          key={i}
          className={!i && highlightFirstPhase ? 'highlight-first' : ''}
        >
          {phase + ' '}
        </span>
      ))}
    </h1>
  )
}

export default Index

Index.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  highlightFirstPhase: PropTypes.bool,
}
Index.defaultProps = {
  color: '#37496B',
  highlightFirstPhase: false,
}
