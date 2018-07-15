import { connect } from "react-redux";
import QuizQuestion from "../components/QuizQuestion";
import { fetchQuestionFromAPI } from "../actions";

const mapStateToProps = reduxState => {
  console.log("Step 6: calling mapStateToProps");
  return {
    question: reduxState.question
  };
};

const mapDispatchToProps = dispatch => {
  console.log("Step 2: getting action creator");
  return {
    fetchQuestion: () => dispatch(fetchQuestionFromAPI())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizQuestion);
