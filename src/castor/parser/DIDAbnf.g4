grammar DIDAbnf;

did
    : SCHEMA ':' method_name ':' method_specific_id EOF
    ;

method_name
    : (ALPHA | DIGIT)*
    ;

method_specific_id
    : idchar* ( ':' idchar+ )?
    ;

idchar
    : ( ALPHA | DIGIT | PERIOD | DASH | UNDERSCORE | PCT_ENCODED )
    ;

fragment D : ('d' | 'D');
fragment I : ('i' | 'I');
SCHEMA : D I D;

fragment LOWERCASE : [a-z];
fragment UPPERCASE : [A-Z];
ALPHA : ( LOWERCASE | UPPERCASE );

fragment HEX : [0-9a-fA-F];
DIGIT : [0-9];
PCT_ENCODED : PERCENT HEX HEX;
PERCENT : '%';
DASH : '-';
PERIOD : '.';
COLON : ':';
UNDERSCORE : '_';
