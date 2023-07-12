import Toggle from "../Base/Toggle";
import { useState } from "react";


function withExraProps(WrappedComponent){
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  return function WrappedFeatureCardToggle(title, ...otherProps) {
    const [isToggle, setToggle] = useState(false);

    const handleToggle = () => {
      setToggle(!isToggle);
      fetch(
        backendURL + "api/feature/status/"+ title, {
        headers: {
          "Content-Type": "application/json", // 设置请求头为JSON类型
        },
        mode: "cors", // 设置请求模式为cors
      })
    };

    return (
      <WrappedComponent
        {...otherProps}
        handleToggle={handleToggle}
      />
    );
  }
}

const FeatureCardToggle = withExraProps(Toggle);

export default FeatureCardToggle;
