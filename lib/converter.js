function convert(data) {
  const tokens = lexer(data);
  return parser(tokens);
}
