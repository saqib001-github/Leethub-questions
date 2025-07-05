class RandomizedCollection {
private:
    vector<int> nums;
    unordered_map<int, unordered_set<int>> idx_map;

public:
    RandomizedCollection() {}

    bool insert(int val) {
        bool not_present = idx_map[val].empty();
        nums.push_back(val);
        idx_map[val].insert(nums.size() - 1);
        return not_present;
    }

    bool remove(int val) {
        if (idx_map[val].empty()) return false;
        
        int remove_idx = *idx_map[val].begin();
        idx_map[val].erase(remove_idx);

        int last_val = nums.back();
        nums[remove_idx] = last_val;

        idx_map[last_val].insert(remove_idx);
        idx_map[last_val].erase(nums.size() - 1);

        nums.pop_back();

        if (idx_map[val].empty()) {
            idx_map.erase(val);
        }

        return true;
    }

    int getRandom() {
        return nums[rand() % nums.size()];
    }
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection* obj = new RandomizedCollection();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */