
import grpc from "grpc";
import protoLoader from "@grpc/proto-loader"; 
import { config } from "./src/config/config.js";

const PROTO_PATH = './bufferType.proto' 

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	array: true,
    defaults: true,
    oneofs: true
});

const todoProto = grpc.loadPackageDefinition(packageDefinition).todo;

export const client = new todoProto.Todo(config.gRPC_URI, grpc.credentials.createInsecure() )

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 20);
client.waitForReady(deadline, (err)=> {
    if(err)
    console.log(err)
    else
    console.log("client is ready");
});