export const derDefault = `30 # Sequence constructed (WelcomeMsg)
1D # Length (29)
  02 # Type Integer (id)
    01 # Length 1
      12 # 0x12 = 18
  30 # Sequence constructed (someone)
    18 # Length (24)
      1B # Type GeneralString (lastname)
        07 # Length (7)
          47 55 45 4E 45 47 4F # value: GUENEGO
      1B # Type GeneralString (firstname)
        0A # Length (10)
          4A 65 61 6E 2D 4C 6F 75 69 73 # value: Jean-Louis
      01 # Type BOOLEAN (likeCoding)
        01 # Length (1)
          FF # TRUE
`;

export const asn1Default = `HelloProtocol DEFINITIONS ::= BEGIN

Person ::= SEQUENCE {
    lastname           GeneralString,
    firstname          GeneralString,
    likeCoding     BOOLEAN
}

WelcomeMsg ::= SEQUENCE {
    id        INTEGER,
    someone   Person
}

END
`;

export const asn1TypeDefault = 'WelcomeMsg';
