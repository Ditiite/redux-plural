import { combineReducers } from 'redux';
import { courseReducer as courses } from './courseReducer';
import { authorReducer as authors } from './authorReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallInProgress
});

export default rootReducer;