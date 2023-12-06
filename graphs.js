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

// constructing a basic graph with some basic functionalities

class Graph {
    constructor(verticesCount){
        this.vertexCount = verticesCount;
        this.adjList = new Map();
        this.adjMatrix = Array.from({length: verticesCount}, ()=> Array(verticesCount).fill(0));
        this.validator = new Validator();
        // Array.from accept array or arraylike object, and specifically length property create count, then for each create another row of array to form 2d array
        // Array() constructor can be called with new or w/o
    }

    addVertexToAdjList(vertexName){

        if(!Validator.stringValidator(vertexName)){
            return;
        };

        if (!this.adjList.get(vertexName)){
            this.adjList.set(vertexName, []);
            console.log(`Added vertex key: ${vertexName} and vertex value: [] to HashMap`);
        } else {
            console.log("Key already exists, prevented override. To update, use Update instead");
        }
    }

    overwriteVertexValues(vertexName, arrayOfEdges){

        if (!Validator.stringValidator(vertexName)){
            return;   
        };

        if (this.adjList.get(vertexName)){
            this.adjList.set(vertexName, arrayOfEdges);
            console.log(`Overwritten vertex values of vertexName ${vertexName} with ${arrayOfEdges}`);
        } else {
            console.log("vertex name not found");
        }
    }

    overwriteVertexName(vertexName, newVertexName){

        if(!Validator.stringValidator(vertexName, newVertexName)){
            return;
        };

        if (this.adjList.get(vertexName)){
            let transferingData = this.adjList.get(vertexName);
            console.log(transferingData);

            this.adjList.delete(vertexName);

            this.adjList.set(newVertexName, transferingData);
            console.log(`Overwritten vertex name of vertexName ${vertexName} with new name ${newVertexName}`);
        } else {
            console.log("Vertex name not found");
        }
    }

    addUndirectedEdgeToAdjList(vertex1, vertex2){

        if(!Validator.stringValidator(vertex1, vertex2)){
            return;   
        };

        let vertex1Adj = this.adjList.get(vertex1)
        Validator.clashingValuePreventer(vertex1Adj, vertex2)
        vertex1Adj.push(vertex2);

        let vertex2Adj = this.adjList.get(vertex2)
        Validator.clashingValuePreventer(vertex2Adj, vertex1)
        vertex2Adj.push(vertex1);

        console.log(`Added ${vertex2} to ${vertex1} as undirected graph in adjList`);
        console.log(`Added ${vertex1} to ${vertex2} as undirected graph in adjList`);
    }

    addDirectedEdgeToAdjList(vertex1, vertex2){

        if(!Validator.stringValidator(vertex1, vertex2)){
            return;   
        };

        let vertex1Adj = this.adjList.get(vertex1);
        console.log("vertex 1 adj here", vertex1Adj);
        Validator.clashingValuePreventer(vertex1Adj, vertex2)
        vertex1Adj.push(vertex2);
        console.log(`Added ${vertex2} to ${vertex1} in adjList`);
    }

    addUndirectedEdgeToAdjMatrix(vertex1, vertex2, weight=1){

        if(!Validator.numberValidator(vertex1, vertex2)){
            return;   
        };

        if (vertex1 <= this.adjMatrix.length -1 && vertex2 <= this.adjMatrix.length -1){

            this.adjMatrix[vertex1][vertex2] = weight;
            this.adjMatrix[vertex2][vertex1] = weight;

            console.log(`Successfully added weight ${weight} undirected edge for vertex ${vertex1} and vertex ${vertex2}`);
        } else {
            console.log("vertex is out of range");
        }
    }

    addDirectedEdgeToAdjMatrix(vertex1, vertex2, weight=1){
        // source is the rows in 2d array
        if(!Validator.numberValidator(vertex1, vertex2)){
            return;   
        };

        if (vertex1 <= this.adjMatrix.length -1 && vertex2 <= this.adjMatrix.length -1){
        
            this.adjMatrix[vertex1][vertex2] = weight;

            console.log(`Successfully added weight ${weight} Directed edge from vertex ${vertex1} ending at vertex ${vertex2}`);
        } else {
            console.log("vertex is out of range");
        }        
    }

    printAdjList(){
        console.log(this.adjList);
    }

    printAdjMatrix(){
        console.log(this.adjMatrix);
    }

}

class Validator {

    static stringValidator(...args){
        args.forEach((arg) => {
            if (typeof arg !== "string"){
                console.log("Vertex names need to be strings characters");
                return false;
            }
        })
        return true;
    }

    static numberValidator(...args){
        args.forEach((arg) => {
            if (typeof arg !== "number"){
                console.log("Vertex matrix index need to be integers");
                return false;
            }
        })
        return true;
    }

    static clashingValuePreventer(array, valueToCheck){

        for (let value of array){
            if (valueToCheck === value){
                console.log("Fail to update, vertex to connect alr exists in edge");
                return;
            }
        }
        console.log("Checked for duplicate, none found");
    }
}


// test
// let graph1 = new Graph(5);
// graph1.printAdjList();
// graph1.printAdjMatrix();
// graph1.addVertexToAdjList("A");
// graph1.addVertexToAdjList("B");
// graph1.addVertexToAdjList("C");

// graph1.addDirectedEdgeToAdjList("A", "B");
// graph1.addUndirectedEdgeToAdjList("A", "C");
// graph1.overwriteVertexValues("A", ["C"])

// graph1.addDirectedEdgeToAdjMatrix(1,3);
// graph1.addDirectedEdgeToAdjMatrix(1,6);
// graph1.addDirectedEdgeToAdjMatrix(2,4);
// graph1.addDirectedEdgeToAdjMatrix("abracadabra", 5);
// graph1.addDirectedEdgeToAdjMatrix(3,2,100);

// graph1.addUndirectedEdgeToAdjMatrix(0,2,3);

// graph1.printAdjList();
// graph1.printAdjMatrix();
// //end of test//

module.exports = { Graph, Validator };