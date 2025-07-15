import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { getColor } from "@chakra-ui/theme-tools";

const size: Record<string, SystemStyleObject> = {
  md: {
    height: "44px",
    px: "14px",
    borderRadius: "lg",
    bg: "background.700",
    color: "gray.100",
    border: "1px solid",
    borderColor: "gray.600",
    _placeholder: { color: "gray.400" },
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  md: {
    field: size.md,
    addon: size.md,
  },
};

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;

  return {
    field: {
      bg: "background.700",
      color: "gray.100",
      borderColor: "gray.600",
      _hover: { borderColor: "primary.400" },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all",
        bg: "background.700",
        color: "gray.400",
      },
      _disabled: {
        opacity: 1,
        bg: "background.800",
        borderColor: "gray.700",
        color: "gray.500",
      },
      _invalid: {
        borderColor: "error.300",
        boxShadow: "none",
        _focus: {
          borderColor: "error.300",
          boxShadow: `0 0 0 4px ${getColor(theme, "error.100")}`,
        },
      },
      _focus: {
        zIndex: 1,
        borderColor: "primary.300",
        boxShadow: `0 0 0 4px ${getColor(theme, "primary.100")}`,
        bg: "background.700",
        color: "gray.100",
      },
      _placeholder: { opacity: 1, color: "gray.400", fontSize: "md" },
    },
  };
};

const variants = {
  outline: variantOutline,
};

const styles = {
  sizes,
  variants,
};

export default styles;
