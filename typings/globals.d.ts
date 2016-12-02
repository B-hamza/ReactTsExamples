// Made available by webpack
declare function require(path: string): any

// Node-ish process support shimed by webpack
declare const process: any

// Props made available by abyssa when a Component is used inside a ReactState
declare interface AbyssaStateProps {
  params: { [name: string]: string }
  route: any
}

interface Window {
  Messages: (...args: Array<string>) => string
}