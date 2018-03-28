import { Constants } from "../../common/Constants";

const addCandidates = candidateList => ({
  type: Constants.ADD_CANDIDATES,
  payload: candidateList
});


export default addCandidates;
