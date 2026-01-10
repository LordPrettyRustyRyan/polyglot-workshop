#include <stdio.h>
int main() {
int a, i;
printf("Enter a Number:\n");
scanf("%d", &a);

printf("%d\n", a*1);
printf("%d\n", a*2);
printf("%d\n", a*3);
printf("%d\n", a*4);
printf("%d\n", a*5);
printf("%d\n", a*6);
printf("%d\n", a*7);
printf("%d\n", a*8);
printf("%d\n", a*9);
printf("%d\n", a*10);

printf("Table of %d \n", a);

printf("%d X 1 = %d\n", a, a*1);
printf("%d X 2 = %d\n", a, a*2);
printf("%d X 3 = %d\n", a, a*3);
printf("%d X 4 = %d\n", a, a*4);
printf("%d X 5 = %d\n", a, a*5);
printf("%d X 6 = %d\n", a, a*6);
printf("%d X 7 = %d\n", a, a*7);
printf("%d X 8 = %d\n", a, a*8);
printf("%d X 9 = %d\n", a, a*9);
printf("%d X 10 = %d\n", a, a*10);

printf("\nby using loop:\n");
for (i=1; i<=10; i++)
{
    printf("%d X %d = %d\n", a, i, a*i);
}

}