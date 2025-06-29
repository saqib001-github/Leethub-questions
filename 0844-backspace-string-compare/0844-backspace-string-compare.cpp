class Solution {
public:
    bool backspaceCompare(string s, string t) {
        if (s.empty() && t.empty())
            return true;
        string s_res = process(s);
        string t_res = process(t);
        return s_res == t_res;
    }
    string process(string str) {
        stack<char> stk;
        for (char c : str) {
            if (c == '#') {
                if (!stk.empty()) {
                    stk.pop();
                }
            } else {
                stk.push(c);
            }
        }
        string res;
        while (!stk.empty()) {
            res += stk.top();
            stk.pop();
        }
        reverse(res.begin(), res.end());
        return res;
    }
};