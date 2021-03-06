import * as APIUtil from '../util/answers_api_util';

export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_SINGLE_ANSWER = 'RECEIVE_SINGLE_ANSWER';

export const receiveAllAnswers = (answers) => {

  return {
    type: RECEIVE_ALL_ANSWERS,
    answers
  }

}

export const receiveSingleAnswer = (answer) => {

  return {
    type: RECEIVE_SINGLE_ANSWER,
    answer
  }

}

export const fetchAllAnswers = (params) => (dispatch) => {

  return APIUtil.fetchAllAnswers(params)
                .then((answers) => {
                  dispatch(receiveAllAnswers(answers));
                });

}

export const fetchSingleAnswer = (params) => (dispatch) => {

  return APIUtil.fetchSingleAnswer(params)
                .then((answer) => {
                  dispatch(receiveSingleAnswer(answer));
                });

}

export const editSingleAnswer = (params) => (dispatch) => {

  return APIUtil.updateSingleAnswer(params)
                .then((answer) => {
                  dispatch(receiveSingleAnswer(answer));
                });

}

export const createAnswer = (answer) => (dispatch) => {

  return APIUtil.createAnswer(answer)
                .then((answer) => {
                  dispatch(receiveSingleAnswer(answer));
                });

}
