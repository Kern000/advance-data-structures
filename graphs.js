// Every tree will always be a graph but not all graphs will be trees. Linked List, Trees, and Heaps all are special cases of graphs.

// Action	        Adjacency Matrix	Adjacency List
// Adding Edge	        O(1)	        O(1)
// Removing an edge	    O(1)	        O(N)
// Initializing	        O(N*N)	        O(N)

// have a node or vertex
// edge - pair (u,v) not same as (v,u); if unweighted set to 1.
// node v adj to u if edge(u,v) exist

//indegree - no. arrivals to a node
//outdegree - no. departures from a node

// path P(u,v) = (v0, v1, v2... vn);

//isolated node can BFS
// directed graph => Tree and directed Acyclic graph
// undirected => one of them being connected graph w no isolated node
// other graph (Bipartite - edge from each vi to wj)

//parallel edge - 2 vertice connected with more than 1 edge

// walk = traverse where vertex can be repeated
// trail = traverse where vertex cannot be repeated
// circuit = traverse where edge cannot be repeated
// path = both vertex and edge not repeated
// cycle = both not repeated, but end on start node









