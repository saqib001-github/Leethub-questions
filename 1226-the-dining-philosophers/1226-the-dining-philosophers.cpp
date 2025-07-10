class DiningPhilosophers {
private:
    array<mutex, 5> forks;

public:
    DiningPhilosophers() {}

    void wantsToEat(int philosopher, function<void()> pickLeftFork,
                    function<void()> pickRightFork, function<void()> eat,
                    function<void()> putLeftFork,
                    function<void()> putRightFork) {
        int left = philosopher;
        int right = (philosopher + 1) % 5;

        if (left < right) {
            forks[left].lock();
            forks[right].lock();
        } else {
            forks[right].lock();
            forks[left].lock();
        }
        pickLeftFork();
        pickRightFork();
        eat();
        putRightFork();
        putLeftFork();

        forks[left].unlock();
        forks[right].unlock();
    }
};