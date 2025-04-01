import config from '../config/config.js';       
import { Client, Account, ID } from "appwrite";
export class AuthService {
    client=new Client();
    account;
    //yahi par account ko nhi banaya new se as vo client banne ke baad hona chahie to 
    //waste of resource hoga so we want ki jab AuthService bane to khud call ho uske liye hum constructor main krenge ye
    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //agar account ban gya to login hi krado seedha
                return this.login({email,password});
            } else{
                return userAccount
            }
        } catch(error){
            throw error;
        }
    } 
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        } catch(error){
            throw error;
        }
    }
    async getUser(){
        try{
            return await this.account.get();
        } catch(error){
            throw error;
        }
        return null;
    }
    async logout(){
        try{
            return await this.account.deleteSession('current');
        } catch(error){
            throw error;
        }
    }
}
const authService = new AuthService();
export default authService;