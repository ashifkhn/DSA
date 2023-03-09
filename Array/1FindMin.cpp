#include <iostream>
#include <climits>
using namespace std;

int findMin(int array[])
{
    int min = INT_MIN;
    for (int i = 0; i < 5; i++)
    {
        if (array[min] < array[i])
        {
            min = array[i];
        }
    }
    return min;
}

int main()
{
    int arr[5] = {1, 9, 2, 4, 0};
    cout << findMin(arr) << endl;
}
