import { v4 as uuidv4 } from 'uuid';
const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
let State = []


const imageReducer = (initialstate = State, action) => {


  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      State= [...State,
        {
        id: uuidv4(),
        title: action.title,
        loading: false,
        images: action.payload,
        error: ''}
      ]
        
      return State
    default: {
      return initialstate
    }
  }
}
export default imageReducer