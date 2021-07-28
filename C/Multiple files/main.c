#include "file1.h"
#include "file2.h"

void app_main(void)
{
    int number = 10;
    if (callFile1(number))
    {
        // Number is 10!
    }else if (callFile2(number))
    {
        // Number is 20!
    }else
    {
        // Number is neither 10 nor 20
    }
}
