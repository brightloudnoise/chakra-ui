/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef } from "react";
import Input from "../Input";
import { useColorMode } from "../ColorModeProvider";
import Box from "../Box";
import splitProps from "./utils";
import Icon from "../Icon/custom";
import RDatePicker from "react-date-picker/dist/entry.nostyle";

const SelectIconWrapper = forwardRef(function SelectIconWrapper(props, ref) {
  return (
    <Box
      ref={ref}
      position="absolute"
      display="inline-flex"
      width="1.5rem"
      height="100%"
      alignItems="center"
      justifyContent="center"
      right="0.5rem"
      top="50%"
      pointerEvents="none"
      zIndex={2}
      transform="translateY(-50%)"
      {...props}
    />
  );
});

const SelectInput = forwardRef(function SelectInput(
  { placeholder, children, ...rest },
  ref,
) {
  return <RDatePicker />;
});

const DatePicker = forwardRef(
  ({ rootProps, icon, iconSize = 5, ...props }, ref) => {
    const { colorMode } = useColorMode();
    const color = colorMode === "dark" ? "whiteAlpha.800" : "inherit";
    const opacity = props.isReadOnly || props.isDisabled ? 0.5 : null;

    const [root, select] = splitProps(props);

    return (
      <Box position="relative" width="100%" {...root} {...rootProps}>
        <SelectInput ref={ref} color={color} {...select} />
        <SelectIconWrapper opacity={opacity} color={select.color || color}>
          <Icon icon={icon || "chevron-down"} size={iconSize} />
        </SelectIconWrapper>
      </Box>
    );
  },
);

DatePicker.displayName = "Select";

export default DatePicker;
