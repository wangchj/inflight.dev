# Request Dimensions and Variants

A request dimension (or just a dimension) is a variable aspect of a request. A variant is an option
inside a dimension. What is a variable aspect of a request is decided by you as the tester of an
API. The following are examples of common request dimensions:


<table>
    <thead>
        <tr>
            <th>Dimensions</th>
            <th>Variants</th>
            <th>Variables</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>**Stage**</td>
            <td>`Testing`, `Production`</td>
            <td>The API URL for the stage</td>
            <td>APIs have different URL per stage.</td>
        </tr>
        <tr>
            <td>**Caller identity**</td>
            <td>`Bob`, `Alice`</td>
            <td>The user id of the test user</td>
            <td>
                The tester wants to test an API with different caller identities and credentials.
            </td>
        </tr>
        <tr>
            <td>**Owner identity**</td>
            <td>`Bob`, `Alice`</td>
            <td>The user id of the resource owner</td>
            <td>
                The API resources are owned by users, and the tester wants to test getting the
                resources of different owners.
            </td>
        </tr>
    </tbody>
</table>

This document describes how to create and use request dimensions and variants.

## Creating a dimension

To create a new request dimension in Inflight

1. Click on "Dimensions" on the main navigation (under "Requests").
1. Click on `...` next to the project name and select "New Dimension".
1. Enter the dimension name (for example, `IP Version`) in the dialog box and click on "Create" (or press
   `Enter` key).

The new dimension shows up in the list of dimensions.

## Creating variants

After creating a new dimension, we need to create variants inside that dimension. The following is
an example of creating 2 variants for the "IP Version" dimension we just created.

1. Click on `...` next to the `IP Version` dimension and select "New Variant".
1. In the dialog box enter `IPv4` and press the `Enter` key. Inflight opens the new variant in a new
   tab.
1. In the variant UI, click on "Add variable":
   - For name, enter `subdomain`
   - For value, enter `ipv4`

We repeat the same steps for the second variant:

1. Click on `...` next to the `IP Version` dimensions and select "New Variant".
1. In the dialog box enter `IPv6` and press the `Enter` key. Inflight opens the new variant in a new
   tab.
1. In the variant UI, click on "Add variable":
   - For name, enter `subdomain`
   - For value, enter `ipv6`

## Using dimensions

This section describes how to use the dimension we just created:

1. Start a new request by clicking on `+` (or "New request")
1. For the request URL, enter `https://{{subdomain}}.google.com`.
   - The `{{subdomain}}` is called a request variable.
   - You can add multiple variables to a variant; however, all variants within a dimensions usually
     have the same variables.
   - The request variables are replaced by the value of selected variant when the request is
     sent.
1. At the bottom of Inflight UI, click on `IP Version` dimension. This opens a list of available
   variants.
1. Select a variant and click Send to send the request.

## Request variables

We've seen request variables in the previous section. This section provides a few more details about
request variables.

- Request variables have the format `{{name}}`, where name is the name of the variable.
- When a variant is selected, Inflight automatically combines the variables in all the selected
  variants and resolve request variables.
- If a variable is not defined in any of the selected variants, then the variable is unresolved and
  Inflight shows that variable in red; otherwise, the variable is resolved and is displayed in blue.
- All request variable need to be resolved before a request can be sent; otherwise Inflight shows
  an error that a value is not resolved.

## Update operations

In addition to adding variables to variants, dimensions and variants also supports the following
update operations that can be accessed using the object menu (`...`):

- Rename
- Delete
- Duplicate

When a dimension is deleted, all the variants inside that dimensions are deleted.

When dimensions or variants is updated, Inflight automatically recalculate the variables from all
the selected variants.

Inflight uses internal ids to track dimension and variants; therefore, the rename operation does
not affect selected variants. The UI will be updated accordingly.
