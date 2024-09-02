This javascript file implements a simple regex engine to support the following syntax:

+--------+---------------------------------------------+---------+----------------------+
| Syntax |                   Meaning                   | Example |       Matches        |
+--------+---------------------------------------------+---------+----------------------+
| a      | Matches the specified character literal     | q       | q                    |
| *      | Matches 0 or more of the previous character | a*      | "", a, aa, aaa       |
| ?      | Matches 0 or 1 of the previous character    | a?      | "", a                |
| .      | Matches any character literal               | .       | a, b, c, d, e ..     |
| ^      | Matches the start of a string               | ^c      | c, ca, caa, cbb ...  |
| $      | Matches the end of a string                 | a$      | ba, baaa, qwerta ... |
+--------+---------------------------------------------+---------+----------------------+

Original idea from: https://nickdrane.com/build-your-own-regex/

