// 75 LeetCode Problems with video links (Telugu MAANG Prep series)
// Each problem: id, title, description, videoLink, leetcodeUrl, difficulty, category
export const dsaLeetcodeProblems = [
  {
    id: 1,
    title: "MAANG Prep: 75 Essential LeetCode DSA Questions (Intro)",
    description:
      "This video provides an introduction and roadmap to the complete 75 LeetCode Data Structures and Algorithms questions preparation series for MAANG (Microsoft, Amazon, Apple, Netflix, Google) interviews. It explains the importance of these 75 carefully selected questions for cracking coding interviews at top tech companies. The video outlines the preparation strategy, covers the structure of the series, and helps viewers understand how to approach each problem category including Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, and Bit Manipulation. All explanations are provided in Telugu for better understanding.",
    videoLink: "https://www.youtube.com/watch?v=qMzJlL5LQBI",
    leetcodeUrl: "",
    difficulty: "Intro",
    category: "Introduction",
  },
  {
    id: 2,
    title: "Two Sum",
    description:
      "This problem requires finding two numbers in an array that add up to a given target. Given an array of integers and a target integer, we need to return the indices of the two numbers such that they sum to the target. Each input has exactly one solution, and the same element cannot be used twice. The answer can be returned in any order. This is a fundamental problem that tests array manipulation and hash map usage. Example: Input nums = [2,7,11,15], target = 9, Output [0,1] because nums[0] + nums[1] = 9.",
    videoLink: "https://www.youtube.com/watch?v=GjW9aOa50-Q",
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    difficulty: "Easy",
    category: "Arrays & Hashing",
  },
  {
    id: 3,
    title: "Best Time to Buy and Sell Stock",
    description:
      "This problem involves maximizing profit from stock trading. Given an array of prices where each element represents the stock price on a particular day, we need to choose a single day to buy and a different day in the future to sell to maximize profit. If no profit can be achieved, return 0. Example: prices = [7,1,5,3,6,4], the maximum profit is 5 (buy on day 2 at price 1 and sell on day 5 at price 6). This problem tests understanding of array traversal and tracking minimum values.",
    videoLink: "https://www.youtube.com/watch?v=zfUtewM809E",
    leetcodeUrl:
      "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    difficulty: "Easy",
    category: "Arrays & Hashing",
  },
  {
    id: 4,
    title: "Contains Duplicate",
    description:
      "This problem checks if any value appears at least twice in an array. Given an integer array, return true if any value appears at least twice, and false if every element is distinct. Example: nums = [1,2,3,1] returns true because 1 appears twice. This problem tests understanding of hash sets and duplicate detection. A simple yet essential problem for coding interviews that covers data structure selection for efficient lookups.",
    videoLink: "https://www.youtube.com/watch?v=4WGPYzcoG9k",
    leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",
    difficulty: "Easy",
    category: "Arrays & Hashing",
  },
  {
    id: 5,
    title: "Product of Array Except Self",
    description:
      "This problem requires calculating product of all elements except self. Given an integer array, return an array where each element is the product of all other elements in the array. The solution must run in O(n) time without using division operation. The product of any prefix or suffix fits in a 32-bit integer. Example: nums = [1,2,3,4], output = [24,12,8,6]. This problem tests prefix and suffix product techniques and is a classic interview question.",
    videoLink: "https://www.youtube.com/watch?v=lVsIz5jAMmA",
    leetcodeUrl: "https://leetcode.com/problems/product-of-array-except-self/",
    difficulty: "Medium",
    category: "Arrays & Hashing",
  },
  {
    id: 6,
    title: "Maximum Subarray",
    description:
      "This problem asks to find the contiguous subarray with the largest sum and return its sum. Given an integer array, we need to find the subarray with maximum sum. Example: nums = [-2,1,-3,4,-1,2,1,-5,4], output = 6 (subarray [4,-1,2,1] has sum 6). The solution uses Kadane's Algorithm which works by maintaining current sum and maximum sum. If current sum becomes negative, reset it to zero. This is a fundamental dynamic programming problem.",
    videoLink: "https://www.youtube.com/watch?v=06cO3EPoWes",
    leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/",
    difficulty: "Medium",
    category: "Arrays & Hashing",
  },
  {
    id: 7,
    title: "Maximum Product Subarray",
    description:
      "This problem requires finding a contiguous subarray with the largest product. Given an integer array, find the subarray that has the largest product and return the product. Example: nums = [2,3,-2,4], output = 6 ([2,3] has product 6). For nums = [-2,0,-1], output = 0. This problem uses dynamic programming and requires tracking both maximum and minimum products at each position to handle negative numbers effectively.",
    videoLink: "https://www.youtube.com/watch?v=U6w9pS7_V-0",
    leetcodeUrl: "https://leetcode.com/problems/maximum-product-subarray/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 8,
    title: "Find Minimum in Rotated Sorted Array",
    description:
      "This problem requires finding the minimum element in a rotated sorted array of unique elements. The original sorted array has been rotated some number of times. The solution must run in O(log n) time. Example: nums = [3,4,5,1,2], output = 1 (original array [1,2,3,4,5] rotated 3 times). This problem tests binary search implementation on a modified sorted array with pivot detection.",
    videoLink: "https://www.youtube.com/watch?v=vopmtrYOx-s",
    leetcodeUrl:
      "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    difficulty: "Medium",
    category: "Binary Search",
  },
  {
    id: 9,
    title: "Search in Rotated Sorted Array",
    description:
      "This problem requires searching a target value in a rotated sorted array. Given the array after rotation and an integer target, return the index of target if found, or -1 if not found. The solution must run in O(log n) time. Example: nums = [4,5,6,7,0,1,2], target = 0, output = 4; target = 3, output = -1. This problem tests advanced binary search techniques on rotated arrays with comparison logic.",
    videoLink: "https://www.youtube.com/watch?v=jbIzK1jZMhc",
    leetcodeUrl:
      "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    difficulty: "Medium",
    category: "Binary Search",
  },
  {
    id: 10,
    title: "3Sum",
    description:
      "This problem requires finding all triplets in an array that sum to zero. Given an integer array, return all triplets [nums[i], nums[j], nums[k]] where i, j, k are distinct and nums[i] + nums[j] + nums[k] = 0. The solution set must not contain duplicate triplets. Example: nums = [-1,0,1,2,-1,-4], output = [[-1,-1,2],[-1,0,1]]. This is a classic two-pointer technique problem involving sorting and handling duplicates.",
    videoLink: "https://www.youtube.com/watch?v=rAw-BxUizJw",
    leetcodeUrl: "https://leetcode.com/problems/3sum/",
    difficulty: "Medium",
    category: "Two Pointers",
  },
  {
    id: 11,
    title: "Container With Most Water",
    description:
      "This problem requires finding two lines that together with the x-axis form a container with the most water. Given an array of heights representing vertical lines, find the maximum area of water the container can store. Example: height = [1,8,6,2,5,4,8,3,7], output = 49. This problem uses two-pointer technique where we move the pointer pointing to the shorter line inward to potentially find a larger area. The area is calculated as width × min(height[left], height[right]).",
    videoLink: "https://www.youtube.com/watch?v=v4HvnH6L_cM",
    leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
    difficulty: "Medium",
    category: "Two Pointers",
  },
  {
    id: 12,
    title: "Set Matrix Zeroes",
    description:
      "This problem requires setting entire rows and columns to zero if any element in the matrix is zero. Given an m x n integer matrix, if any element is 0, set its entire row and column to 0. The operation must be done in-place without using extra space for a separate matrix. Example: matrix = [[1,1,1],[1,0,1],[1,1,1]], output = [[1,0,1],[0,0,0],[1,0,1]]. This problem tests in-place matrix manipulation using first row and column as markers.",
    videoLink: "https://www.youtube.com/watch?v=mFsoVAfMM0A",
    leetcodeUrl: "https://leetcode.com/problems/set-matrix-zeroes/",
    difficulty: "Medium",
    category: "Matrix",
  },
  {
    id: 13,
    title: "Spiral Matrix",
    description:
      "This problem requires returning all elements of a matrix in spiral order. Given an m x n matrix, traverse the matrix in a spiral pattern starting from the top-left corner, moving right, down, left, up, and repeating until all elements are visited. Example: matrix = [[1,2,3],[4,5,6],[7,8,9]], output = [1,2,3,6,9,8,7,4,5]. This problem tests careful boundary handling and direction control while traversing a 2D array.",
    videoLink: "https://www.youtube.com/watch?v=FlvgvbPvgxE",
    leetcodeUrl: "https://leetcode.com/problems/spiral-matrix/",
    difficulty: "Medium",
    category: "Matrix",
  },
  {
    id: 14,
    title: "Rotate Image",
    description:
      "This problem requires rotating an n x n matrix by 90 degrees clockwise in-place. Given a 2D matrix representing an image, rotate it by 90 degrees without allocating another 2D matrix. Example: matrix = [[1,2,3],[4,5,6],[7,8,9]], output = [[7,4,1],[8,5,2],[9,6,3]]. This problem tests understanding of matrix transposition and row reversal techniques.",
    videoLink: "https://www.youtube.com/watch?v=zGp1MGl8WD4",
    leetcodeUrl: "https://leetcode.com/problems/rotate-image/",
    difficulty: "Medium",
    category: "Matrix",
  },
  {
    id: 15,
    title: "Word Search",
    description:
      'This problem requires searching for a word in a grid of characters. Given an m x n board and a word, return true if the word exists in the grid. The word can be constructed from letters of adjacent cells (horizontally or vertically neighboring). The same cell cannot be used more than once. Example: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED", output = true. This problem tests depth-first search and backtracking on grids.',
    videoLink: "https://www.youtube.com/watch?v=fUMwtUhiaN0",
    leetcodeUrl: "https://leetcode.com/problems/word-search/",
    difficulty: "Medium",
    category: "Backtracking",
  },
  {
    id: 16,
    title: "Longest Substring Without Repeating Characters",
    description:
      'This problem requires finding the length of the longest substring without repeating characters. Given a string, find the longest substring with all distinct characters. Example: s = "abcabcbb", output = 3 ("abc"). This problem uses the sliding window technique with a hash set or hash map to track characters in the current window. It tests understanding of substring problems and efficient window manipulation.',
    videoLink: "https://www.youtube.com/watch?v=liT9Z467sa4",
    leetcodeUrl:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    difficulty: "Medium",
    category: "Sliding Window",
  },
  {
    id: 17,
    title: "Longest Repeating Character Replacement",
    description:
      "This problem requires finding the length of the longest substring containing the same character after at most k replacements. Given a string and an integer k, you can replace any character with another uppercase English character up to k times. Return the length of the longest substring with same letters after performing the operations. Example: s = \"ABAB\", k = 2, output = 4 (replace both 'A's with 'B's or vice versa). This problem uses sliding window with frequency tracking.",
    videoLink: "https://www.youtube.com/watch?v=XSqwI-IMJ8o",
    leetcodeUrl:
      "https://leetcode.com/problems/longest-repeating-character-replacement/",
    difficulty: "Medium",
    category: "Sliding Window",
  },
  {
    id: 18,
    title: "Minimum Window Substring",
    description:
      'This problem requires finding the minimum window substring that contains all characters of string t. Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included. If no such substring exists, return empty string. Example: s = "ADOBECODEBANC", t = "ABC", output = "BANC". This is a classic sliding window problem using two pointers and character counting with frequency maps.',
    videoLink: "https://www.youtube.com/watch?v=sbZ2mhi7aIw",
    leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/",
    difficulty: "Hard",
    category: "Sliding Window",
  },
  {
    id: 19,
    title: "Valid Anagram",
    description:
      'This problem checks if two strings are anagrams of each other. Given two strings s and t, return true if t is an anagram of s, false otherwise. An anagram is formed by rearranging the letters of a word or phrase using all original letters exactly once. Example: s = "anagram", t = "nagaram", output = true; s = "rat", t = "car", output = false. This problem tests character frequency counting using hash maps or sorting approach.',
    videoLink: "https://www.youtube.com/watch?v=r6bohvsFUdQ",
    leetcodeUrl: "https://leetcode.com/problems/valid-anagram/",
    difficulty: "Easy",
    category: "Strings",
  },
  {
    id: 20,
    title: "Group Anagrams",
    description:
      'This problem requires grouping anagrams together from an array of strings. Given an array of strings, group the anagrams together. Return the answer in any order. Example: strs = ["eat","tea","tan","ate","nat","bat"], output = [["bat"],["nat","tan"],["ate","eat","tea"]]. This problem tests use of hash maps with sorted strings as keys or character frequency arrays as keys.',
    videoLink: "https://www.youtube.com/watch?v=8mYj4pkyghI",
    leetcodeUrl: "https://leetcode.com/problems/group-anagrams/",
    difficulty: "Medium",
    category: "Strings",
  },
  {
    id: 21,
    title: "Valid Parentheses",
    description:
      "This problem checks if a string of brackets is valid. Given a string containing characters '(', ')', '{', '}', '[', ']', determine if the input string is valid. A string is valid if open brackets are closed by the same type, closed in correct order, and every close bracket has a corresponding open bracket. Example: s = \"()\" returns true; s = \"()[]{}\" returns true; s = \"(]\" returns false. This problem tests stack data structure usage for bracket matching.",
    videoLink: "https://www.youtube.com/watch?v=CxjDHDnZAfM",
    leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
    difficulty: "Easy",
    category: "Stack",
  },
  {
    id: 22,
    title: "Longest Palindromic Substring",
    description:
      'This problem requires finding the longest palindromic substring in a string. Given a string s, return the longest palindromic substring. Example: s = "babad", output = "bab" (or "aba"); s = "cbbd", output = "bb". This problem tests techniques like expanding around centers (odd and even length palindromes) or dynamic programming approach for palindrome detection.',
    videoLink: "https://www.youtube.com/watch?v=_tja5NitebI",
    leetcodeUrl: "https://leetcode.com/problems/longest-palindromic-substring/",
    difficulty: "Medium",
    category: "Strings",
  },
  {
    id: 23,
    title: "Palindromic Substrings",
    description:
      'This problem requires counting the number of palindromic substrings in a string. Given a string s, return the number of palindromic substrings. A substring is a contiguous sequence of characters. Example: s = "abc", output = 3 ("a", "b", "c"); s = "aaa", output = 6 ("a", "a", "a", "aa", "aa", "aaa"). This problem uses expand around center technique and counts palindromes of odd and even lengths.',
    videoLink: "https://www.youtube.com/watch?v=8ME7fTpXwfM",
    leetcodeUrl: "https://leetcode.com/problems/palindromic-substrings/",
    difficulty: "Medium",
    category: "Strings",
  },
  {
    id: 24,
    title: "Reverse Linked List",
    description:
      "This problem requires reversing a singly linked list. Given the head of a singly linked list, reverse the list and return the reversed list. Example: head = [1,2,3,4,5], output = [5,4,3,2,1]. This problem tests linked list manipulation using iterative approach with three pointers (prev, curr, next) or recursive approach. It is a fundamental linked list problem.",
    videoLink: "https://www.youtube.com/watch?v=4M9mXiwOAuM",
    leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/",
    difficulty: "Easy",
    category: "Linked List",
  },
  {
    id: 25,
    title: "Encode and Decode Strings",
    description:
      'This problem requires designing an algorithm to encode a list of strings into a single string and decode it back to the original list. Design encode and decode methods. Example: encode ["lint","code","love","you"] to "lint;;code;;love;;you" and decode back. This problem tests string manipulation and understanding of delimiters. The challenge is handling strings that may contain the delimiter itself, requiring careful encoding design.',
    videoLink: "https://www.youtube.com/watch?v=zhAza_5USys",
    leetcodeUrl: "https://leetcode.com/problems/encode-and-decode-strings/",
    difficulty: "Medium",
    category: "Strings",
  },
  {
    id: 26,
    title: "Linked List Cycle",
    description:
      "This problem determines if a linked list has a cycle. Given the head of a linked list, return true if there is a cycle, false otherwise. A cycle exists when some node can be reached again by following the next pointer. Example: head = [3,2,0,-4] with tail connecting to position 1, output = true. This problem uses Floyd's Cycle Detection Algorithm (tortoise and hare) with slow and fast pointers to detect cycles efficiently.",
    videoLink: "https://www.youtube.com/watch?v=sP78rPvG4XA",
    leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/",
    difficulty: "Easy",
    category: "Linked List",
  },
  {
    id: 27,
    title: "Merge Two Sorted Lists",
    description:
      "This problem requires merging two sorted linked lists into one sorted list. Given the heads of two sorted linked lists, merge them into a single sorted list by splicing together the nodes. Example: list1 = [1,2,4], list2 = [1,3,4], output = [1,1,2,3,4,4]. This problem tests linked list merging with iterative approach using a dummy node to simplify construction of the merged list.",
    videoLink: "https://www.youtube.com/watch?v=jTN4fLXLwlc",
    leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
    difficulty: "Easy",
    category: "Linked List",
  },
  {
    id: 28,
    title: "Merge K Sorted Lists",
    description:
      "This problem requires merging k sorted linked lists into one sorted linked list. Given an array of k linked lists, each sorted in ascending order, merge all lists into one sorted list. Example: lists = [[1,4,5],[1,3,4],[2,6]], output = [1,1,2,3,4,4,5,6]. This problem can be solved using a priority queue (min-heap) or by repeatedly merging two lists (divide and conquer approach).",
    videoLink: "https://www.youtube.com/watch?v=tYH94SsdhPI",
    leetcodeUrl: "https://leetcode.com/problems/merge-k-sorted-lists/",
    difficulty: "Hard",
    category: "Linked List",
  },
  {
    id: 29,
    title: "Remove Nth Node From End of List",
    description:
      "This problem requires removing the nth node from the end of a linked list. Given the head of a linked list and an integer n, remove the nth node from the end and return the head. Example: head = [1,2,3,4,5], n = 2, output = [1,2,3,5]. This approach uses a two-pass algorithm: first find the length of the list, then traverse to the node before the target and remove it.",
    videoLink: "https://www.youtube.com/watch?v=3zYDxGxGjQo",
    leetcodeUrl:
      "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    difficulty: "Medium",
    category: "Linked List",
  },
  {
    id: 30,
    title: "Remove Nth Node From End of List (DFS)",
    description:
      "This is an alternative solution to removing the nth node from the end of a linked list. Given the head of a linked list and n, remove the nth node from the end. This approach uses a single-pass algorithm with two pointers (fast and slow) or a recursive depth-first search method where the recursion returns the depth from the end, allowing the node to be removed during backtracking.",
    videoLink: "https://www.youtube.com/watch?v=_mV41bPJhPI",
    leetcodeUrl:
      "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    difficulty: "Medium",
    category: "Linked List",
  },
  {
    id: 31,
    title: "Reorder List",
    description:
      "This problem requires reordering a linked list in a specific pattern. Given a singly linked list represented as L0 → L1 → ... → Ln, reorder it to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ... Example: head = [1,2,3,4], output = [1,4,2,3]; head = [1,2,3,4,5], output = [1,5,2,4,3]. The solution involves finding the middle of the list, reversing the second half, and then merging the two halves alternately.",
    videoLink: "https://www.youtube.com/watch?v=SjJFu8P21dE",
    leetcodeUrl: "https://leetcode.com/problems/reorder-list/",
    difficulty: "Medium",
    category: "Linked List",
  },
  {
    id: 32,
    title: "Maximum Depth of Binary Tree",
    description:
      "This problem requires finding the maximum depth (height) of a binary tree. Given the root of a binary tree, return its maximum depth, which is the number of nodes along the longest path from the root to the farthest leaf. Example: root = [3,9,20,null,null,15,7], output = 3. This problem uses recursive approach where depth = 1 + max(depth(left), depth(right)), or iterative approach using level order traversal.",
    videoLink: "https://www.youtube.com/watch?v=7fNxSkv508k",
    leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    difficulty: "Easy",
    category: "Trees",
  },
  {
    id: 33,
    title: "Same Tree",
    description:
      "This problem checks if two binary trees are the same. Given the roots of two binary trees p and q, return true if they are identical (structurally and with same node values), false otherwise. Example: p = [1,2,3], q = [1,2,3], output = true. This problem uses recursive comparison: both roots null returns true; one null returns false; values differ returns false; recursively check left and right subtrees.",
    videoLink: "https://www.youtube.com/watch?v=t7XreO4TwqU",
    leetcodeUrl: "https://leetcode.com/problems/same-tree/",
    difficulty: "Easy",
    category: "Trees",
  },
  {
    id: 34,
    title: "Invert Binary Tree",
    description:
      "This problem requires inverting a binary tree (swapping left and right children of every node). Given the root of a binary tree, invert the tree and return the root. Example: root = [4,2,7,1,3,6,9], output = [4,7,2,9,6,3,1]. This problem uses a simple recursive approach: swap the left and right children at each node, then recursively invert the left and right subtrees.",
    videoLink: "https://www.youtube.com/watch?v=W0TWj9tr2YY",
    leetcodeUrl: "https://leetcode.com/problems/invert-binary-tree/",
    difficulty: "Easy",
    category: "Trees",
  },
  {
    id: 35,
    title: "Binary Tree Maximum Path Sum",
    description:
      "This problem requires finding the maximum path sum in a binary tree. A path is a sequence of nodes where each pair has an edge connecting them. A node can appear at most once, and the path does not need to pass through the root. The path sum is the sum of node values. Example: root = [1,2,3], output = 6 (path 2→1→3 sum = 6). This problem uses recursion where each node returns the maximum contribution (node value + max of left/right gains) and tracks the maximum path sum through each node.",
    videoLink: "https://www.youtube.com/watch?v=Z5QL4Po8EGQ",
    leetcodeUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    difficulty: "Hard",
    category: "Trees",
  },
  {
    id: 36,
    title: "Binary Tree Level Order Traversal",
    description:
      "This problem requires returning level order traversal of a binary tree. Given the root of a binary tree, return the values of nodes level by level (left to right). Example: root = [3,9,20,null,null,15,7], output = [[3],[9,20],[15,7]]. This problem uses a queue (BFS approach) to traverse the tree level by level, processing all nodes at each level before moving to the next.",
    videoLink: "https://www.youtube.com/watch?v=n69oY3HEins",
    leetcodeUrl:
      "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    difficulty: "Medium",
    category: "Trees",
  },
  {
    id: 37,
    title: "Serialize and Deserialize Binary Tree",
    description:
      "This problem requires designing algorithms to serialize and deserialize a binary tree. Serialization converts a binary tree to a string, and deserialization reconstructs the tree from that string. There is no restriction on the format. Example: root = [1,2,3,null,null,4,5] should serialize and deserialize back to the same tree. This problem tests understanding of tree traversal (preorder or level order) and string parsing to reconstruct the tree structure.",
    videoLink: "https://www.youtube.com/watch?v=OJEA944g5oM",
    leetcodeUrl:
      "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    difficulty: "Hard",
    category: "Trees",
  },
  {
    id: 38,
    title: "Subtree of Another Tree",
    description:
      "This problem checks if one binary tree is a subtree of another. Given two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot. Example: root = [3,4,5,1,2], subRoot = [4,1,2], output = true. This problem uses recursion to check if subRoot matches root or any of root's subtrees using a helper function that checks if two trees are identical.",
    videoLink: "https://www.youtube.com/watch?v=o1kN4EcDH6o",
    leetcodeUrl: "https://leetcode.com/problems/subtree-of-another-tree/",
    difficulty: "Easy",
    category: "Trees",
  },
  {
    id: 39,
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    description:
      "This problem requires constructing a binary tree from preorder and inorder traversal arrays. Given two integer arrays preorder and inorder, construct and return the binary tree. Example: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7], output = [3,9,20,null,null,15,7]. This problem uses the fact that preorder's first element is root, find it in inorder, left part is left subtree, right part is right subtree, then recursively construct.",
    videoLink: "https://www.youtube.com/watch?v=09s2pZv0jqc",
    leetcodeUrl:
      "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    difficulty: "Medium",
    category: "Trees",
  },
  {
    id: 40,
    title: "Binary Tree Zigzag Level Order Traversal",
    description:
      "This problem requires returning zigzag level order traversal of a binary tree. Given the root of a binary tree, return level order traversal where nodes are processed left-to-right at even levels and right-to-left at odd levels. Example: root = [3,9,20,null,null,15,7], output = [[3],[20,9],[15,7]]. This problem uses BFS with a queue and a flag to reverse the order of nodes at each level.",
    videoLink: "https://www.youtube.com/watch?v=M_2IZf-g3qw",
    leetcodeUrl:
      "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    difficulty: "Medium",
    category: "Trees",
  },
  {
    id: 41,
    title: "Validate Binary Search Tree",
    description:
      "This problem validates if a binary tree is a valid Binary Search Tree (BST). Given the root of a binary tree, determine if it is a valid BST. A valid BST has: left subtree containing only nodes with keys less than node's key, right subtree containing only nodes with keys greater than node's key, and both subtrees are valid BSTs. Example: root = [2,1,3], output = true. This problem uses in-order traversal or range-based recursion to validate BST properties.",
    videoLink: "https://www.youtube.com/watch?v=rB25y6zqayY",
    leetcodeUrl: "https://leetcode.com/problems/validate-binary-search-tree/",
    difficulty: "Medium",
    category: "Trees",
  },
  {
    id: 42,
    title: "Kth Smallest Element in a BST",
    description:
      "This problem requires finding the kth smallest element in a Binary Search Tree. Given the root of a BST and an integer k, return the kth smallest value (1-indexed). Example: root = [3,1,4,null,2], k = 1, output = 1. This problem uses in-order traversal of the BST, which visits nodes in sorted order. The kth node visited during traversal is the answer. Can be solved iteratively or recursively.",
    videoLink: "https://www.youtube.com/watch?v=Zxsi81RGZ4U",
    leetcodeUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    difficulty: "Medium",
    category: "Trees",
  },
  {
    id: 43,
    title: "Lowest Common Ancestor of a Binary Search Tree",
    description:
      "This problem requires finding the lowest common ancestor (LCA) of two nodes in a Binary Search Tree. Given a BST and two nodes p and q, find the lowest node that has both p and q as descendants. Example: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8, output = 6. In a BST, the LCA is the first node whose value lies between p.val and q.val (inclusive). This property makes the solution simple.",
    videoLink: "https://www.youtube.com/watch?v=I6_DoixraQU",
    leetcodeUrl:
      "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    difficulty: "Medium",
    category: "Trees",
  },
  {
    id: 44,
    title: "Implement Trie (Prefix Tree)",
    description:
      'This problem requires implementing a Trie (Prefix Tree) data structure. The Trie class supports: insert(String word) - inserts a word into the trie; search(String word) - returns true if word is in the trie; startsWith(String prefix) - returns true if any inserted word has the given prefix. Example: insert "apple", search "apple" returns true, search "app" returns false, startsWith "app" returns true. This problem tests understanding of tree-based string storage and prefix searching.',
    videoLink: "https://www.youtube.com/watch?v=BOoR91es740",
    leetcodeUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    difficulty: "Medium",
    category: "Trie",
  },
  {
    id: 45,
    title: "Design Add and Search Words Data Structure",
    description:
      'This problem requires designing a data structure that supports adding words and searching for words with wildcard dots. Implement WordDictionary class with: addWord(word) - adds a word; search(word) - returns true if any added word matches, where \'.\' can match any single character. Example: addWord "bad", addWord "dad", search "b.." returns true. This problem uses Trie with recursive DFS for search where \'.\' matches any node at that level.',
    videoLink: "https://www.youtube.com/watch?v=76nfH0pxUWA",
    leetcodeUrl:
      "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    difficulty: "Medium",
    category: "Trie",
  },
  {
    id: 46,
    title: "Word Search II",
    description:
      'This problem requires finding all words from a list that exist in a board. Given an m x n board and a list of words, return all words on the board. Each word is constructed from adjacent cells (horizontally or vertically), and the same cell cannot be used more than once. Example: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"], output = ["eat","oath"]. This problem uses Trie to store all words and DFS with backtracking on the board.',
    videoLink: "https://www.youtube.com/watch?v=E4BVu5aNGl0",
    leetcodeUrl: "https://leetcode.com/problems/word-search-ii/",
    difficulty: "Hard",
    category: "Trie",
  },
  {
    id: 47,
    title: "Top K Frequent Elements",
    description:
      "This problem requires finding the k most frequent elements in an array. Given an integer array and integer k, return the k most frequent elements. Answer can be in any order. Example: nums = [1,1,1,2,2,3], k = 2, output = [1,2]. This problem uses a hash map to count frequencies and a bucket sort (array of lists by frequency) or a min-heap (priority queue) to extract the top k elements.",
    videoLink: "https://www.youtube.com/watch?v=8YyeibZp9ds",
    leetcodeUrl: "https://leetcode.com/problems/top-k-frequent-elements/",
    difficulty: "Medium",
    category: "Heap",
  },
  {
    id: 48,
    title: "Find Median from Data Stream",
    description:
      "This problem requires designing a data structure that supports adding numbers and finding the median of the current data stream. The median is the middle value in an ordered list; for even length, median is the mean of two middle values. Example: addNum(1), addNum(2), findMedian() returns 1.5; addNum(3), findMedian() returns 2.0. This problem uses two heaps: a max-heap for the lower half and a min-heap for the upper half to efficiently maintain the median.",
    videoLink: "https://www.youtube.com/watch?v=BUH5KXiFtaw",
    leetcodeUrl: "https://leetcode.com/problems/find-median-from-data-stream/",
    difficulty: "Hard",
    category: "Heap",
  },
  {
    id: 49,
    title: "Clone Graph",
    description:
      "This problem requires creating a deep copy (clone) of an undirected graph. Given a reference to a node in a connected undirected graph, return a deep copy of the graph. Each node contains a value and a list of its neighbors. Example: adjList = [[2,4],[1,3],[2,4],[1,3]] returns a deep copy. This problem uses BFS or DFS with a hash map to track visited nodes and map original nodes to their cloned copies.",
    videoLink: "https://www.youtube.com/watch?v=CRaZP12HlyQ",
    leetcodeUrl: "https://leetcode.com/problems/clone-graph/",
    difficulty: "Medium",
    category: "Graphs",
  },
  {
    id: 50,
    title: "Course Schedule",
    description:
      "This problem determines if all courses can be finished given prerequisites. Given numCourses and a prerequisites array where prerequisites[i] = [ai, bi] means course bi must be taken before course ai, return true if all courses can be finished, false otherwise. Example: numCourses = 2, prerequisites = [[1,0]], output = true. This problem uses topological sort (Kahn's algorithm) or DFS with cycle detection to check if the prerequisite graph has a cycle.",
    videoLink: "https://www.youtube.com/watch?v=r7x5VBzAIoY",
    leetcodeUrl: "https://leetcode.com/problems/course-schedule/",
    difficulty: "Medium",
    category: "Graphs",
  },
  {
    id: 51,
    title: "Number of Islands",
    description:
      "This problem counts the number of islands in a 2D binary grid. Given an m x n grid of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically. Example: grid with all '1's in one connected component returns 1. This problem uses DFS or BFS to traverse each land cell and mark visited cells, counting each connected component.",
    videoLink: "https://www.youtube.com/watch?v=wreu3u_xdd8",
    leetcodeUrl: "https://leetcode.com/problems/number-of-islands/",
    difficulty: "Medium",
    category: "Graphs",
  },
  {
    id: 52,
    title: "Pacific Atlantic Water Flow",
    description:
      "This problem finds cells where water can flow to both the Pacific and Atlantic oceans. Given an m x n height matrix, water flows to neighboring cells if neighbor's height <= current cell's height. Pacific Ocean touches left and top edges; Atlantic touches right and bottom edges. Return coordinates where rainwater can flow to both oceans. This problem uses DFS/BFS from ocean boundaries (Pacific from top and left, Atlantic from bottom and right) to mark reachable cells, then find intersection.",
    videoLink: "https://www.youtube.com/watch?v=yH0DesUBuFo",
    leetcodeUrl: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    difficulty: "Medium",
    category: "Graphs",
  },
  {
    id: 53,
    title: "Longest Consecutive Sequence",
    description:
      "This problem finds the length of the longest consecutive elements sequence in an unsorted array. Given an unsorted integer array, return the length of the longest consecutive sequence. The algorithm must run in O(n) time. Example: nums = [100,4,200,1,3,2], output = 4 ([1,2,3,4]). This problem uses a hash set to store all numbers, then for each number, checks if it's the start of a sequence (num-1 not in set), and counts consecutive elements.",
    videoLink: "https://www.youtube.com/watch?v=F31UjCHu1WM",
    leetcodeUrl: "https://leetcode.com/problems/longest-consecutive-sequence/",
    difficulty: "Medium",
    category: "Arrays & Hashing",
  },
  {
    id: 54,
    title: "Alien Dictionary",
    description:
      'This problem derives the order of letters in an alien language. Given a list of words sorted lexicographically by the rules of a new language, derive the order of letters. Example: ["wrt","wrf","er","ett","rftt"] returns "wertf". This problem uses topological sort on a graph where edges represent order relationships between letters. Compare adjacent words to find the first differing character and build the graph.',
    videoLink: "https://www.youtube.com/watch?v=DQONKW1255g",
    leetcodeUrl: "https://leetcode.com/problems/alien-dictionary/",
    difficulty: "Hard",
    category: "Graphs",
  },
  {
    id: 55,
    title: "Graph Valid Tree",
    description:
      "This problem checks if given edges form a valid tree. Given n nodes labeled 0 to n-1 and a list of undirected edges, check if these edges make up a valid tree. A valid tree has n nodes, n-1 edges, and is fully connected with no cycles. Example: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]], output = true. This problem uses union-find or DFS to check for cycles and connectivity.",
    videoLink: "https://www.youtube.com/watch?v=fbznsldBpRA",
    leetcodeUrl: "https://leetcode.com/problems/graph-valid-tree/",
    difficulty: "Medium",
    category: "Graphs",
  },
  {
    id: 56,
    title: "Number of Connected Components in an Undirected Graph",
    description:
      "This problem finds the number of connected components in an undirected graph. Given n nodes labeled 0 to n-1 and a list of undirected edges, find the number of connected components. Example: n = 5, edges = [[0,1],[1,2],[3,4]], output = 2 (components: {0,1,2} and {3,4}). This problem uses union-find or DFS to count distinct connected groups of nodes.",
    videoLink: "https://www.youtube.com/watch?v=30I_IEgm_Pc",
    leetcodeUrl:
      "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    difficulty: "Medium",
    category: "Graphs",
  },
  {
    id: 57,
    title: "Climbing Stairs",
    description:
      "This problem counts the number of ways to climb a staircase. You are climbing a staircase that takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top? Example: n = 2, output = 2 (1+1 or 2); n = 3, output = 3 (1+1+1, 1+2, 2+1). This is a classic Fibonacci sequence problem solved using dynamic programming: ways[n] = ways[n-1] + ways[n-2].",
    videoLink: "https://www.youtube.com/watch?v=UQTvXqWxKvE",
    leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/",
    difficulty: "Easy",
    category: "Dynamic Programming",
  },
  {
    id: 58,
    title: "Coin Change",
    description:
      "This problem finds the fewest number of coins needed to make a given amount. Given an array of coin denominations and a target amount, return the fewest number of coins to make that amount. If the amount cannot be made, return -1. Example: coins = [1,2,5], amount = 11, output = 3 (5+5+1). This problem uses dynamic programming: dp[amount] = min(dp[amount - coin] + 1) for each coin, with dp[0] = 0.",
    videoLink: "https://www.youtube.com/watch?v=R5tnHGLNLD4",
    leetcodeUrl: "https://leetcode.com/problems/coin-change/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 59,
    title: "Longest Increasing Subsequence",
    description:
      "This problem finds the length of the longest strictly increasing subsequence. Given an integer array, return the length of the longest strictly increasing subsequence. Example: nums = [10,9,2,5,3,7,101,18], output = 4 ([2,3,7,101]); nums = [0,1,0,3,2,3], output = 4. This problem uses dynamic programming (O(n²)) or patience sorting with binary search (O(n log n)) to track the smallest tail values.",
    videoLink: "https://www.youtube.com/watch?v=ogUnDgLtgTw",
    leetcodeUrl:
      "https://leetcode.com/problems/longest-increasing-subsequence/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 60,
    title: "Longest Common Subsequence",
    description:
      'This problem finds the length of the longest common subsequence between two strings. Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is formed by deleting some characters without changing relative order. Example: text1 = "abcde", text2 = "ace", output = 3 ("ace"). This problem uses 2D dynamic programming where dp[i][j] = dp[i-1][j-1]+1 if chars match, else max(dp[i-1][j], dp[i][j-1]).',
    videoLink: "https://www.youtube.com/watch?v=syERHFbrTk0",
    leetcodeUrl: "https://leetcode.com/problems/longest-common-subsequence/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 61,
    title: "Word Break",
    description:
      'This problem checks if a string can be segmented into dictionary words. Given a string s and a dictionary of strings wordDict, return true if s can be segmented into one or more dictionary words. The same word can be reused. Example: s = "leetcode", wordDict = ["leet","code"], output = true. This problem uses dynamic programming where dp[i] represents if s[0:i] can be segmented, checking all words that match suffix ending at i.',
    videoLink: "https://www.youtube.com/watch?v=ZFfsAh9Z1xk",
    leetcodeUrl: "https://leetcode.com/problems/word-break/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 62,
    title: "Combination Sum IV (DP)",
    description:
      "This problem counts the number of combinations that sum to a target. Given an array of distinct integers and a target integer, return the number of possible combinations that add up to the target. Different sequences are counted as different combinations. Example: nums = [1,2,3], target = 4, output = 7. This problem uses dynamic programming where dp[amount] = sum of dp[amount - num] for each num, with dp[0] = 1. This counts permutations/combinations with order mattering.",
    videoLink: "https://www.youtube.com/watch?v=oZ-yC2dDG94",
    leetcodeUrl: "https://leetcode.com/problems/combination-sum-iv/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 63,
    title: "Combination Sum (Backtracking)",
    description:
      "This problem finds all combinations that sum to a target using backtracking. Given an array of distinct integers and a target, find all unique combinations where numbers sum to target. Each number can be used unlimited times. Example: candidates = [2,3,6,7], target = 7, output = [[7],[2,2,3]]. This problem uses backtracking with recursion, exploring all combinations by including the current element and moving forward (allowing reuse).",
    videoLink: "https://www.youtube.com/watch?v=6i9kWyCLrko",
    leetcodeUrl: "https://leetcode.com/problems/combination-sum/",
    difficulty: "Medium",
    category: "Backtracking",
  },
  {
    id: 64,
    title: "House Robber",
    description:
      "This problem finds the maximum amount a robber can rob without alerting police. Given an integer array representing money in each house, adjacent houses cannot be robbed on the same night. Return the maximum amount that can be robbed. Example: nums = [1,2,3,1], output = 4 (rob houses 1 and 3: 1+3=4). This problem uses dynamic programming where dp[i] = max(dp[i-1], dp[i-2] + nums[i]), representing robbing or skipping the current house.",
    videoLink: "https://www.youtube.com/watch?v=k5MRvhAGQ6E",
    leetcodeUrl: "https://leetcode.com/problems/house-robber/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 65,
    title: "House Robber II",
    description:
      "This problem is similar to House Robber but with houses arranged in a circle. Given an integer array representing money in each house, houses are in a circle (first and last are adjacent). Return the maximum amount that can be robbed. Example: nums = [2,3,2], output = 3. This problem uses House Robber solution twice: once excluding the first house, and once excluding the last house, and taking the maximum of both.",
    videoLink: "https://www.youtube.com/watch?v=e1c4KThCbUE",
    leetcodeUrl: "https://leetcode.com/problems/house-robber-ii/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 66,
    title: "Decode Ways",
    description:
      "This problem counts the number of ways to decode a digit string into letters. Given a string containing only digits, where 'A' → 1, 'B' → 2, ..., 'Z' → 26, return the number of ways to decode it. Example: s = \"12\", output = 2 (\"AB\" and \"L\"). This problem uses dynamic programming where dp[i] = dp[i-1] + dp[i-2] if the two digits form a valid number (10-26), with careful handling of leading zeros.",
    videoLink: "https://www.youtube.com/watch?v=Ppv0MbzvRcc",
    leetcodeUrl: "https://leetcode.com/problems/decode-ways/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 67,
    title: "Unique Paths",
    description:
      "This problem counts the number of unique paths from top-left to bottom-right in a grid. Given an m x n grid, a robot starts at grid[0][0] and moves to grid[m-1][n-1], moving only down or right. Return the number of possible unique paths. Example: m = 3, n = 2, output = 3. This problem uses dynamic programming where dp[i][j] = dp[i-1][j] + dp[i][j-1], or combinatorics using C(m+n-2, m-1).",
    videoLink: "https://www.youtube.com/watch?v=pUt21JEa1Sw",
    leetcodeUrl: "https://leetcode.com/problems/unique-paths/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 68,
    title: "Jump Game",
    description:
      "This problem determines if you can reach the last index in an array. Given an array where each element represents the maximum jump length at that position, return true if you can reach the last index, false otherwise. Example: nums = [2,3,1,1,4], output = true; nums = [3,2,1,0,4], output = false. This problem uses greedy approach tracking the furthest reachable index: maxReach = max(maxReach, i + nums[i]).",
    videoLink: "https://www.youtube.com/watch?v=WgFQQLB1MY4",
    leetcodeUrl: "https://leetcode.com/problems/jump-game/",
    difficulty: "Medium",
    category: "Dynamic Programming",
  },
  {
    id: 69,
    title: "Insert Interval",
    description:
      "This problem inserts a new interval into a sorted non-overlapping interval list. Given an array of non-overlapping intervals sorted by start, and a new interval, insert it and merge if necessary. Example: intervals = [[1,3],[6,9]], newInterval = [2,5], output = [[1,5],[6,9]]. This problem tests interval manipulation: find insertion position, merge overlapping intervals, and reconstruct the result.",
    videoLink: "https://www.youtube.com/watch?v=OOYtF5tHxLc",
    leetcodeUrl: "https://leetcode.com/problems/insert-interval/",
    difficulty: "Medium",
    category: "Intervals",
  },
  {
    id: 70,
    title: "Merge Intervals",
    description:
      "This problem merges all overlapping intervals. Given an array of intervals, merge all overlapping intervals and return non-overlapping intervals covering all input intervals. Example: intervals = [[1,3],[2,6],[8,10],[15,18]], output = [[1,6],[8,10],[15,18]]. This problem sorts intervals by start, then iteratively merges if current.start <= last.end, updating the end to max(last.end, current.end).",
    videoLink: "https://www.youtube.com/watch?v=qafLchuse5A",
    leetcodeUrl: "https://leetcode.com/problems/merge-intervals/",
    difficulty: "Medium",
    category: "Intervals",
  },
  {
    id: 71,
    title: "Non-overlapping Intervals",
    description:
      "This problem finds the minimum number of intervals to remove to make the rest non-overlapping. Given an array of intervals, return the minimum number of intervals to remove. Example: intervals = [[1,2],[2,3],[3,4],[1,3]], output = 1 ([1,3] can be removed). This problem sorts by end time and uses greedy approach to count intervals that overlap with the selected interval.",
    videoLink: "https://www.youtube.com/watch?v=pYVS4y7dqCc",
    leetcodeUrl: "https://leetcode.com/problems/non-overlapping-intervals/",
    difficulty: "Medium",
    category: "Intervals",
  },
  {
    id: 72,
    title: "Meeting Rooms",
    description:
      "This problem determines if a person can attend all meetings. Given an array of meeting intervals [start, end], determine if a person could attend all meetings. Example: [[0,30],[5,10],[15,20]] returns false (overlap); [[7,10],[2,4]] returns true. This problem sorts intervals by start time and checks if any interval's start is less than the previous interval's end (overlap).",
    videoLink: "https://www.youtube.com/watch?v=j-SG7G-hPr0",
    leetcodeUrl: "https://leetcode.com/problems/meeting-rooms/",
    difficulty: "Easy",
    category: "Intervals",
  },
  {
    id: 73,
    title: "Meeting Rooms II",
    description:
      "This problem finds the minimum number of conference rooms required. Given an array of meeting intervals, find the minimum number of rooms needed. Example: [[0,30],[5,10],[15,20]] output = 2; [[7,10],[2,4]] output = 1. This problem sorts start and end times separately, or uses a min-heap to track end times of meetings, counting the maximum number of simultaneous meetings.",
    videoLink: "https://www.youtube.com/watch?v=UZGxzrdpec4",
    leetcodeUrl: "https://leetcode.com/problems/meeting-rooms-ii/",
    difficulty: "Medium",
    category: "Intervals",
  },
  {
    id: 74,
    title: "Sum of Two Integers",
    description:
      "This problem adds two integers without using + and - operators. Given two integers a and b, return their sum without using the operators + and -. Example: a = 1, b = 2, output = 3; a = 2, b = 3, output = 5. This problem uses bit manipulation: XOR gives sum without carry, AND and left shift gives carry. Repeat until no carry remains: sum = a ^ b, carry = (a & b) << 1, continue with a = sum, b = carry.",
    videoLink: "https://www.youtube.com/watch?v=DCCzKeRajdQ",
    leetcodeUrl: "https://leetcode.com/problems/sum-of-two-integers/",
    difficulty: "Medium",
    category: "Bit Manipulation",
  },
  {
    id: 75,
    title: "Number of 1 Bits",
    description:
      "This problem counts the number of '1' bits (Hamming weight) in an integer's binary representation. Write a function that takes an unsigned integer and returns the number of '1' bits. Example: n = 00000000000000000000000000001011, output = 3. This problem uses bit manipulation: while n != 0, n &= n-1 clears the lowest set bit, count increments. This is the Brian Kernighan's algorithm, or simply loop through bits.",
    videoLink: "https://www.youtube.com/watch?v=hf2_2OdgeXo",
    leetcodeUrl: "https://leetcode.com/problems/number-of-1-bits/",
    difficulty: "Easy",
    category: "Bit Manipulation",
  },
  {
    id: 76,
    title: "Counting Bits",
    description:
      "This problem counts the number of 1 bits for each number from 0 to n. Given an integer n, return an array of length n+1 where ans[i] is the number of 1's in the binary representation of i. Example: n = 2, output = [0,1,1]. This problem uses dynamic programming: ans[i] = ans[i >> 1] + (i & 1), where i >> 1 is the number without the last bit, and (i & 1) tells if the last bit is 1.",
    videoLink: "https://www.youtube.com/watch?v=CcT90t2NXNg",
    leetcodeUrl: "https://leetcode.com/problems/counting-bits/",
    difficulty: "Easy",
    category: "Bit Manipulation",
  },
  {
    id: 77,
    title: "Missing Number",
    description:
      "This problem finds the missing number in an array. Given an array containing n distinct numbers in range [0, n], return the only missing number. Example: nums = [3,0,1], output = 2; nums = [0,1], output = 2. This problem uses XOR operation (x ^= i ^ nums[i]) where all numbers from 0 to n cancel out with array values, leaving the missing number, or uses sum formula: (n * (n+1))/2 - sum(nums).",
    videoLink: "https://www.youtube.com/watch?v=0N75JhBXCQQ",
    leetcodeUrl: "https://leetcode.com/problems/missing-number/",
    difficulty: "Easy",
    category: "Bit Manipulation",
  },
  {
    id: 78,
    title: "Reverse Bits",
    description:
      "This problem reverses the bits of a 32-bit unsigned integer. Given a 32-bit unsigned integer, reverse its bits and return the result. Example: n = 00000010100101000001111010011100, output = 964176192 (binary: 00111001011110000010100101000000). This problem uses bit manipulation: loop 32 times, extract the last bit of n, add it to result by shifting, then right shift n and left shift result.",
    videoLink: "https://www.youtube.com/watch?v=LtN-rJLvijA",
    leetcodeUrl: "https://leetcode.com/problems/reverse-bits/",
    difficulty: "Easy",
    category: "Bit Manipulation",
  },
];
