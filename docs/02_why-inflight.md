# Why Inflight?

This document describes the design principles of Inflight.

## Simplicity

Inflight is easy to get started. There are no sign-ups and no logins; simply start the application and it's ready for you to start testing your API. We maintain a balance between power and simplicity, paired with a clean, intuitive user interface. Our goal is to reduce the number of actions required for users to accomplish their tasks. We believe in making the important features great rather than including many features that makes the application hard to understand to use.

## Privacy and security

Other REST API clients send your project data to their server, which creates security and compliance risks. Inflight does not manage your data or send it to a remote server. Inflight works with local project files that you manage. Most organizations store Inflight projects in Git repositories in their own infrastructure using existing tools that have already been certified by the organization.

## Dimensions

Dimensions are user-defined, dynamic aspects of a request. Each dimension contains a set of variants, and each variant is a set of key-value pairs, also known as variables.

As an example, a request could have the following dimensions and variants:

<table>
    <thead>
        <tr>
            <th>Dimensions</th>
            <th>Variants</th>
            <th>Variables</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Stage</td>
            <td>Testing, Production</td>
            <td>The API URL for the stage</td>
        </tr>
        <tr>
            <td>Requester</td>
            <td>Bob, Alice</td>
            <td>The user id of the test user</td>
        </tr>
    </tbody>
</table>

Again, dimensions are defined by the user. Inflight displays them as selectable menus where you can choose one variant per dimension. When a request is initiated, request variables are automatically replaced with the values defined in the selected variants.

Dimensions and variants can be used for all requests within a project.

## Secure AWS integration

Inflight implements AWS Signature Version 4 request signing and follows AWS security best practices by utilizing short-term API credentials. We discourage the manual copying of static API keys and secrets. Instead, Inflight integrates with the AWS SDK and CLI to retrieve temporary credentials via the standard credential chain and process.
