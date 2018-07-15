function loadQuestion(state = [], action) {
  console.log(state);
  switch (action.type) {
    case "RECEIVE_QUESTION":
      console.log("action log", action.question);
      return [...state, state.action.question];
    default:
      console.log("Step 5 - setting the question in state");
      return state;
  }
}

export default loadQuestion;
