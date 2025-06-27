#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> imageSmoother(vector<vector<int>>& img) {
        int m = img.size();
        int n = img[0].size();
        vector<vector<int>> result(m, vector<int>(n, 0));

        // Directions for the 3x3 window including the center
        vector<int> dx = {-1, -1, -1, 0, 0, 0, 1, 1, 1};
        vector<int> dy = {-1, 0, 1, -1, 0, 1, -1, 0, 1};

        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int sum = 0;
                int count = 0;
                for (int k = 0; k < 9; ++k) {
                    int ni = i + dx[k];
                    int nj = j + dy[k];
                    if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                        sum += img[ni][nj];
                        ++count;
                    }
                }
                result[i][j] = sum / count;
            }
        }

        return result;
    }
};
