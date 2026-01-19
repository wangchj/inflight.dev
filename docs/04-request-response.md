# Request Response

After an API request is sent and a response is received, Inflight opens the response section next to
the request configuration section. This document describes the information that is available in
request response section of the application.

## Status code

At the top of the response section is the
[HTTP response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) and
status message (if available) returned by the API. By convention, the status codes in the range of
200 to 299 indicate a successful API operation from the server, and the status codes in the range
of 400 to 499 or 500 to 599 indicate unsuccessful API invocation (error cases).

Note that an error response code does not mean that the request had failed to be sent due to network
error. The error response code means that the request was received by the API, but deemed invalid by
the API, e.g., a header is missing with response code 400 or the server is unable to process the
request due to server error with response code of 500.

If the request had failed to send due to network error, the Inflight does not show the response
section; instead shows an error message that indicate that the request has failed to be sent due to
network error.

## Response body

If the response contains a
[HTTP response body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages#response_body),
the content is displayed in the "Body" section.

Inflight has the capability to automatically format the content of the response if the API returns
the one of the following values for the `content-type` response header:

- `application/json`: formats the content as a JSON document
- `application/xml` or `text/html`: formats the content as an XML document.

## Response headers

The first part of the response header section shows the actual request headers that were sent as
part of the request. One difference between the headers in this section and the headers in the
request configuration section is that the headers that are disabled do not show in this section
because disabled headers were not sent as part of the request. Another difference is that Inflight
may add additional headers that are not specified in the request configuration.

The second part of the response header section shows the headers returned by the API.

If you're using the web version of Inflight in a web browser, the headers section may not show all
the request or response headers due to
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS). In order for Inflight to
display headers, the API must return appropriate `Access-Control-Allow-Origin` and
`Access-Control-Expose-Headers` response headers. For more info see
https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers.
It is recommended to use the desktop version of Inflight due to these browser restrictions.

## Network information

The Network section of the response shows the following:

- **Local network interface**: local IP address and port from which the request was sent.
- **Remote network interface**: remote IP address and port of the API server to which the request
  was sent.
- **TLS cipher**: the connection encryption cipher used if the protocol is HTTPS.
- **Remote Certificate**: the server TLS certificate information if the protocol is HTTPS.

Note that the web version of Inflight does not show network information due to aforementioned
browser restrictions.
