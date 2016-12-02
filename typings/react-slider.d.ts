declare module "react-slider" {
  import Component = __React.Component

  interface Props {
    min: number,
    max: number,
    step?: number,
    minDistance?: number,
    defaultValue?: number | number[],
    value?: number | number[],
    orientation?: string,
    className?: string,
    handleClassName?: string,
    handleActiveClassName?: string,
    withBars?: boolean,
    barClassName?: string,
    pearling?: boolean,
    disabled?: boolean,
    snapDragDisabled?: boolean,
    invert?: boolean,
    onBeforeChange?: Function,
    onChange?: Function,
    onAfterChange?: Function,
    onSliderClick?: Function
  }

  export default class ReactSlider extends Component<Props, {}> {}
}
