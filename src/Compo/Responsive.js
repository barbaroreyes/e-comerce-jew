import {css} from 'styled-components'

export const mobile = (props) => {
    return css `
    @media only screen and (max-width:320px){
        ${props}
    `
}
export const mobilex = (props) => {
    return css `
    @media only screen and (min-width:321px){
        ${props}
    `
}
export const table = (props) => {
    return css `
    @media only screen and (min-width:768px){
        ${props}
    `
}
export const all = (props) => {
    return css `
    @media only screen and (min-width:1024px){
        ${props}
    `
}