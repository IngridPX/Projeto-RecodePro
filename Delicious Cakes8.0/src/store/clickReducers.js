import Bolos from '../database/Bolos';

const initialState = [...Bolos];

export default(state = initialState, action) =>{
    return state;
}