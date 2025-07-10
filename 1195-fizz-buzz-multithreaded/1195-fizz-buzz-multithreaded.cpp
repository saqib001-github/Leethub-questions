class FizzBuzz {
private:
    int n;
    mutex mtx;
    condition_variable cv;
    int current = 1;

public:
    FizzBuzz(int n) { this->n = n; }

    // printFizz() outputs "fizz".
    void fizz(function<void()> printFizz) {
        while (true) {
            unique_lock<mutex> lock(mtx);
            cv.wait(lock, [&]() {
                return (current > n) || (current % 3 == 0 && current % 5 != 0);
            });
            if (current > n)
                break;
            printFizz();
            current++;
            cv.notify_all();
        }
    }

    // printBuzz() outputs "buzz".
    void buzz(function<void()> printBuzz) {
        while (true) {

            unique_lock<mutex> lock(mtx);
            cv.wait(lock, [&]() {
                return (current > n) || (current % 3 != 0 && current % 5 == 0);
            });
            if (current > n)
                break;
            printBuzz();
            current++;
            cv.notify_all();
        }
    }

    // printFizzBuzz() outputs "fizzbuzz".
    void fizzbuzz(function<void()> printFizzBuzz) {
        while (true) {

            unique_lock<mutex> lock(mtx);
            cv.wait(lock, [&]() {
                return (current > n) || (current % 3 == 0 && current % 5 == 0);
            });
            if (current > n)
                break;
            printFizzBuzz();
            current++;
            cv.notify_all();
        }
    }

    // printNumber(x) outputs "x", where x is an integer.
    void number(function<void(int)> printNumber) {
        while (true) {

            unique_lock<mutex> lock(mtx);
            cv.wait(lock, [&]() {
                return (current > n) || (current % 3 != 0 && current % 5 != 0);
            });
            if (current > n)
                break;
            printNumber(current);
            current++;
            cv.notify_all();
        }
    }
};