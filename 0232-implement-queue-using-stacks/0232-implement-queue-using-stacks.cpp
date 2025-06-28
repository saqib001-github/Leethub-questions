class MyQueue {
private:
    std::stack<int> stack_in;
    std::stack<int> stack_out;

    // Helper function to transfer elements from stack_in to stack_out
    void transfer() {
        while (!stack_in.empty()) {
            stack_out.push(stack_in.top());
            stack_in.pop();
        }
    }

public:
    MyQueue() {}

    void push(int x) {
        stack_in.push(x);
    }

    int pop() {
        if(stack_out.empty()){
            transfer();
        }
        int front = stack_out.top();
        stack_out.pop();
        return front;
    }

    int peek() {
        if(stack_out.empty()){
            transfer();
        }
        return stack_out.top();
    }

    bool empty() {
        return stack_in.empty() && stack_out.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */