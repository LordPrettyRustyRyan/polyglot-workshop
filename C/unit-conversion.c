#include <stdio.h>

int main() {

int inp;
float kms, miles, cm, m;

printf("what would you like you like to convert?\n");
printf("1. Miles to Kilometers\n");
printf("2. Kilometers to Miles\n");
printf("3. Centimeters to Meters\n");
printf("4. Meters to Centimeters\n");
printf("Enter the number: ");
scanf("%d", &inp);

switch(inp) {
    case 1:
    printf("\nEnter Miles: ");
    scanf("%f", &miles);
    printf("%.4f Miles = %.4f Kilometers", miles, 1.60934*miles);
    break;
    
    case 2:
    printf("\nEnter Kilometers: ");
    scanf("%f", &kms);
    printf("%.4f Kilometers = %.4f Miles", kms, 0.62137*kms);
    break;
    
    case 3:
    printf("\nEnter Centimeters: ");
    scanf("%f", &cm);
    printf("%.4f Centimeters = %.4f Meters", cm, cm/100);
    break;
    
    case 4:
    printf("\nEnter Meters: ");
    scanf("%f", &m);
    printf("%.4f Meters = %.4f Centimeters", m, 100*m);
    break;
    
    default:
    printf("Invalid input!\n");
}
return 0;
}