#include <iostream>

int main() {
    int x = 2;
    while (x!=0) {
        x >> 31;
        if(x&1) {
            std::cout<<1;
        }
    }
}
