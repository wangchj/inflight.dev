# Using AWS Sigv4 Authentication

Inflight makes it simple to call APIs hosted on AWS (Amazon Web Services) by implementing
[AWS Signature V4](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html)
request signing.

When making an API call, you provide the secrets (e.g., API access key, secret key, and session
token) that only you know to establish your identity. Inflight uses the secrets to sign the request
using the AWS Signature V4 (sigv4) algorithm and add the required request headers. Inflight uses the
AWS SDK to perform the signing process.

There are multiple ways to obtain the secrets to sign AWS requests. We call these AWS credential
sources. Inflight supports the following request sources:

- **AWS CLI Profile**: Retrieves the credentials from AWS CLI. This is only available in desktop
  app.
- **Inline**: Allows manually entry of static credentials in the Inflight UI.

**Security Recommendation**: We strongly recommend using AWS CLI Profile credentials source and
discourage using inline (static) credentials unless you're using the web app where the CLI is
unavailable. With AWS CLI Profile credentials source, the credentials are obtained directly from the
CLI and AWS credentials provider chain and the credentials are not saved with the Inflight project. This prevents leaking of static credentials and makes the project shareable with other people.

This document describes how to send AWS signed requests using the credentials sources. This document
assumes that you already have an AWS account.

## AWS CLI Profile credentials source

This section describes how to send API requests using AWS CLI Profile credentials source. Before
using this credentials source, make sure you have the
[AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) installed.

Because Inflight uses AWS SDK to perform request signing, the following AWS CLI features are
supported:

- `aws login` command
- AWS credentials process

For our example, run the following to get the credentials for the `default` AWS CLI profile:

```bash
aws login
```

After logging in, the temporarily credentials is saved for the `default` profile in `~/.aws/login/`.
These credentials can be used with AWS CLI as well to send requests in Inflight. Note that if you
are using a credential process, running `aws login` may not be needed.

To configure a request to use AWS CLI credentials source, do the following:

1. Start a new request by clicking on `+` or by clicking "New Request".
1. Click "Auth" tab in the request configuration:
   - **Type**: AWS Signature Version 4
   - **Credentials source**: AWS CLI profile
   - **Profile**: The AWS CLI profile to use. If this is not specified, the default profile is used.
   - **Region**: The AWS region in which the API resides, e.g., `us-east-1`. This is required.
   - **Service name**: The AWS service name, e.g., `ec2`. This is required.
1. Click the Send button to send the request.

## Inline AWS credentials source

We strongly discourage using this credentials source. Use the AWS CLI Profile credentials source
described in the previous section instead.

Inline credentials source allows specifying static AWS credentials for environments where CLI is not
available, such as the web app. Caution: the values entered in the inline credentials source are
saved with the Inflight project file.

Before using this credential source, you must first obtain the credentials, which has the following
components:

- Access key
- Secret key
- Session token (optional)

There are many ways to obtain AWS Static credentials including:

- [Credentials from an IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html)
- [Using AWS STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html)

To configure a request to use inline credentials source, do the following:

1. Start a new request by clicking on `+` or by clicking "New Request".
1. Click "Auth" tab in the request configuration:
   - **Type**: AWS Signature Version 4
   - **Credentials source**: Inline
   - **Access key**: The static access key. This is required.
   - **Secret key**: The static secret key. This is required.
   - **Session token**: The optional session token.
   - **Region**: The AWS region in which the API resides, e.g., `us-east-1`. This is required.
   - **Service name**: The AWS service name, e.g., `ec2`. This is required.
1. Click the Send button to send the request.
