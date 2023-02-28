grammar DIDUrlAbnf;

did_url
    : did path? query? '#'? frag? EOF
    ;

did
    : SCHEMA ':' method_name ':' method_specific_id
    ;

method_name
    : string
    ;

method_specific_id
    : ( string ':'? )* string
    ;

path
   : (('/')? string)* ('/')?
   ;

query
   : '?' search
   ;

frag
   :  (string | DIGIT)
   ;

search
   : searchparameter ('&' searchparameter)*
   ;

searchparameter
   : string ('=' (string | DIGIT | HEX))?
   ;

string
   : STRING
   | DIGIT
   ;

fragment D : ('d' | 'D');
fragment I : ('i' | 'I');
SCHEMA : D I D;

fragment LOWERCASE : [a-z];
fragment UPPERCASE : [A-Z];
ALPHA : ( LOWERCASE | UPPERCASE );

DIGIT : [0-9];
PCT_ENCODED : PERCENT HEX HEX;
PERCENT : '%';
DASH : '-';
PERIOD : '.';
COLON : ':';
UNDERSCORE : '_';
HEX : ('%' [a-fA-F0-9] [a-fA-F0-9])+;

STRING: ([a-zA-Z~0-9] | HEX) ([a-zA-Z0-9.+-] | HEX)*;
SLASH: '/';
