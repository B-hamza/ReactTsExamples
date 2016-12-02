import React = __React

declare module 'dml-react-autocomplete' {

  interface AutocompleteProps {
    [index: string]: any
  }

  export default class Autocomplete extends React.Component<AutocompleteProps, {}> {}
}