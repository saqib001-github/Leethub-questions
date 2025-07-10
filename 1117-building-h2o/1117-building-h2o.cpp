#include<semaphore>
#include<functional>
#include<barrier>
using namespace std;

class H2O {
private:
    counting_semaphore<2> hydrogen_sem{2};
    counting_semaphore<1> oxygen_sem{1};
    barrier<> syncPoint{3}; 
public:
    H2O() {
        
    }

    void hydrogen(function<void()> releaseHydrogen) {
        hydrogen_sem.acquire();
        syncPoint.arrive_and_wait();
        // releaseHydrogen() outputs "H". Do not change or remove this line.
        releaseHydrogen();
        hydrogen_sem.release();
    }

    void oxygen(function<void()> releaseOxygen) {
        oxygen_sem.acquire();
        syncPoint.arrive_and_wait();
        // releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen();
        oxygen_sem.release();
    }
};