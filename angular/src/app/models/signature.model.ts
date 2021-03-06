import { SignatureType } from './enums/signature-type';

export class Signature {
    public signatureId: string;
    public intakeFormId: string;
    public content: string;
    public ipAddress: string;
    public type: SignatureType;
    public createdOn: Date;
    public modifiedOn: Date;
}
