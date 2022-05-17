export const state = () => ({
    prev_index:'',
    curr_index:'',
    matched_values:[],
    reset:false,
    counter:0,
})

export const mutations = {
     setIndex(state,value){
        if(state.prev_index == '') 
        {
            state.prev_index = value;
        } 
        else 
        {
            state.curr_index = value;
        }    
        if(state.prev_index === state.curr_index)  {
                state.matched_values.push(state.curr_index);
                state.prev_index = '';
                state.curr_index = '';
        } 

        if(state.curr_index != '' && state.prev_index != state.curr_index)
        {
                state.prev_index = '';
                state.curr_index = '';
                state.reset = true;
        }    

     },
     resetValue(state){
         state.reset = false;
     }
}

export const getters = {
    getFlipValue(state){
        if(state.curr_index != '' && state.curr_index != state.prev_index)
            return false;
        else 
            return true;    
    },

    getMatchValues(state){
        return state.matched_values;
    },

    getResetValue(state){
        if(state.curr_index == '' && state.prev_index == '' && state.reset == true){
            return true;
        } else {
            return false;
        }
    }
}