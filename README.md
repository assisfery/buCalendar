# buCalendar
Simple library to create buttons to add events to your calendar.

Demo: [link to demostration](https://assisfery.github.io/buCalendar/)

## Installation
Just include the js and css files in you web page.

```html
<link href="buCalendar.css" rel="stylesheet">
<script src="buCalendar.js"></script>
```

## Setup
Create calendar buttons in simple way.
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

## Configurations samples
You can select just specifics calendars.
```js
buCalendar.setup("#buttons-area",
{
    name: "Event 1",
    details: "The best event",
    startDate: "2021-06-17 20:30:00",
    endDate: "2021-06-17 21:00:00",
    location: "Cabo Verde"
},
[
    {
        name: "Google",
    },
    {
        name: "Office 365",
    },
],
"bc-pill"
);
```

Adicional query string to a calendar
```js
buCalendar.setup("#buttons-area",
{
    name: "Event 1",
    details: "The best event",
    startDate: "2021-06-17 20:30:00",
    endDate: "2021-06-17 21:00:00",
    location: "Cabo Verde"
},
[
    {
        name: "Google",
        addQueryString: "&add=user@example.com"
    },
    {
        name: "Office 365",
    },
],
"bc-pill"
);
```

Change content of calendar button
```js
buCalendar.setup("#buttons-area",
{
    name: "Event 1",
    details: "The best event",
    startDate: "2021-06-17 20:30:00",
    endDate: "2021-06-17 21:00:00",
    location: "Cabo Verde"
},
[
    {
        name: "Google",
        content: "Google <b>Calendar</b>"
    },
],
"bc-pill"
);
```

Change button style, you can add your button class,
or use "bc-pill", "bc-btn" or just let it empty
```js
buCalendar.setup("#buttons-area",
{
    name: "Event 1",
    details: "The best event",
    startDate: "2021-06-17 20:30:00",
    endDate: "2021-06-17 21:00:00",
    location: "Cabo Verde"
},
[
    {
        name: "Google",
    },
],
"bc-btn"
);