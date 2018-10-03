/** 
 * SPARQL grammar
 * https://www.w3.org/TR/sparql11-query/#grammar
 * Extended Backus-Naur Form (EBNF) notation https://www.w3.org/TR/xml11/#sec-notation https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form
 */

// IRIREF
// URL: https://www.w3.org/TR/sparql11-query/#rIRIREF
// EBNF: '<' ([^<>"{}|^`\]-[#x00-#x20])* '>'
// REGEX: /(<[^<>"{}|^`\\\x00-\x20]*>)/
const IRIREF = '(<[^<>"{}|^`\\\\\\x00-\\x20]*>)';

// LANGTAG
// URL: https://www.w3.org/TR/sparql11-query/#rLANGTAG
// EBNF: '@' [a-zA-Z]+ ('-' [a-zA-Z0-9]+)*
// REGEX: /(@[a-zA-Z]+(\-[a-zA-Z0-9]+)*)/
const LANGTAG = '(@[a-zA-Z]+(\\-[a-zA-Z0-9]+)*)';

// INTEGER
// URL: https://www.w3.org/TR/sparql11-query/#rINTEGER
// EBNF: [0-9]+
// REGEX: /[0-9]+/
const INTEGER = '[0-9]+';

// DECIMAL
// URL: https://www.w3.org/TR/sparql11-query/#rDECIMAL
// EBNF: [0-9]* '.' [0-9]+
// REGEX: /[0-9]*\.[0-9]+/
const DECIMAL = '[0-9]*\\.[0-9]+';

// EXPONENT
// URL: https://www.w3.org/TR/sparql11-query/#rEXPONENT
// EBNF: [eE] [+-]? [0-9]+
// REGEX: /([eE][+-]?[0-9]+)/
const EXPONENT = '([eE][+-]?[0-9]+)';

// DOUBLE
// URL: https://www.w3.org/TR/sparql11-query/#rDOUBLE
// EBNF: [0-9]+ '.' [0-9]* EXPONENT | '.' ([0-9])+ EXPONENT | ([0-9])+ EXPONENT
// REGEX: /(([0-9]+.[0-9]*([eE][+-]?[0-9]+))|(.[0-9]+([eE][+-]?[0-9]+))|([0-9]+([eE][+-]?[0-9]+)))/
const DOUBLE = '(([0-9]+\.[0-9]*' + EXPONENT + ')|(\.[0-9]+' + EXPONENT + ')|([0-9]+' + EXPONENT + '))';

// INTEGER_POSITIVE
// URL: https://www.w3.org/TR/sparql11-query/#rINTEGER_POSITIVE
// EBNF: '+' INTEGER
// REGEX: /\+[0-9]+/
const INTEGER_POSITIVE = '\\+' + INTEGER;

// DECIMAL_POSITIVE
// URL: https://www.w3.org/TR/sparql11-query/#rDECIMAL_POSITIVE
// EBNF: '+' DECIMAL
// REGEX: /\+[0-9]*\.[0-9]+/
const DECIMAL_POSITIVE = '\\+' + DECIMAL;

// DOUBLE_POSITIVE
// URL: https://www.w3.org/TR/sparql11-query/#rDOUBLE_POSITIVE
// EBNF: '+' DOUBLE
// REGEX: /\+(([0-9]+.[0-9]*([eE][+-]?[0-9]+))|(.[0-9]+([eE][+-]?[0-9]+))|([0-9]+([eE][+-]?[0-9]+)))/
const DOUBLE_POSITIVE = '\\+' + DOUBLE;

// INTEGER_NEGATIVE
// URL: https://www.w3.org/TR/sparql11-query/#rINTEGER_NEGATIVE
// EBNF: '-' INTEGER
// REGEX: /-[0-9]+/
const INTEGER_NEGATIVE = '-' + INTEGER;

// DECIMAL_NEGATIVE
// URL: https://www.w3.org/TR/sparql11-query/#rDECIMAL_NEGATIVE
// EBNF: '-' DECIMAL
// REGEX: /-[0-9]*\.[0-9]+/
const DECIMAL_NEGATIVE = '-' + DECIMAL;

// DOUBLE_NEGATIVE
// URL: https://www.w3.org/TR/sparql11-query/#rDOUBLE_NEGATIVE
// EBNF: '-' DOUBLE
// REGEX: /-(([0-9]+.[0-9]*([eE][+-]?[0-9]+))|(.[0-9]+([eE][+-]?[0-9]+))|([0-9]+([eE][+-]?[0-9]+)))/
const DOUBLE_NEGATIVE = '-' + DOUBLE;

// ECHAR
// URL: https://www.w3.org/TR/sparql11-query/#rECHAR
// EBNF: '\' [tbnrf\"']
// REGEX: /\\[tbnrf\\"']/
const ECHAR = '\\\\[tbnrf\\\\"\']';

// STRING_LITERAL1
// URL: https://www.w3.org/TR/sparql11-query/#rSTRING_LITERAL1
// EBNF: "'" ( ([^#x27#x5C#xA#xD]) | ECHAR )* "'"
// REGEX: /('([^\x27\x5C\x0A\x0D]|\\[tbnrf\\"'])*')/
const STRING_LITERAL1 = "('([^\\x27\\x5C\\x0A\\x0D]|" + ECHAR + ")*')";

// STRING_LITERAL2
// URL: https://www.w3.org/TR/sparql11-query/#rSTRING_LITERAL2
// EBNF: '"' ( ([^#x22#x5C#xA#xD]) | ECHAR )* '"'
// REGEX: /("([^\x22\x5C\x0A\x0D]|\\[tbnrf\\"'])*")/
const STRING_LITERAL2 = '("([^\\x22\\x5C\\x0A\\x0D]|' + ECHAR + ')*")';

// STRING_LITERAL_LONG1
// URL: https://www.w3.org/TR/sparql11-query/#rSTRING_LITERAL_LONG1
// EBNF: "'''" ( ( "'" | "''" )? ( [^'\] | ECHAR ) )* "'''"
// REGEX: /('''(('|'')?([^'\\]|\\[tbnrf\\"']))*''')/
const STRING_LITERAL_LONG1 = "('''(('|'')?([^'\\\\]|" + ECHAR + "))*''')";

// STRING_LITERAL_LONG2
// URL: https://www.w3.org/TR/sparql11-query/#rSTRING_LITERAL_LONG2
// EBNF: '"""' ( ( '"' | '""' )? ( [^"\] | ECHAR ) )* '"""'
// REGEX: ("""(("|"")?([^"\\]|\\[tbnrf\\"']))*""")/
const STRING_LITERAL_LONG2 = '("""(("|"")?([^"\\\\]|' + ECHAR + '))*""")';

// WS
// URL: https://www.w3.org/TR/sparql11-query/#rWS
// EBNF: #x20 | #x9 | #xD | #xA
// REGEX: /[\x20|\x09|\x0D|\x0A]/
const WS = '[\\x20|\\x09|\\x0D|\\x0A]';

// NIL
// URL: https://www.w3.org/TR/sparql11-query/#rNIL
// EBNF: '(' WS* ')'
// REGEX: /\([\x20|\x09|\x0D|\x0A]*\)/
const NIL = '\\(' + WS + '*\\)';

// ANON
// URL: https://www.w3.org/TR/sparql11-query/#rANON
// EBNF: '[' WS* ']'
// REGEX: /\[[\x20|\x09|\x0D|\x0A]*\]/
const ANON = '\\[' + WS + '*\\]';

// PN_CHARS_BASE
// URL: https://www.w3.org/TR/sparql11-query/#rPN_CHARS_BASE
// EBNF: [A-Z] | [a-z] | [#x00C0-#x00D6] | [#x00D8-#x00F6] | [#x00F8-#x02FF] | [#x0370-#x037D] | [#x037F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
// REGEX: /[[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
// TODO: support range [#x10000-#xEFFFF] supplementary multilingual and ideographic planes https://en.wikipedia.org/wiki/List_of_Unicode_characters (out of range characters)
const PN_CHARS_BASE = '[A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]';

// PN_CHARS_U
// URL: https://www.w3.org/TR/sparql11-query/#rPN_CHARS_U
// EBNF: PN_CHARS_BASE | '_'
// REGEX: /([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)/
const PN_CHARS_U = '(' + PN_CHARS_BASE + '|_)';

// VARNAME
// URL: https://www.w3.org/TR/sparql11-query/#rVARNAME
// EBNF: ( PN_CHARS_U | [0-9] ) ( PN_CHARS_U | [0-9] | #x00B7 | [#x0300-#x036F] | [#x203F-#x2040] )*
// REGEX: /(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[0-9])(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[0-9\u00B7\u0300-\u036F\u203F-\u2040])*/
const VARNAME = '(' + PN_CHARS_U + '|[0-9])(' + PN_CHARS_U + '|[0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040])*';

// VAR1
// URL: https://www.w3.org/TR/sparql11-query/#rVAR1
// EBNF: '?' VARNAME
// REGEX: /(\?((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[0-9])(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[0-9\u00B7\u0300-\u036F\u203F-\u2040])*))/
const VAR1 = '(\\?(' + VARNAME + '))';

// VAR2
// URL: https://www.w3.org/TR/sparql11-query/#rVAR2
// EBNF: '$' VARNAME
// REGEX: /(\$((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[0-9])(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[0-9\u00B7\u0300-\u036F\u203F-\u2040])*))/
const VAR2 = '(\\$' + VARNAME + ')';

// PN_CHARS
// URL: https://www.w3.org/TR/sparql11-query/#rPN_CHARS
// EBNF: PN_CHARS_U | '-' | [0-9] | #x00B7 | [#x0300-#x036F] | [#x203F-#x2040]
// REGEX: /(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040])/
const PN_CHARS = '(' + PN_CHARS_U + '|[\\-0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]' + ')';

// BLANK_NODE_LABEL
// URL: https://www.w3.org/TR/sparql11-query/#rBLANK_NODE_LABEL
// EBNF: '_:' ( PN_CHARS_U | [0-9] ) ((PN_CHARS|'.')* PN_CHARS)?
// REGEX: /(_:(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[0-9])(((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040])|\.)*(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040]))?)/
const BLANK_NODE_LABEL = '(_:(' + PN_CHARS_U + '|[0-9])((' + PN_CHARS + '|\\.)*' + PN_CHARS + ')?)';

// PN_PREFIX
// URL: https://www.w3.org/TR/sparql11-query/#rPN_PREFIX
// EBNF: PN_CHARS_BASE ((PN_CHARS|'.')* PN_CHARS)?
// REGEX: /([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD](((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040])|\.)*(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040]))?)/
const PN_PREFIX = '(' + PN_CHARS_BASE + '((' + PN_CHARS + '|\\.)*' + PN_CHARS + ')?)';

// PNAME_NS
// URL: https://www.w3.org/TR/sparql11-query/#rPNAME_NS
// EBNF: PN_PREFIX? ':'
// REGEX: /(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD](((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040])|\.)*(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040]))?)?:)/
const PNAME_NS = '(' + PN_PREFIX + '?:)';

// PERCENT
// URL: https://www.w3.org/TR/sparql11-query/#rPERCENT
// EBNF: '%' HEX HEX
// REGEX: /%[0-9A-Fa-f]{2}/
const PERCENT = '%[0-9A-Fa-f]{2}';

// HEX
// URL: https://www.w3.org/TR/sparql11-query/#rHEX
// EBNF: [0-9] | [A-F] | [a-f]
// REGEX: /[0-9A-Fa-f]/
const HEX = '[0-9A-Fa-f]';

// PN_LOCAL_ESC
// URL: https://www.w3.org/TR/sparql11-query/#rPN_LOCAL_ESC
// EBNF: '\' ( '_' | '~' | '.' | '-' | '!' | '$' | '&' | "'" | '(' | ')' | '*' | '+' | ',' | ';' | '=' | '/' | '?' | '#' | '@' | '%' )
// REGEX: /\\[_~.\-!$&'()*+,;=\/?#@%]/
const PN_LOCAL_ESC = '\\\\[_~.\\-!$&\'()*+,;=/?#@%]';

// PLX
// URL: https://www.w3.org/TR/sparql11-query/#rPLX
// EBNF: PERCENT | PN_LOCAL_ESC
// REGEX: /(%[0-9A-Fa-f]{2})|(\\[_~.\-!$&'()*+,;=\/?#@%])/
const PLX = '(' + PERCENT + ')|(' + PN_LOCAL_ESC + ')';

// PN_LOCAL
// URL: https://www.w3.org/TR/sparql11-query/#rPN_LOCAL
// EBNF: (PN_CHARS_U | ':' | [0-9] | PLX ) ((PN_CHARS | '.' | ':' | PLX)* (PN_CHARS | ':' | PLX) )?
// REGEX: /([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_|[:0-9]|(%[0-9A-Fa-f]{2})|(\\[_~.\-!$&'()*+,;=\/?#@%]))(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040]|[.:]|(%[0-9A-Fa-f]{2})|(\\[_~.\-!$&'()*+,;=\/?#@%]))*([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040]|:|(%[0-9A-Fa-f]{2})|(\\[_~.\-!$&'()*+,;=\/?#@%])))?/
const PN_LOCAL = '(' + PN_CHARS_U + '|[:0-9]|' + PLX + ')((' + PN_CHARS + '|[.:]|' + PLX + ')*(' + PN_CHARS + '|:|' + PLX + '))?';

// PNAME_LN
// URL: https://www.w3.org/TR/sparql11-query/#rPNAME_LN
// EBNF: PNAME_NS PN_LOCAL
// REGEX: /((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD](((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040])|\.)*(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040]))?)?:)(([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[:0-9]|(%[0-9A-Fa-f]{2})|(\\[_~.\-!$&'()*+,;=\/?#@%]))(((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040])|[.:]|(%[0-9A-Fa-f]{2})|(\\[_~.\-!$&'()*+,;=\/?#@%]))*((([A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|_)|[\-0-9\u00B7\u0300-\u036F\u203F-\u2040])|:|(%[0-9A-Fa-f]{2})|(\\[_~.\-!$&'()*+,;=\/?#@%])))?)/
const PNAME_LN = '(' + PNAME_NS + PN_LOCAL + ')';

// iriOrFunction
// URL: https://www.w3.org/TR/sparql11-query/#ririOrFunction
// EBNF: iri ArgList?

// NumericLiteralUnsigned
// URL: https://www.w3.org/TR/sparql11-query/#rNumericLiteralUnsigned
// EBNF: INTEGER | DECIMAL | DOUBLE
const _NumericLiteralUnsigned = '(' + INTEGER + '|' + DECIMAL + '|' + DOUBLE + ')';

// NumericLiteralPositive
// URL: https://www.w3.org/TR/sparql11-query/#rNumericLiteralPositive
// EBNF: INTEGER_POSITIVE | DECIMAL_POSITIVE | DOUBLE_POSITIVE
const _NumericLiteralPositive = '(' + INTEGER_POSITIVE + '|' + DECIMAL_POSITIVE + '|' + DOUBLE_POSITIVE + ')';

// NumericLiteralNegative
// URL: https://www.w3.org/TR/sparql11-query/#rNumericLiteralNegative
// EBNF: INTEGER_NEGATIVE | DECIMAL_NEGATIVE | DOUBLE_NEGATIVE
const _NumericLiteralNegative = '(' + INTEGER_NEGATIVE + '|' + DECIMAL_NEGATIVE + '|' + DOUBLE_NEGATIVE + ')';

// NumericLiteral
// URL: https://www.w3.org/TR/sparql11-query/#rNumericLiteral
// EBNF: NumericLiteralUnsigned | NumericLiteralPositive | NumericLiteralNegative
const _NumericLiteral = '(' + _NumericLiteralUnsigned + '|' + _NumericLiteralPositive + '|' + _NumericLiteralNegative + ')';

// BooleanLiteral
// URL: https://www.w3.org/TR/sparql11-query/#rBooleanLiteral
// EBNF: 'true' | 'false'
const _BooleanLiteral = '(true|false)';

// String
// URL: https://www.w3.org/TR/sparql11-query/#rString
// EBNF: STRING_LITERAL1 | STRING_LITERAL2 | STRING_LITERAL_LONG1 | STRING_LITERAL_LONG2
const _String = '(' + STRING_LITERAL1 + '|' + STRING_LITERAL2 + '|' + STRING_LITERAL_LONG1 + '|' + STRING_LITERAL_LONG2 + ')';

// PrefixedName
// URL: https://www.w3.org/TR/sparql11-query/#rPrefixedName
// EBNF: PNAME_LN | PNAME_NS
const _PrefixedName = '(' + PNAME_LN + '|' + PNAME_NS + ')';

// iri
// URL: https://www.w3.org/TR/sparql11-query/#riri
// EBNF: IRIREF | PrefixedName
const _iri = '(' + IRIREF + '|' + _PrefixedName + ')';

// RDFLiteral
// URL: https://www.w3.org/TR/sparql11-query/#rRDFLiteral
// EBNF: String ( LANGTAG | ( '^^' iri ) )?
const _RDFLiteral = '(' + _String + '(' + LANGTAG + '|(\\^\\^' + _iri + '))?)'

// BlankNode
// URL: https://www.w3.org/TR/sparql11-query/#rBlankNode
// EBNF: BLANK_NODE_LABEL | ANON
const _BlankNode = '(' + BLANK_NODE_LABEL + '|' + ANON + ')';

// DataBlockValue
// URL: https://www.w3.org/TR/sparql11-query/#rDataBlockValue
// EBNF: iri | RDFLiteral | NumericLiteral | BooleanLiteral | 'UNDEF'
const _DataBlockValue = '(' + _iri + '|' + _RDFLiteral + '|' + _NumericLiteral + '|' + _BooleanLiteral + '|(UNDEF))';

// Production rules (173 rules)
// https://www.w3.org/TR/sparql11-query/#sparqlGrammar
const rules = {
    DataBlockValue: _DataBlockValue,
    RDFLiteral: _RDFLiteral,
    NumericLiteral: _NumericLiteral,
    NumericLiteralUnsigned: _NumericLiteralUnsigned,
    NumericLiteralPositive: _NumericLiteralPositive,
    NumericLiteralNegative: _NumericLiteralNegative,
    BooleanLiteral: _BooleanLiteral,
    String: _String,
    iri: _iri,
    PrefixedName: _PrefixedName,
    BlankNode: _BlankNode,
    // Productions for terminals
    IRIREF: IRIREF,
    PNAME_NS: PNAME_NS,
    PNAME_LN: PNAME_LN,
    BLANK_NODE_LABEL: BLANK_NODE_LABEL,
    VAR1: VAR1,
    VAR2: VAR2,
    LANGTAG: LANGTAG,
    INTEGER: INTEGER,
    DECIMAL: DECIMAL,
    DOUBLE: DOUBLE,
    INTEGER_POSITIVE: INTEGER_POSITIVE,
    DECIMAL_POSITIVE: DECIMAL_POSITIVE,
    DOUBLE_POSITIVE: DOUBLE_POSITIVE,
    INTEGER_NEGATIVE: INTEGER_NEGATIVE,
    DECIMAL_NEGATIVE: DECIMAL_NEGATIVE,
    DOUBLE_NEGATIVE: DOUBLE_NEGATIVE,
    EXPONENT: EXPONENT,
    STRING_LITERAL1: STRING_LITERAL1,
    STRING_LITERAL2: STRING_LITERAL2,
    STRING_LITERAL_LONG1: STRING_LITERAL_LONG1,
    STRING_LITERAL_LONG2: STRING_LITERAL_LONG2,
    ECHAR: ECHAR,
    NIL: NIL,
    WS: WS,
    ANON: ANON,
    PN_CHARS_BASE: PN_CHARS_BASE,
    PN_CHARS_U: PN_CHARS_U,
    VARNAME: VARNAME,
    PN_CHARS: PN_CHARS,
    PN_PREFIX: PN_PREFIX,
    PN_LOCAL: PN_LOCAL,
    PLX: PLX,
    PERCENT: PERCENT,
    HEX: HEX,
    PN_LOCAL_ESC: PN_LOCAL_ESC
};

function check(string, rule) {
    return new RegExp('^(' + rules[rule] + ')$').test(string);
}

module.exports = {check, rules};