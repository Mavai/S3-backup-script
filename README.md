# S3 Backup

## Install & configuration

1. Run `npm install`
2. Configure aws credentials: [instructions](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)
3. Run the script with `node backup.js 'bucket' 'folder' 'interval'`

## Parameters

- bucket: name of the bucket where the files are backupped to
- folder: folder which content's are backupped
- interval: Interval in minutes defining how often files are uploaded

## Recommended bucket configuration

The script doesn't create a new bucket or edit any configurations so a suitable bucket needs to exist already.

- Enable versioning
- Configure lifecycle so that old versions of files are moved to glacier for more cost efficient storage.
- Expire and remove old versions after suitable amount of time.
