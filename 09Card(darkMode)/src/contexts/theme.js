import { createContext,useContext } from "react";
//previously we were passing nothing but we can give an initial value or any function so
export const ThemeContext=createContext({
    currentTheme:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})
//apart from it we can also export the provider here only so we dont have to create another compo for it
// 🔹 Alag se Provider component banane ki zaroorat nahi, seedha ThemeContext.Provider ko export kar diya.

// ✅ Benefit: App.js ya kisi bhi component me direct ThemeProvider import kar sakte hain.
export const ThemeProvider=ThemeContext.Provider

// 🔹 useTheme() ek custom hook hai jo useContext(ThemeContext) return karta hai.
// 🔹 Ab hume baar-baar useContext(ThemeContext) likhne ki zaroorat nahi.

// ✅ Benefit: Components me context easily access kar sakte hain:
export default function useTheme(){
    return useContext(ThemeContext)
}