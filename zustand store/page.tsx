"use client";

import { useEffect } from "react";
import { useCounterStore } from "./store";

const logCountORsetCount = () => {
  // const count = useCounterStore.getState().count;
  // useCounterStore.setState({ count: 1 });
};

export default function Home() {
  // two ways of getting states:
  const count = useCounterStore((state) => state.count);
  // const { count } = useCounterStore((state) => state);

  return <OtherComponent count={count} />;
}
const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  useEffect(() => {
    logCountORsetCount();
  }, []);

  return (
    <div>
      {count}
      <div>
        <button onClick={incrementAsync}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
