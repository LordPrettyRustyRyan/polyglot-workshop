#include <stdio.h>

struct Student
{
int id;
int marks;
char fav_char;
};

int main(){
struct Student harry, ravi, shubham;
harry.id = 1;
harry.marks = 666;
harry.fav_char = 'p';
printf("Harry with id number %d got %d marks and have %c as his fav character\n", harry.id, harry.marks, harry.fav_char);
}
