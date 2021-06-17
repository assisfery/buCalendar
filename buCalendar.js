// buCalendar 1.0
var buCalendar = {};

// all suported calendars
buCalendar.calendars = [
    {
        name: "Google",

        baseUrl: "https://calendar.google.com/calendar/render?",

        queryStringParams: "action=TEMPLATE"
            + "&text={NAME}"
            + "&details={DETAILS}"
            + "&dates={START_DATE}/{END_DATE}"
            + "&location={LOCATION}"
        ,
    }
];

// setup function
buCalendar.setup = function(elements, eventData, calendars)
{
    var containerElements = document.querySelectorAll(elements);

    for(var i = 0; i < containerElements.length; i++)
    {
        //console.log(containerElements[i]);

        for(var j = 0; j < calendars.length; j++)
        {
            for(var k = 0; k < buCalendar.calendars.length; k++)
            {
                if(calendars[j].name == buCalendar.calendars[k].name)
                {
                    var btn =  document.createElement("a");
                    btn.setAttribute("class", "buCalendar-btn");

                    btn.setAttribute("href", buCalendar.getUrl(eventData, buCalendar.calendars[k]));

                    btn.setAttribute("target", "_blank");
                    btn.append(calendars[j].name);

                    containerElements[i].appendChild(btn);
                }
            }
        }
    }
}

// get url
buCalendar.getUrl = function(eventData, calendar)
{
    return (calendar.baseUrl + calendar.queryStringParams)
        .replace("{NAME}", encodeURIComponent(eventData.name))
        .replace("{DETAILS}", encodeURIComponent(eventData.details))
        .replace("{START_DATE}", encodeURIComponent(eventData.startDate))
        .replace("{END_DATE}", encodeURIComponent(eventData.endDate))
        .replace("{LOCATION}", encodeURIComponent(eventData.location ? eventData.location : ""))
    ;
}