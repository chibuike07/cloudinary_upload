import React from "react";

const Input = ({
  name,
  list,
  onChange,
  placeholder,
  value,
  isRequired,
  type,
  className,
  outLine,
  id,
  paddingLeft,
  border,
  borderRadius,
  width,
  height,
  borderTop,
  borderBottom,
  backgroundColor,
  color,
  opacity,
  isRefs,
  autoComplete,
  autoCorrect,
  spellCheck,
  readOnly,
  onInput,
  icon,
  isChecked,
  focus,
  iconClick,
  click,
  onClickCapture,
  onKeyup,
  accept,
}) => {
  return (
    <div>
      <input
        style={{
          outline: outLine ? outLine : "none",
          paddingLeft: paddingLeft ? paddingLeft : null,
          width: width ? width : null,
          border: border ? border : null,
          borderRadius: borderRadius ? borderRadius : null,
          borderTop: borderTop ? borderTop : null,
          borderBottom: borderBottom ? borderBottom : null,
          height: height ? height : null,
          color: color ? color : null,
          backgroundColor: backgroundColor ? backgroundColor : null,
          opacity: opacity ? opacity : null,
        }}
        type={type ? type : "text"}
        list={list ? list : null}
        checked={isChecked ? isChecked : null}
        placeholder={placeholder}
        onChange={onChange}
        value={value ? value : ""}
        className={className ? className : "custom-input"}
        name={name}
        required={isRequired}
        id={id ? id : null}
        ref={isRefs ? isRefs : null}
        autoComplete={autoComplete ? autoComplete : null}
        autoCorrect={autoCorrect ? autoCorrect : null}
        spellCheck={spellCheck ? spellCheck : null}
        readOnly={readOnly ? readOnly : null}
        onInput={onInput ? onInput : null}
        onClick={click ? click : null}
        onClickCapture={onClickCapture ? onClickCapture : null}
        onFocus={focus ? focus : null}
        onKeyUp={onKeyup ? onKeyup : null}
        accept={accept ? accept : null}
      />
      <span onClick={iconClick ? iconClick : null}>{icon ? icon : null}</span>
    </div>
  );
};
export default Input;
