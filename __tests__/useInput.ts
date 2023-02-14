import useInput from "@/hooks/useInput";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { ChangeEvent } from "react";
import { act } from "react-dom/test-utils";

const inputValidate = (value: string) => value.trim().length > 3;

function renderUseInputHook() {
  return renderHook(() => useInput({ validate: inputValidate }));
}

describe("useInput hook", () => {
  it("returns initial state when invoked", () => {
    const { result } = renderUseInputHook();
    const { value, isTouched, isValid } = result.current;

    expect(value).toBe("");
    expect(isTouched).toBe(false);
    expect(isValid).toBe(false);
  });

  it("has the initial value state to be the value passed in as an argument", () => {
    const { result } = renderHook(() =>
      useInput({ initialValue: "Hello World!", validate: inputValidate })
    );

    expect(result.current.value).toBe("Hello World!");
  });

  it("updates value state when onChange is invoked", () => {
    const { result } = renderUseInputHook();
    const { onChange } = result.current;

    act(() => {
      const changeEvent = {
        target: {
          value: "Hello World!",
        },
      } as ChangeEvent<HTMLInputElement>;

      onChange(changeEvent);
    });

    expect(result.current.value).toBe("Hello World!");
  });

  it("has isValid state to be true when onBlur is invoked and value is validated", () => {
    const { result } = renderUseInputHook();
    const { onChange, onBlur } = result.current;

    act(() => {
      const changeEvent = {
        target: {
          value: "Pete",
        },
      } as ChangeEvent<HTMLInputElement>;
      onChange(changeEvent);
      onBlur();
    });

    expect(result.current.isValid).toBeTruthy();
  });

  it("has isValid state to be false when onBlur is invoked and value isn't validated", () => {
    const { result } = renderUseInputHook();
    const { onChange, onBlur } = result.current;

    act(() => {
      const changeEvent = {
        target: {
          value: "Pet",
        },
      } as ChangeEvent<HTMLInputElement>;
      onChange(changeEvent);
      onBlur();
    });

    expect(result.current.isValid).toBeFalsy();
  });

  it("updates isTouched state when onBlur is invoked and value isn't left empty", () => {
    const { result } = renderUseInputHook();
    const { onChange, onBlur } = result.current;

    act(() => {
      const changeEvent = {
        target: {
          value: "P",
        },
      } as ChangeEvent<HTMLInputElement>;
      onChange(changeEvent);
      onBlur();
    });

    expect(result.current.isTouched).toBeTruthy();
  });

  it("has isTouched state to be false when onBlur is invoked and value gets it all deleted", () => {
    const { result } = renderUseInputHook();
    const { onChange, onBlur } = result.current;

    act(() => {
      const firstChangeEvent = {
        target: {
          value: "Pete",
        },
      } as ChangeEvent<HTMLInputElement>;
      onChange(firstChangeEvent);
      onBlur();

      const secondChangEvent = {
        target: {
          value: "",
        },
      } as ChangeEvent<HTMLInputElement>;
      onChange(secondChangEvent);
      onBlur();
    });

    expect(result.current.isTouched).toBeFalsy();
  });

  it("returns initial state when onReset is invoked", () => {
    const { result } = renderUseInputHook();
    const { onChange, onBlur, onReset } = result.current;

    act(() => {
      const changeEvent = {
        target: {
          value: "Pete",
        },
      } as ChangeEvent<HTMLInputElement>;
      onChange(changeEvent);
      onBlur();
      onReset();
    });

    const { value, isTouched, isValid } = result.current;
    expect(value).toBe("");
    expect(isTouched).toBe(false);
    expect(isValid).toBe(false);
  });
});
