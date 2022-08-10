module.exports = {
  "*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|graphql|mdx)": [
    "prettier --write",
    "eslint --fix",
  ],
};
