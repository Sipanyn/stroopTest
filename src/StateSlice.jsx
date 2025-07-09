import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    guide:"closed",
    start:false,
    mainQuestion:"",
    color:"",
    answer:"",
    correct:0,
    wrong:0,
    finish:false,
};
const QuestionSlice=createSlice({
    name:"question",
    initialState,
    reducers:{
        guideOpener:(state)=>{state.guide = "opened"},
        guideCloser:(state)=>{state.guide = "closed"},
        startHandler:(state)=>{state.start=true},
        closeHandler:(state)=>{state.start=false},
        getAnswer:(state,action)=>{
            state.answer=action.payload;
            if(state.answer === state.color){
                state.correct +=1
            }
            else{
                state.wrong +=1
            }
        },
        finishOn:(state)=>{
           state.finish=true
            
        },
        finishOff:(state)=>{
            state.finish=false
        },
        reset:(state)=>{
            state.correct=0;
            state.wrong=0;
            },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchQuestion.fulfilled,(state,action)=>{
             state.mainQuestion=action.payload[Math.floor(Math.random() * 5)]   // {name , id}
             state.color=action.payload[Math.floor(Math.random() * 5)].id
        })
    }
})
export const fetchQuestion=createAsyncThunk("fetchingQuestion",async ()=>{
    const res=await fetch ('https://stroop.liara.run/choices')
    let data=await res.json()
    return data
    
})
export default QuestionSlice.reducer;
export const { guideOpener,guideCloser,startHandler,getAnswer,correct,wrong,finishOn,finishOff,reset,closeHandler} = QuestionSlice.actions;