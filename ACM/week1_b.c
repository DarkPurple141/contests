
#include <stdlib.h>
#include <stdio.h>
#include <math.h>

#define M 1e9+7
#define A_Max 500000004

static char factors[A_Max] = {1,1,0};

void prime_factors(unsigned long long a, char * factors);
void generate_primes(char * factors);

int main(void) {

  unsigned long long n;
  generate_primes(factors);

  for (int i=0; scanf("%lld",&n)!=EOF; i++) {
    prime_factors(n, factors);
  }

  return 0;
}

void prime_factors(unsigned long long a,char factors[]) {

  printf("1");
  unsigned long long i;
  unsigned long long max = a/2;

  for (i=2;i<=max;i++) {
    if (factors[i]) continue;
    while (!(a%i)) {
      a/=i;
      printf(" x %lld",i);
    }
  }
  printf("\n");

}

void generate_primes(char factors[]) {
  unsigned long long j, i;

  for (i=4; i<A_Max;i+=2) {
    factors[i] = 1;
  }

  for (i=3;i<A_Max;i+=2) {
    if (!factors[i]) {
      for (j=i+i; j<A_Max; j+=i) {
        factors[j] = 1;
      }
    }
  }
}
