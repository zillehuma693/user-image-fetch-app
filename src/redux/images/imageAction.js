const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
export const fetchimagesSuccess=(images,data)=>{
    
    return{
        type: FETCH_IMAGES_SUCCESS,
        title:data,
        payload:images
    }
}