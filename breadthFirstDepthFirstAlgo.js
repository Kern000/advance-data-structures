// depth first go as far as possible from random node
// breadth first explore evenly all that are closeby - this is probably a good algo for alot of tech products
// time complexity of bfs and dfs are O(V+E);

const Graph = require("./graphs");
const Queue = require("./queue");

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
console.log("data set is here", airports);
const routes = [
    ["PHX", "LAX"],
    ["PHX", "JFK"],
    ["JFK", "OKC"],
    ["JFK", "HEL"],
    ["JFK", "LOS"],
    ["MEX", "LAX"],
    ["MEX", "BKK"],
    ["MEX", "LIM"],
    ["MEX", "EZE"],
    ["LIM", "BKK"],
]

let graph1 = new Graph;

airports.forEach((airport)=> graph1.addVertexToAdjList(airport));
routes.forEach((route)=> graph1.addUndirectedEdgeToAdjList(route[0],route[1]));
console.log(graph1.adjList);

function BreadthFirstSearch(graph, start, searchValue){

    const queue1 = new Queue;
    queue1.enqueue(start);

    const visited = new Set();
    visited.add(start);

    while (queue1.size() > 0){

        const keyBeingTraversed = queue1.dequeue();

        const destinations = graph.get(keyBeingTraversed);

        for (const destination of destinations){

            if (destination === searchValue){
                console.log(`found destination ${destination}`);
                visited.add(searchValue);
                console.log("enqueued path here, bfs path", visited)
                return visited;
            }

            if(!visited.has(destination)){
                visited.add(destination);
                queue1.enqueue(destination);                
            }
        }
    }    
}

function DepthFirstSearch(graph, start, searchValue, visited=new Set()){

    visited.add(start);

    const destinations = graph.get(start);

    for (const destination of destinations){
        if (destination === searchValue){
            console.log(`found destination ${destination}`);
            visited.add(searchValue);
            console.log("dfs path here", visited)
            return visited;
        }

        if(!visited.has(destination)){
            DepthFirstSearch(graph, destination, searchValue, visited);
        }
    }
}


// // testing //
// BreadthFirstSearch(graph1, "PHX", "BKK");
DepthFirstSearch(graph1, "PHX", "BKK");
// // testing //

// can test if cyclical next time by changing the "Visited" set configurations next time

module.exports = {BreadthFirstSearch,DepthFirstSearch};