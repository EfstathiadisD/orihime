module.exports = {
  rules: {
    "type-case": () => Promise.resolve([2, "always", "lower-case"]),
    "type-enum": () =>
      Promise.resolve([2, "always", ["feat", "fix", "refactor", "revert", "chore", "build"]]),
    "subject-case": () => Promise.resolve([2, "always", ["sentence-case"]]),
    "scope-case": () => Promise.resolve([2, "always", "lower-case"]),
  },
  extends: ["@commitlint/config-conventional", "@commitlint/config-nx-scopes"],
  parserPreset: {
    headerCorrespondence: ["type", "scope", "ticket", "subject"],
  },
};
