import * as dotenv from 'dotenv'
dotenv.config()

const {MONGO_URI, GRPC_URI} = process.env 

export const config = {
    mongoURI: MONGO_URI || '',
    gRPC_URI: GRPC_URI || ''
}