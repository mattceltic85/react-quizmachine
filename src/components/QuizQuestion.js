import React from "react";

class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Step 1: calling fetchQuestion");
    const question = this.props.fetchQuestion();
  }

  render() {
    return <div>Questions</div>;
  }
}

export default QuizQuestion;
