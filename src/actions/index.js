export function loadQuestion(json) {
  console.log("Step 4 - creating RECEIVE_QUESTION");
  // console.log(json);
  return {
    type: "RECEIVE_QUESTION",
    question: json
  };
}

export function fetchQuestionFromAPI() {
  return function(dispatch, getState) {
    console.log("Step 3: calling fetch");
    return fetch(`https://opentdb.com/api.php?amount=1`)
      .then(response => response.json())
      .then(json => {
        dispatch(loadQuestion(json.results));
        // console.log(json.results);
      })
      .catch(error => console.log("Try question search again"));
  };
}
