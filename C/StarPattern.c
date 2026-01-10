#include <stdio.h>

void starPattern(int rows){
    for (int i = 0; i < rows; i++){
        for (int j = 0; j <= i; j++){
            printf("*");
        }
        printf("\n");
    }
}

void reverseStarPattern(int rows)
{
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j <= rows - i - 1; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}

int main() {
    int rows, type;
    printf("Enter 0 for Star Pattern\nEnter 1 for Reversed Star Pattern\n");
    scanf("%d", &type);
    printf("How many rows do you want?\n");
    scanf("%d", &rows);
    switch (type)
    {
    case 0:
        starPattern(rows);
        break;

    case 1:
        reverseStarPattern(rows);
        break;

    default:
        printf("You have entered an invalid choice");
        break;
    }
    return 0;
}