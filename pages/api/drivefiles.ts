import GoogleDriveFilesService from "../../src/services/GoogleDriveFilesService";


export default async function handler(req,res){
    try{

        const service = new GoogleDriveFilesService();
        const files = await service.retrieveFilesFromPicturesFolder();
        res.json({files});
        
    }catch(e){
        res.json({message:e});
    }
}