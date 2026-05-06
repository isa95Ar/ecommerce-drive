import { drive_v3, google } from 'googleapis';
import config from '../../constants/config';
import { FileInfoType } from '../global/types';
import GoogleAuthService from './GoogleAuthService';

class GoogleDriveFilesService extends GoogleAuthService {
	googleFileService: drive_v3.Drive;

	constructor() {
		super();
	}

	public async retrieveFilesFromPicturesFolder(): Promise<FileInfoType> {
		const ts = () => new Date().toISOString();
		console.log(`[${ts()}] [GoogleDriveFilesService] Connecting to Google Drive...`);
		try {
			await this.startGoogleAuthentification();

			this.googleFileService = google.drive({ version: 'v3', auth: this.GoogleAuth });

			console.log(`[${ts()}] [GoogleDriveFilesService] Listing files from folder ${config.gapi.PICTURES_FOLDERS_ID}`);
			let NextPageToken = '';
			const responseFileList = await this.googleFileService.files.list({
				corpora: 'allDrives',
				pageSize: 1000,
				pageToken: NextPageToken || '',
				includeItemsFromAllDrives: true,
				supportsAllDrives: true,
				q: `'${config.gapi.PICTURES_FOLDERS_ID}' in parents`,
				fields: 'nextPageToken, files(id, name, webContentLink)'
			});

			NextPageToken = responseFileList.data.nextPageToken;
			const filesFields: FileInfoType = responseFileList.data.files.map(file => {
				const newName = file.name.replace(' ', '');
				return { webViewLink: newName, code: parseInt(newName.split('.')[0])};
			});

			console.log(`[${ts()}] [GoogleDriveFilesService] Retrieved ${filesFields.length} files from Drive folder`);
			if (NextPageToken) {
				console.log(`[${ts()}] [GoogleDriveFilesService] Warning: response has a nextPageToken — there may be more files beyond the 1000 limit`);
			}
			return filesFields;
		} catch (e) {
			console.error(`[${ts()}] [GoogleDriveFilesService] Error retrieving files from Google Drive folder ${config.gapi.PICTURES_FOLDERS_ID}:`, e);
			throw new Error(e);
		}
	}
}

export default GoogleDriveFilesService;
