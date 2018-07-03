
#include <stdlib.h>
#include <stdio.h>
#define M 10

unsigned long long find_power(unsigned long long a, unsigned long long n);

int main(void) {
  unsigned long long a = 1378;

  unsigned long long n;
  scanf("%lld",&n);
  //printf("%llu\n",find_power(a,n));
  printf("%llu\n",find_power(a,n)%10);

  return 0;
}

unsigned long long find_power(unsigned long long a, unsigned long long n) {
  // find a^n;

  unsigned long long powers[33] = {1,0};
  unsigned long long aa = a; // this variable is the temp variable for a powers

  for (int i=0; i<32; ++i) {
    powers[i] = aa;
    aa*=aa;
    aa%=M;
  }

  unsigned long long x = 1;

  for (int i=0; i<32; i++) {
    if (n& (1<<i)) {
      x*=powers[i];
    }
    x%=M;
  }

  return x;

}
