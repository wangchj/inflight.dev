# Request Configurations

Inflight makes it easy to configure and send web (HTTP) API requests. This document describes the
available request options in Inflight.

## Request URL

Every request has a URL (Uniform Resource Locator). This is the location of the API resource. Using
the example `https://api.github.com:443/users/octocat/repos`, a request URL has the following
components:

1. **Protocol**: this is required and must be `http` or `https`.
1. **Hostname**: this is the name of the server that hosts the API. This is the part after the protocol.
   The hostname in the example is `api.github.com`. This is required.
1. **Port**: this is an optional port number after the hostname (`443` in the example). If this is
   not specified, Inflight uses standard ports:
   - `80` for `http` protocol
   - `443` for `https` protocol.

   Most APIs on the web use standard ports, so the port number is usually not specified.

1. **Path**: this is the path of the API resource. In the example, this is `users/octocat/repos`.

## Request method

In addition to the URL, every request has an
[HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods), which is
typically mapped to an API operation in REST APIs. Inflight supports standard HTTP methods:
`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`.

All request options such as request headers and payload are available to all methods.

## Authentication

The `Auth` request tab allows the configuration of AWS authentication scheme. When AWS Signature
V4 authentication type is selected, Inflight does the following when the request is sent:

1. Generates request signature using AWS Signature V4 algorithm
1. Adds the required request headers including the signature, such as `x-amz-date`, and
   `authorization`.

## Request headers

The "Headers" section of the request allows the configuration of
[HTTP request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header), which are
key-value pairs (or metadata) defined by the API. For example, some APIs require the `user-agent`,
or `authorization` header.

To add a new header, click the "Add header" button, then enter the "Key" and "Value" for that
header. A header can be disabled by unchecking the header. Disabled headers stay in the request
configuration but are omitted when the request is sent. A header can be enabled by checking the
header again. A header can be deleted from the request configuration by clicking on the trashcan
icon.

Note that Inflight may add additional headers based on the request configuration. For example, when
a request has AWS Signature V4 configuration, Inflight adds (and overwrites) the `authorization`
header.

## Request body

The "Body" section allows the configuration of the
[HTTP request body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages#request_body),
also known as the API payload. Inflight allows request body for all HTTP methods; however some APIs
follow HTTP conventions such that only `PATCH`, `POST`, `PUT` can have a body.
