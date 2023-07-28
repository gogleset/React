/**
 * @gogleset heading component
 */
import React from "react";
import useCardContext from "./hooks/useCardContext";

const Heading = ({ children }: { children: React.ReactNode }) => {
  const { toggle }: any = useCardContext();

  return <div>{children}</div>;
};

export default Heading;
