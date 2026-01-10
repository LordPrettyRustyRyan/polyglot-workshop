#include <stdio.h>

int main() {
int num, index=1;

printf("How many nums you want:\n");
scanf(" %d", &num);

printf("do-while loop:\n");
do{
    printf("%d \n", index);
    index = index + 1;
}while (index<=num);

printf("while loop:\n");
while(index<11){
    printf("%d \n", index);
    index = index + 1;
}
}