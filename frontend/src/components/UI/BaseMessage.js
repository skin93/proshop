import React from "react"
import { Alert } from "react-bootstrap"

const BaseMessage = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

BaseMessage.defaultProps = {
  variant: "info",
}

export default BaseMessage
