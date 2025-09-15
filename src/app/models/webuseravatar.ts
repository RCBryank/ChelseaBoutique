export class WebUserAvatar {
    ID: number;
    filename: string;
    homepath: string;
    publicpath: string;
    filesizekb: number;
    idwebuser: number;

    constructor(_id: number, _filename: string, _homepath: string, _publicpath: string, _filesizekb: number, _idwebuser: number) {
        this.ID = _id;
        this.filename = _filename;
        this.homepath = _homepath;
        this.publicpath = _publicpath;
        this.filesizekb = _filesizekb;
        this.idwebuser = _idwebuser;
    }
}