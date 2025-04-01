//yeh production level practice hai as typescript jaise cheeje use krte hue inhe string main hona compulsory hai to ek alg file main inhe aise kr diya 
const config={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCollectionId:String(import.meta.env.VITE_COLLECTION_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_DATABASE_KEY),  
    appwriteBucketId:String(import.meta.env.VITE_BUCKET_ID),
}
export default config