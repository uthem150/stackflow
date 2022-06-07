import { AggregateOutput, DispatchEvent } from "@stackflow/core";
import { createContext } from "react";

export interface CoreContextValue {
  state: AggregateOutput;
  stateRef: React.MutableRefObject<AggregateOutput>;
  dispatchEvent: DispatchEvent;
}
export const CoreContext = createContext<CoreContextValue>(null as any);
