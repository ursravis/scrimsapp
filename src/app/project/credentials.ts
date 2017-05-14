export class Credentials
{
    //
        // Summary:
        //     Gets and sets the property AccessKeyId.
        //     The access key ID that identifies the temporary security credentials.
      accessKeyId :string
        //
        // Summary:
        //     Gets and sets the property Expiration.
        //     The date on which the current credentials expire.
         expiration: Date
        //
        // Summary:
        //     Gets and sets the property SecretAccessKey.
        //     The secret access key that can be used to sign requests.
      secretAccessKey :string
        //
        // Summary:
        //     Gets and sets the property SessionToken.
        //     The token that users must pass to the service API to use the temporary credentials.
         sessionToken :string
}