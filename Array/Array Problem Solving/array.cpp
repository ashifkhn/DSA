#include <iostream>
using namespace std;

int main()
{
    int arr[4] = {1, 2, 3, 4};
    cout << "arr " << arr << endl;
    for (int i = 0; i < 4; i += 2)
    {

        swap(arr[i], arr[i + 1]);
        cout << arr[i] << endl;
    }
}