import { useCallback, useState } from "react";

type UseCenteredTreeReturn = [{ x: number; y: number }, (elem: any) => void];

const useCenteredTree = (
  defaultTranslate = { x: 0, y: 0 }
): UseCenteredTreeReturn => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem: Element) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 0.9, y: height / 4 });
    }
  }, []);
  return [translate, containerRef];
};

export default useCenteredTree;
