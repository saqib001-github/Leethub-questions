#include <iostream>
#include <stack>
#include <string>
#include <sstream>
#include <vector>
class Solution {
public:
    string simplifyPath(string path) {
        stack<string> stk;
        stringstream ss(path);
        string token;

        while (getline(ss, token, '/')) {
            if (token == "" || token == ".") {
                continue;
            } else if (token == "..") {
                if (!stk.empty()) {
                    stk.pop();
                }
            } else {
                stk.push(token);
            }
        }
        string result;
        vector<string> dirs;
        while (!stk.empty()) {
            dirs.push_back(stk.top());
            stk.pop();
        }
        reverse(dirs.begin(), dirs.end());
        for (const string& dir : dirs) {
            result += "/" + dir;
        }
        return result.empty() ? "/" : result;
    }
};