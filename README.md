# buCalendar
Simple library to create buttons to add events to your calendar.

Demo: [link to demostration](https://assisfery.github.io/buCalendar/)

## Installation
Just include the myjs.min.js file in you web page.

```html
<link href="buCalendar.css" rel="stylesheet">
<script src="buCalendar.js"></script>
```

## Setup
Create calendar button in simple way.
```js
buCalendar.setup("#buttons-area",
{
    name: "Event 1",
    details: "The best event",
    startDate: "2021-06-17 20:30:00", // YYYY-MM-DD HH:mm:ss in UTC
    endDate: "2021-06-17 21:00:00", // YYYY-MM-DD HH:mm:ss in UTC
    location: "Cabo Verde"
},
[
    {
        name: "Google",
        //addQueryString: "&add=user@example.com"
    },
    {
        name: "Yahoo",
        //content: "Yahoo Calendar"
    },
    {
        name: "Outlook",
    },
    {
        name: "Office 365",
    },
],
"bc-pill"
);
```