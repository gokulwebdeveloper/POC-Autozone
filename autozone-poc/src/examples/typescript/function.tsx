import * as React from 'react'


interface Props {
  name: string;
  color: string;
}

type OtherProps = {
  name: string;
  color: string;
  height: number;
}

// Notice here we're using the function declaration with the interface Props
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}

// Notice here we're using the function expression with the type OtherProps
export const OtherHeading: React.FC<OtherProps> = ({ name, color, height }) =>
  <h1>My name is {name} and I like {color}. Height is {height}</h1>