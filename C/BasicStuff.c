// Single line comment

/*
 * Multi
 * Line
 * Comment
 */

// Include statement
#include "header_file.h"
#include <header_file.h>

// Defines a variable to a value, without specifying type manually. Will also be accessable in any files that include this file.
#define RANDOM_VARIABLE 10

// Function
// (Return data type) (Name) (Parameters)
void returnsNothing()
{
    // This function returns nothing
}

// These two do the same
bool returnsBoolean()
{
    return false;
}

bool returnsBoolean(void)
{
    return false;
}

// For loop
int count = 0;
for (int i = 0; i < length; i++)
{
    count += 1;
}
printf(count);
