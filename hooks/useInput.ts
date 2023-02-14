import { ChangeEvent, useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
  isValid: false,
};

type State = typeof initialState;

type Actions = {
  change: { type: "Change"; payload: { value: string } };
  blur: { type: "Blur"; payload: { validate: (value: string) => boolean } };
  reset: { type: "Reset" };
};

type ObjectValues<T> = T[keyof T];
type ActionType = ObjectValues<Actions>;

function reducer(state: State, action: ActionType) {
  switch (action.type) {
    case "Change":
      return { ...state, value: action.payload.value };

    case "Blur":
      return {
        ...state,
        isValid: action.payload.validate(state.value),
        isTouched: state.value.length === 0 ? false : true,
      };

    case "Reset":
      return initialState;

    default:
      throw new Error("Error: unhandled type caught in useInput hook.");
  }
}

interface useInputProps {
  initialValue?: string;
  validate: (value: string) => boolean;
}

export default function useInput({ initialValue, validate }: useInputProps) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    value: initialValue ? initialValue : "",
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => dispatch({ type: "Change", payload: { value: e.target.value } });

  const handleOnBlur = () => dispatch({ type: "Blur", payload: { validate } });

  const handleOnReset = () => dispatch({ type: "Reset" });

  return {
    ...state,
    onChange: handleOnChange,
    onBlur: handleOnBlur,
    onReset: handleOnReset,
  };
}
