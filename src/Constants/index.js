const currentTheme = "light";

const ThemeColor = {
  light: {
    primaryBackground: "#fff",
    primaryText: "#222",
    secondaryText: "#fff",
    websiteTheme: "#ffbcac",
    websiteGradient: "linear-gradient(to right, #bc4e9c, #f80759)",
    success: "#27ae60",
    danger: "#e74c3c",
    buttonColor: "#33475b",
    buttonHoverColor: "rgba(51, 71, 91,0.8)",
    linkColor: "#3498db",
    inputFieldBackground: "#f0f0f0",
  },
};

export const theme = ThemeColor[currentTheme];

const fontFamily = {
  fontFamily: "Segoe UI",
};
const bold = {
  ...fontFamily,
  fontWeight: "600",
};

const light = {
  ...fontFamily,
};

export const webFontSize = {
  boldHeading: {
    ...bold,
    fontSize: `50px`,
  },
  boldSubHeading: {
    ...bold,
    fontSize: `22px`,
  },
  boldDescription: {
    ...bold,
    fontSize: `16px`,
  },
  lightHeading: {
    ...light,
    fontSize: "50px",
  },
  lightSubHeading: {
    ...light,
    fontSize: `22px`,
  },
  lightDescription: {
    ...light,
    fontSize: `16px`,
  },
};
