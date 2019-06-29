import React from "react";

export const Store = React.createContext([0,()=>{}]);

export const checkBoxStore = React.createContext([true,()=>{}]);

export const MainTabStore =React.createContext([0,()=>{}]);

export const ModifyTabStore =React.createContext([0,()=>{}]);


export const CreateBankInfo=React.createContext(["",()=>{}]);

export const CreatePayPersonInfo=React.createContext(["",()=>{}]);

export const ModifyDealID=React.createContext(["",()=>{}]);


export const ConnectPayPersonID=React.createContext(["",()=>{}]);

export const varyIsAllPayInfo = React.createContext([false,()=>{}]);


export const optimalRequest= React.createContext([1,()=>{}]);