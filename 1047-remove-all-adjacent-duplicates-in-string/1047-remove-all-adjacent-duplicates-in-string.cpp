class Solution {
public:
    string removeDuplicates(string s) {
        stack<char> stk;
        for(char c : s){
            if(!stk.empty() && stk.top() == c){
                stk.pop();
            }else{
                stk.push(c);
            }
        }
        string res;
        while(!stk.empty()){
            res += stk.top();
            stk.pop();
        }
        reverse(res.begin(),res.end());
        return res;
    }
};