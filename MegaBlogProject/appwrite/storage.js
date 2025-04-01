import config from "../config/config";
import { Client, Account, Databases, Storage,ID } from "appwrite";
export class StorageService {
    client = new Client();
    storage;
    databases;
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.storage = new Storage(this.client);
        this.databases = new Databases(this.client);
    }
    async createBlog({title,slug,content,featuredImage,status}){
        try{
            const blog=await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status
                }
            );
            return blog;
        } catch(error){
            throw error;
        }
    }
    async updateBlog({title,slug,content,featuredImage,status}){
        try{
            const blog=await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status
                }
            );
            return blog;
        } catch(error){
            throw error;
        }
    }
    async deleteBlog(){
        try{
            const blog=await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique
            );
            return true;
        } catch(error){
            console.log(error);
            return false;
        }
    }
    async getBlog(){
        try{
            const blog=await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique()
            );
            return blog;
        } catch(error){
            console.log(error);
            return null;
        }
    }

    async getBlogs(queries=[Query.equal("status","active")]){
        try{
            const blogs=await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
            return blogs;
        } catch(error){
            console.log(error);
            return null;
        }


    }
    //file upload service 
    
}