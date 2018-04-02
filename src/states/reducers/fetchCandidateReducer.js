import {
    FETCH_CANDIDATE_BEGIN,
    FETCH_CANDIDATE_SUCCESS,
    FETCH_CANDIDATE_FAILURE
} from '../actions/fetchCandidateAction';

const initialState = {
    list: [],
    loading: false,
    error: null
};

const fetchCandidateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CANDIDATE_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_CANDIDATE_SUCCESS":
            return {
                ...state,
                loading: false,
                list: action.payload.list
            };
        case "FETCH_CANDIDATE_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                list: []
            };
        case "UPDATE_DASHBOARD":
            let updateRowData = state.list.map(function (filterData) {
                if (filterData.id === action.payload.id ) {
                    if(action.payload.formName === 'L1'){
                        filterData.l1seniority = action.payload.l1seniority;
                        filterData.feedbackL1 = action.payload.feedbackL1;
                        filterData.l1evaluate = action.payload.l1evaluate;
                    }else{
                        filterData.gkseniority = action.payload.gkseniority;
                        filterData.feedbackGK = action.payload.feedbackGK;
                        filterData.gkevaluate = action.payload.gkevaluate;
                    }                    
                }
            });

        default:
            return state;
    }
};
export default fetchCandidateReducer;
