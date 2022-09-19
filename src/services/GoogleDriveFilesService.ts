import { drive_v3, google } from 'googleapis';
import config from '../../constants/config';
import { FileInfoType } from '../global/types';
import GoogleAuthService from './GoogleAuthService';

class GoogleDriveFilesService extends GoogleAuthService {
	googleFileService: drive_v3.Drive;

	constructor() {
		super();
	}

	public async retrieveFilesFromPicturesFolder():Promise<FileInfoType> {
		try {
			await this.startGoogleAuthentification();

			this.googleFileService = google.drive({ version: 'v3', auth: this.GoogleAuth });

            let NextPageToken = "";
			const responseFileList = await this.googleFileService.files.list({
                corpora: 'allDrives',
                pageSize: 1000,
                pageToken: NextPageToken || "",
                includeItemsFromAllDrives: true,
                supportsAllDrives: true,
				q: `'${config.gapi.PICTURES_FOLDERS_ID}' in parents`,
                fields: 'nextPageToken, files(id, name, webContentLink)'
			});
            console.log(responseFileList.data.nextPageToken);
            NextPageToken = responseFileList.data.nextPageToken;
			const filesFields:FileInfoType = responseFileList.data.files.map(file => {
                const newName = file.name.replace(' ', '');
				return { webViewLink: file.webContentLink, code: parseInt(newName.split('.')[0]) };
			});

			return filesFields;
		} catch (e) {
            throw new Error(e);
		}
	}
}

export default GoogleDriveFilesService;
