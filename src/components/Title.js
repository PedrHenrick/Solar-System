import React from "react";

class Title extends React.Component {
  render() {
    const title = this.props.headline;
    return (
      <h2>{ title }</h2>
    )
  }
}

export default Title