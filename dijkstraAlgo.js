// *** THEORY & README ***
// shortest path in weighted graph (I find it easiest in adjacency matrix)
// longest path - apply * -1 to edges, and convert back later with * -1

// A spanning tree of an undirected graph G is a connected subgraph that covers all the graph nodes with the minimum possible number of edges. 
// A minimum spanning tree is a spanning tree whose weight is the smallest among all possible spanning trees. 
// shortest path tree: shortest path between s and v is a path such that the total weight of the edges along this path is minimized. This finds that.

// Time complexity O(V**2)
// The problem with negative weights arises from the fact that Dijkstra’s algorithm assumes that once a node is added to the set of visited nodes, its distance is finalized and will not change. However, in the presence of negative weights, this assumption can lead to incorrect results.

// **** READ ME ****
// this is on a breadth first traverse
// dijkstra loop 1 is identifying traverse from node, and loop 2 establish path dist to directly connected nodes - first iteration just identify connected branches
// on further iteration, it will traverse to least dist path and further explore one more level of dists - and measure est. distances to new nodes. Then it will take other paths on the same level and explore the dist and connection to nodes, which may be repeated, comparing their dist and if shorter, est. them as current known best path
// on even further iteration, will go to next level of dist, and again evaluate the dists to see if there are better shorter routes
// after all nodes are explored as the "starting point" of further exploration (backtracking will result in bigger dist tt are rejected - in undirected graphs like this one)
// but it will work on directed graphs as well using a adjMatrix

function dijkstra(graph, startVertice){

    let graphLength = graph.length;
    let visited = new Array(graphLength).fill(false);

    let minDistances = new Array(graphLength).fill(Infinity); //collection of minDist to be returned;
    minDistances[startVertice] = 0; //initialize dist from source vertex to itself is 0; first element in return will be 0;

    for (let i=0; i<graphLength; i++){ //each row
        
        let IndexOfMinDistVertice = -1; //at -1 indicates no vertice selected yet. tracks vertex with minimum distance from source vertex among unvisited vertices // reset to -1 for every iteration
        // console.log(`Iteration index at row ${i}, IndexOfMinDistVertice = ${IndexOfMinDistVertice}`);

        for (let j=0; j<graphLength; j++){ //each column values

            // console.log(`iterating columnIndex j: ${j} of rowIndex i: ${i}`);
            // console.log(`Visited[${j}]? ${visited[j]} but return inverse as ${!visited[j]} && minDistances[j] i.e. minDistances[${j}] w value of ${minDistances[j]} < minDistances[IndexOfMinDistVertice] i.e. minDistances[${IndexOfMinDistVertice}] w value of ${minDistances[IndexOfMinDistVertice]} result in boolean ${minDistances[j] < minDistances[IndexOfMinDistVertice]} || IndexOfMinDistVertice === -1? returning ${IndexOfMinDistVertice === -1}. But in sum: ${!visited[j] && (IndexOfMinDistVertice === -1 || minDistances[j] < minDistances[IndexOfMinDistVertice])}`);

            if ( !visited[j] && //look at unvisited adj
                 (IndexOfMinDistVertice === -1 || minDistances[j] < minDistances[IndexOfMinDistVertice])){    //minIndex -1 is only for first iteration, only latter portion matters for the rest
                IndexOfMinDistVertice = j
                // console.log(`IndexOfMinDistVertice is now = j where j is ${j}`);
            }
        }

        // console.log(`after loop hit value of minDistances[IndexOfMinDistVertice] ${minDistances[IndexOfMinDistVertice]} === infinity? return ${minDistances[IndexOfMinDistVertice] === Infinity}`)

        if (minDistances[IndexOfMinDistVertice] === Infinity){
            break; //prevent infinite loop from unreachable vertices, since the graph may not be so obvious, or may have data changes
        }

        visited[IndexOfMinDistVertice] = true;
        // console.log(`visited array here: ${visited}`);

        for (let j=0; j< graphLength; j++){ //go thru the columns a 2nd time

            // console.log(`if graph[IndexOfMinDistVertice][j] i.e. graph[${IndexOfMinDistVertice}][${j}] w value ${graph[IndexOfMinDistVertice][j]} !== 0 return ${graph[IndexOfMinDistVertice][j] !== 0}`)

            if(graph[IndexOfMinDistVertice][j] !== 0){
                let potentialDist = minDistances[IndexOfMinDistVertice] + graph[IndexOfMinDistVertice][j];

                // console.log(`potential dist = minDistances[IndexOfMinDistVertice] i.e. minDistances[${IndexOfMinDistVertice}] + graph[IndexOfMinDistVertice][j] i.e. graph[${IndexOfMinDistVertice}][${j}]; it is ${minDistances[IndexOfMinDistVertice]} + ${graph[IndexOfMinDistVertice][j]} = ${minDistances[IndexOfMinDistVertice] + graph[IndexOfMinDistVertice][j]}`)
                // console.log(`if potentialDist = ${potentialDist} < minDistances[j] i.e. minDistances[${j}] w value ${minDistances[j]} return ${potentialDist < minDistances[j]}`)

                if (potentialDist < minDistances[j]){
                    minDistances[j] = potentialDist;
                    // console.log(`minDistances[j] i.e. minDistances[${j}] = potentialDist i.e. ${potentialDist};`)
                    // console.log(`minDistance = [${minDistances}]`);
                }
            }
            
        }
    }
    console.log("return minDistances", minDistances);
    return minDistances;
}

function inverseGraph(graph){ //if we need greatest value (e.g. highest weight);
    let convertedGraph = []; //in js, we iterate over copy only, would not affect original;
    
    for (let i=0; i<graph.length; i++){
        let row = [];
        for (let j=0; j<graph[i].length; j++){
            row.push(graph[i][j] * -1);
        }
        convertedGraph.push(row);
    }

    return convertedGraph;
}

// let graph = [
//     [0,2,0,1,0],
//     [2,0,3,0,0],
//     [0,3,0,4,0],
//     [1,0,4,0,5],
//     [0,0,0,5,0]
// ]

// Testing //
// dijkstra(graph, 0);
// dijkstra(inverseGraph(graph),0);
// dijkstra(graph, 1);
// dijkstra(graph, 2);
// dijkstra(graph, 3);
// dijkstra(graph, 4);
// End of Testing //

// *** Further Code Explanation ***
// dijkstra(inverseGraph(graph),0); //for finding longest wpath e.g. if it is similarity score, it will be highest weight

// Further explanation of dijkstra code flow in console.log (just comment them in)
// first iteration is just putting source node dist as minDistIndex to itself at 0, so everything else remains as false when looping

// when it reach itself, it will shift the slider to it if none chosen yet - i.e. IndexOfMinDistVertice will be where it is;
// the first loop is basically choosing paths, if there is a known IndexOfMinDistVertice est to have smaller path, it will designate tt as IndexOfMinDistVertice and it will thus be the pathing for loop 2 which calc potential dist if not yet explored

// in first loop, those tt loop false is because no known (shortest) paths yet
// and those of bigger values are those that are either not connecting directly to source, or just a far vector
// on 2nd iteration, index 3 will be established as smallest route currently known, and will be used for IndexOfMinDistVertice to get further pathing based on what is connected to that node

// So in 2nd loop, we will jump to row 3 established to be the current known best route to see what are connected and calc their potential dist first
// so this will update the visited, because we visit there first to see what routes and dist

// generally the updated values affect future decision making in loop 1, as do loop 2 values affect loop 1 = greedy strategy
// There is reverse traverse sometimes so the potential dist value can be big, and thus discarded

module.exports = {dijkstra, inverseGraph};
