#include <stdio.h>

int main() {
char c;

printf("So which exams you passed?\nChoose options (A, B or C):\nA.Maths\nB.English\nC.Both\n\n");
scanf(" %c", &c);

printf("\nif-else-if output:");

if (c=='A'||c=='a'){
    printf("\nCongrats, you Passed Maths \n Here's you gift: \n $15");
}
else if (c=='B'||c=='b'){
    printf("\nCongrats, you Passed English \n Here's you gift: \n $15");
}
else if (c=='C'||c=='c'){
    printf("\nCongrats, you Passed Both exams \n Here's you gift: \n $45");
}
else {
    printf("\nman,get outta here!");
}

//You should use == for comparison, not =
//= is assignment | == is comparison
//'||' is OR operator

printf("\n\nswitch output:");

switch (c){
    case 'A':
    case 'a':
    printf("\nCongrats, you Passed Maths \n Here's you gift: \n $15");
    break;
    case 'B':
    case 'b':
    printf("\nCongrats, you Passed English \n Here's you gift: \n $15");
    break;
    case 'C':
    case 'c':
    printf("\nCongrats, you Passed both \n Here's you gift: \n $45");
    break;
    default:
    printf("\nman,get outta here!");
}

//next step be using toupper() instead of using double cases.
}