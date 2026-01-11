
// Creating a store For State management Using zustand



import { create } from 'zustand'

export const usecount = create((set) => ({
 count:0,
 inccount:(num)=>{
    set((state)=>({count:state.count+num}))
 },
 deccount:(num)=>{
    set((state)=>({count:state.count-num}))
 }
}))

