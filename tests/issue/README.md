## Identified Issues

The following list of issues identified in the given qa-challenge project.

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Titile</th>
            <th>Description</th>
            <th>Priority level</th>
            <th>Steps to Reproduce</th>
            <th>Type</th>
            <th>Environment</th>
            <th>Screenshots</th>
            <th>Expected output </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Status font color is not visible for user</td>
            <td>Status that appear under the company name does not visible for user since the font color is same as the page background color</td>
            <td>High</td>
            <td>1) Navigates to web app 2) Highlight a company detail </td>
            <td>Bug</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>User should be able to view company status clearly as the other terms </td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>2</td>
            <td>There are some companies with invalid date</td>
            <td>When user navigates to the web page there are company names with invalid time and date</td>
            <td>High</td>
            <td>1) Navigates to web app</td>
            <td>Bug</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>All data should contain with a valid date and time </td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>3</td>
            <td>There are empty ID without company names</td>
            <td>When user navigates to the web page there are empty data without company names</td>
            <td>High</td>
            <td>1) Navigate to the web app
2) Scroll to the date Sat, 05 Jan 2019 13:16:20 GMT or search the above date</td>
            <td>Bug</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>Web page should not contain empty field without names</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>4</td>
            <td>Company names with multiple name formatting when there are more than a single name</td>
            <td>There are multiple formats signs when there are multiple names in a same company such as "-" and "," it should contain a single format for better UX</td>
            <td>Low</td>
            <td>1) Navigates to web app
2) Find a company with multiple names</td>
            <td>Bug</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>Page should contain with single format</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>5</td>
            <td>Button should disable once user tap on it</td>
            <td>User should be able to view button as disable if user tap on Earliest or Latest since the action is already done. It will not confused the user if it set to disable one tap on</td>
            <td>Medium</td>
            <td>1) Navigates to web app
2) Tap on Earliest button or Latest button</td>
            <td>Improvement</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>Button should be stay as disable one user tap on and until page refresh</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>6</td>
            <td>User should be able to search by Date, time and status</td>
            <td>For better user experience user should be able to search the company by date, time or the status</td>
            <td>Low</td>
            <td>1) Navigates to web app</td>
            <td>Improvement</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>Search method should be a selectable </td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>7</td>
            <td>Page not responding when there are large number of data in the web page</td>
            <td>When there are large set of data with companies page does not respond on time </td>
            <td>High</td>
            <td>1) Navigates to web app
2) Scroll down to bottom page getting stuck
3) Type a term in search field the response will be appear after a while</td>
            <td>Bug</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>Page should respond on time. any large number of data should appear on the page</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>8</td>
            <td>Duplicate data appearing with same company name with same time and date</td>
            <td>There are duplicate data with same company name and same date and time</td>
            <td>Medium</td>
            <td>1) Navigates to web app
2) Type "Hill" on the search field</td>
            <td>Bug</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>User should not be able to view duplicate data with exact same company name and the date & time</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>9</td>
            <td>Validation message should appear if user search an invalid term or non existing term in the database</td>
            <td>User should be able to view a validation message of a validation popup when user type invalid term on the search field</td>
            <td>Medium</td>
            <td>1) Navigates to web app
2) User type any word that not exists in database</td>
            <td>Improvement</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>Validation message should appear once user type an invalid term</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <td>10</td>
            <td>Some data not appearing in the front end since database table name is incorrect on some of the added company details</td>
            <td>There are some companies with empty details on the web page since the database table name is wrong on the related data</td>
            <td>High</td>
            <td>1) Check the database projetcName key</td>
            <td>Bug</td>
            <td>Chrome Version 107.0.5</td>
            <td>----</td>
            <td>Project names title should rename correctly<td>
        </tr>
    </tbody>
</table>