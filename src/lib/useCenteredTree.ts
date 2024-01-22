import { useCallback, useState } from "react";

const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem: any) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 0.9, y: height / 4 });
    }
  }, []);
  return [translate, containerRef];
};

export default useCenteredTree;
