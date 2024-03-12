module.exports = {
  roots: ["<rootDir>/", "<rootDir>/__tests__"],
  testMatch: [
    "<rootDir>/__tests__/*.+(ts|tsx)",
    "<rootDir>/__tests__/*.(test|spec).+(ts|tsx)",

    "**/*.(spec|test).+(ts|tsx)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
