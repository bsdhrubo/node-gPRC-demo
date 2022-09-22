
import grpc from "grpc";
import protoLoader from "@grpc/proto-loader"; 
import { mapped_methods } from "./src/index.js";
import { connectToDatabase } from "./src/config/db.js";
import { config } from "./src/config/config.js";

const PROTO_PATH = './bufferType.proto' 

let packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
    oneofs: true
});

let todoProto = grpc.loadPackageDefinition(packageDefinition).todo;

async function main() { 
	try {
		await connectToDatabase();
		const server = new grpc.Server();
		server.addService(todoProto.Todo.service, mapped_methods);
		server.bindAsync(config.gRPC_URI, grpc.ServerCredentials.createInsecure(), (err)=> console.log(err));
		server.start(); 
		console.log('gRPC server started');
	} catch (error) {
		console.log(error);
	}
}

main();
