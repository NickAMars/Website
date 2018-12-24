import React from "react"
import styled from "@emotion/styled"


//function returns a string for the h1 element
export const Fancy = styled("h1")`
  ${ ({wild, children}) =>
      `
      color: ${ wild ? 'hotpink': 'gold' };
      font-size: ${children+1}em;
      `
  }
`

// export const Fancy = styled("h1")`
//   color: ${ props => props.wild ? 'hotpink': 'gold'};
//   font-size: ${props => props.children+1}em;
//   cursor: pointer;
// `
