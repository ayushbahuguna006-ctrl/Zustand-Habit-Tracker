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

