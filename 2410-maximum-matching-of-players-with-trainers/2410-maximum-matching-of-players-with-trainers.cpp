#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int matchPlayersAndTrainers(vector<int>& players, vector<int>& trainers) {
        // Sort both arrays
        sort(players.begin(), players.end());
        sort(trainers.begin(), trainers.end());
        
        int i = 0, j = 0;
        int matches = 0;
        
        // Two pointers
        while (i < players.size() && j < trainers.size()) {
            if (players[i] <= trainers[j]) {
                // Trainer j can train player i
                matches++;
                i++;
                j++;
            } else {
                // Trainer j cannot train player i, try next trainer
                j++;
            }
        }
        
        return matches;
    }
};
