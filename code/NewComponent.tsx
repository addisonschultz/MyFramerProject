import * as React from "react";
import { Frame, addPropertyControls, ControlType, useCycle } from "framer";

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api
// ES6-React Reference: http://bit.ly/framer-react

type NewComponentProps = {
  text: string;
};

export function NewComponent(props: NewComponentProps) {
  const [twist, cycle] = useCycle(
    { scale: 0.5, rotate: 0 },
    { scale: 1, rotate: 90 }
  );

  return (
    <Frame animate={twist} onTap={() => cycle()} size={"100%"}>
      {props.text}
    </Frame>
  );
}

NewComponent.defaultProps = {
  text: "Example from VS Code"
};

addPropertyControls(NewComponent, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: NewComponent.defaultProps.text,
    placeholder: "Type something…"
  }
});
