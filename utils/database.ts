import mangoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    // to avoid warnings
    mangoose.set('strictQuery', true);

    if(isConnected){
        console.log('already connected');
        return;
    }

    try {
        await mangoose.connect(process.env.MONGODB_URI || "", {
            dbName: 'car-showcase',
        })

        isConnected = true;

        console.log("MONGODB connection established");
    } catch (error) {
        console.error(error);        
    }
}