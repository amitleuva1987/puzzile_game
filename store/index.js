export const state = () => ({
    prev_index:'',
    curr_index:'',
    matched_values:[],
    reset:false,
    counter:0,
    cards:8,
    start_timer:false,
})

export const mutations = {
     reset_all_values(state){
        state.prev_index='';
        state.curr_index='';
        state.matched_values=[];
        state.reset=false;
        state.counter=0;
        state.cards=8;
        state.start_timer=false;
     },

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
                state.counter++;
                state.prev_index = '';
                state.curr_index = '';
        } 

        if(state.curr_index != '' && state.prev_index != state.curr_index)
        {
                state.prev_index = '';
                state.curr_index = '';
                state.counter++;
                state.reset = true;
        }    

     },
     resetValue(state){
         state.reset = false;
     },

     setTimer(state){
        state.start_timer = true;
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

    getMatchcount(state){
        return state.matched_values.length;
    },

    getResetValue(state){
        if(state.curr_index == '' && state.prev_index == '' && state.reset == true){
            return true;
        } else {
            return false;
        }
    },

    getCounter(state){
        return state.counter;
    },

    getTimer(state){
        return state.start_timer;
    }
}