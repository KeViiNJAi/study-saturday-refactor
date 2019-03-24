import axios from 'axios'

//ACTION TYPE
const SET_STUDENTS = 'SET_STUDENTS'

//ACTION CREATOR
const setAllStudents = (students) => ({
    type: SET_STUDENTS,
    students
})

//THUNKS
export const fetchStudents = () => async (dispatch) => {
    try {
        const {data} = await axios.get('/student')
        dispatch(setAllStudents(data))
    } catch (err) {
        console.error(err)
    }
}

//INITIAL STATE
const students = []

//SUB-REDUCER
const studentReducer = (state = students, action) => {
    switch (action.type) {
        case SET_STUDENTS:
            return action.students
        default:
            return state
    }
}

export default studentReducer
