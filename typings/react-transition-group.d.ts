// Type definitions for React v0.14 (react-addons-transition-group)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace __React {

  interface TransitionGroupProps extends HTMLAttributes {
    component?: ReactType;
    className?: string;
    childFactory?: (child: ReactElement<any>) => ReactElement<any>;
  }

  type TransitionGroup = ComponentClass<TransitionGroupProps>;

  namespace __Addons {
    export var TransitionGroup: __React.TransitionGroup;
  }
}

declare module "react/lib/ReactTransitionGroup" {
  var TransitionGroup: __React.TransitionGroup;
  type TransitionGroup = __React.TransitionGroup;
  export = TransitionGroup;
}
