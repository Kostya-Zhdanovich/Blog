import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "..";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;