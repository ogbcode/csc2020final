#include <iostream>

using namespace std;

// //Bubble Sort

void print (int a[], int n)
{
    int i;
    for (i = 0; i < n; i++)
    {
        cout <<a[i]<<" ";
    }
    cout<<endl;
}

// void bubble(int a[], int n)
// {
//     int i, j, temp;
//     for (i = 0; i < n; i++)
//     {
//         for (j = i + 1; j < n; j++)
//         {
//             if(a[j] < a[i])
//             {
//                 temp = a[i];
//                 a[i] = a[j];
//                 a[j] = temp;

//             }
           

//         }
//         cout << "Sorting\n";
//         print(a,n);
        
//     }
   
// }

// int main()
// {
//     int i, j, temp;
//     int a[7] = {12, 23, 5, 11, 90, 35, 50};
//     int n = sizeof(a)/sizeof(a[0]);
//     cout<<"Before sorting array elements\n";
//     print(a, n);

//     bubble(a, n);
//     cout<<"\nAfter sorting array elements\n";
//     print(a, n);
// }


//insertion
// int main()
// {
//     int a[] = {12, 23, 5, 11, 90, 35, 50};
//     int n = sizeof(a)/sizeof(a[0]);
//     cout<<"\n Before sorting array elements\n";
//     print(a, n);
//     insertSort(a, n);
//     cout<<"\n Before sorting array elements\n"

// }