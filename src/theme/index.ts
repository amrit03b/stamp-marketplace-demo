import { createLocalStorageManager, extendTheme, theme, ThemeConfig } from "@chakra-ui/react";

import Accordion from "./accordion";
import Button from "./button";
import Heading from "./heading";
import Input from "./input";
import Menu from "./menu";
import Modal from "./modal";
import Popover from "./popover";
import Spinner from "./spinner";
import Tabs from "./tabs";
import Tooltip from "./tooltip";

import shadows from "./shadows";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const ThemeStorageManager = createLocalStorageManager("andromeda-marketplace-theme");

const cardStyle = {
  bg: 'rgba(255,255,255,0.7)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
  borderRadius: '2xl',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.18)'
};

export const Theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: 'blue.50',
        color: 'gray.900',
        transition: 'background 0.4s cubic-bezier(0.4,0,0.2,1)',
      },
      "*": {
        scrollbarWidth: "6px",
        scrollbarColor: "#3b82f6 #e0e7ef",
      },

      "*::-webkit-scrollbar": {
        width: "6px",
      },

      "*::-webkit-scrollbar-track": {
        bg: "blue.100",
      },

      "*::-webkit-scrollbar-thumb": {
        bg: "#3b82f6",
        borderRadius: "1.5rem",
      },
    },
  },
  shadows,
  fonts: {
    heading:
      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    body: "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    mono: "Menlo, monospace",
  },
  components: {
    Accordion,
    Button,
    Heading,
    Input,
    // Menu,
    Modal,
    Popover,
    Spinner,
    Tabs,
    Tooltip,
    Card: {
      baseStyle: {
        bg: 'background.800',
        color: 'gray.900',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        borderRadius: '2xl',
        backdropFilter: 'blur(8px)',
        border: '1px solid #e0e7ef',
        transition: 'background 0.4s cubic-bezier(0.4,0,0.2,1)',
      },
    },
    Button: {
      ...theme.components?.Button,
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'xl',
        transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
      },
      variants: {
        ...theme.components?.Button?.variants,
        gradient: {
          bgGradient: 'linear(to-r, primary.400, accent.400)',
          color: 'white',
          _hover: {
            bgGradient: 'linear(to-r, primary.500, accent.500)',
            boxShadow: 'lg',
            transform: 'scale(1.04)',
          },
        },
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.600',
            boxShadow: 'md',
            transform: 'scale(1.04)',
          },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: 'background.700',
            color: 'gray.900',
            borderColor: 'gray.300',
            _placeholder: { color: 'gray.500' },
            _focus: {
              borderColor: 'primary.400',
              boxShadow: '0 0 0 4px #dbeafe',
              bg: 'background.700',
              color: 'gray.900',
            },
          },
        },
      },
    },
  },
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    accent: {
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
    },
    gray: theme.colors.gray,
    background: {
      900: '#f0f6ff',
      800: '#e0e7ef',
      700: '#dbeafe',
    },
    error: {
      25: "#FFFBFA",
      50: "#FEF3F2",
      100: "#FEE4E2",
      200: "#FECDCA",
      300: "#FDA29B",
      400: "#F97066",
      500: "#F04438",
      600: "#D92D20",
      700: "#B42318",
      800: "#912018",
      900: "#7A271A",
    },
    warning: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E",
    },
    success: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      400: "#32D583",
      500: "#12B76A",
      600: "#039855",
      700: "#027A48",
      800: "#05603A",
      900: "#054F31",
    },
    classifier: {
      25: "#F6FEFC",
      50: "#F0FDF9",
      100: "#CCFBEF",
      200: "#99F6E0",
      300: "#5FE9D0",
      400: "#2ED3B7",
      500: "#15B79E",
      600: "#0E9384",
      700: "#107569",
      800: "#125D56",
      900: "#134E48",
    },
    // Color range by type (ado / primitive / module /modifier)
    ado: {
      25: "#F5FBFF",
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#B9E6FE",
      300: "#7CD4FD",
      400: "#36BFFA",
      500: "#0BA5EC",
      600: "#0086C9",
      700: "#026AA2",
      800: "#065986",
      900: "#0B4A6F",
    },
    // repeat of ado for defined read data from schema
    baseADO: {
      25: "#F5FBFF",
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#B9E6FE",
      300: "#7CD4FD",
      400: "#36BFFA",
      500: "#0BA5EC",
      600: "#0086C9",
      700: "#026AA2",
      800: "#065986",
      900: "#0B4A6F",
    },
    // These are placeholder values for primitives until ones are defined
    primitive: {
      25: "#E4ECFC",
      100: "#D3D9FA",
      50: "#C4C2F7",
      200: "#C1B2F4",
      300: "#C2A2F1",
      400: "#C892ED",
      500: "#D283E8",
      600: "#CC71CD",
      700: "#B160A0",
      800: "#944F77",
      900: "#783E53",
    },
    module: {
      25: "#F5F8FF",
      50: "#EFF4FF",
      100: "#D1E0FF",
      200: "#B2CCFF",
      300: "#84ADFF",
      400: "#528BFF",
      500: "#2970FF",
      600: "#155EEF",
      700: "#004EEB",
      800: "#0040C1",
      900: "#00359E",
    },
    system: theme.colors.gray
  },
  textStyles: {
    h1: {
      fontWeight: 700,
      color: "gray.900",
      fontSize: "xl",
      mb: 2,
      letterSpacing: 0.5,
    },
    bold: {
      color: "gray.700",
      fontWeight: 700,
    },
    light: {
      color: "gray.500",
      fontSize: "sm",
    },
  },
  radii: {
    ...theme.radii,
    xl: '1.5rem',
    '2xl': '2rem',
  },
});

export default Theme;
