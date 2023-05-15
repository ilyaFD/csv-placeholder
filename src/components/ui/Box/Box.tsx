import React, { ReactNode } from "react"
interface IProps {
    children: ReactNode
}

const Box: React.FC<IProps> = ({children}) => {

  return (
    <div className="w-full max-w-xs flex flex-col bg-indigo-700 shadow-lg rounded-lg p-5">
        {children}
    </div>
  );
}

export default Box;