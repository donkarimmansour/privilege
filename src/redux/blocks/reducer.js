import { createSlice } from "@reduxjs/toolkit";
import { getBlocks  , createBlock, deleteBlock, countBlocks, getSingleBlock, editBlock } from "./action"


const initialState = {
    blocks: [],
    count: 0,
    singleBlock: {},
    loading: false,
    error: false,
    success: false,
}

export const BlocksReducerSlice = createSlice({
    name: 'blocks', 
    initialState,
    reducers: { 
        cleanAlerts: (state) => {
            state.loading = false
            state.success = false
            state.error = false
        },
        cleanSingle: (state) => {
            state.singleBlock = {}
        },
    },
    extraReducers: {

        //getSingleBlock
        [getSingleBlock.pending]: (state, action) => {
            state.loading = true
        },

        [getSingleBlock.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.singleBlock = action.payload
        },

        [getSingleBlock.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //getBlocks
        [getBlocks.pending]: (state, action) => {
            state.loading = true
        },

        [getBlocks.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.blocks = action.payload
        },

        [getBlocks.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //countBlocks
        [countBlocks.pending]: (state, action) => {
            state.loading = true
        },

        [countBlocks.fulfilled]: (state, action) => {
            state.loading = false
            // state.success = action.payload
            state.count = action.payload
        },

        [countBlocks.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //editBlock
        [editBlock.pending]: (state, action) => {
            state.loading = true
        },

        [editBlock.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Updated"

            const editIndex = state.blocks.findIndex(s => s._id === state.singleBlock._id)
            state.blocks[editIndex] = {
                ...state.blocks[editIndex], ...action.meta.arg,
                actions: [...state.blocks[editIndex].actions, action.meta.arg.actions]
            }
        },

        [editBlock.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        //deleteBlock
        [deleteBlock.pending]: (state, action) => {
            state.loading = true
        },

        [deleteBlock.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Deleted"
            state.blocks = state.blocks.filter(s => s._id !== action.meta.arg) 
            state.count = -1
        },

        [deleteBlock.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //createBlock
        [createBlock.pending]: (state, action) => {
            state.loading = true
        },

        [createBlock.fulfilled]: (state, action) => {
            state.loading = false
            state.success = "Created"
            state.blocks = [...state.blocks, {...action.meta.arg ,  "_id" : action.payload , actions: [action.meta.arg.actions]} ]

            state.count = +1
        },

        [createBlock.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
   
    }
})


export const { cleanAlerts,cleanSingle } = BlocksReducerSlice.actions; 
export default BlocksReducerSlice.reducer; 
