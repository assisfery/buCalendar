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

        datetimeFormat: "YYYYMMDDTHHmmss", //+ "Z"
    },
    {
        name: "Yahoo",

        baseUrl: "https://calendar.yahoo.com/?",

        queryStringParams: "v=60"
            + "&TITLE={NAME}"
            + "&DESC={DETAILS}"
            + "&ST={START_DATE}"
            + "&ET={END_DATE}"
            + "&in_loc={LOCATION}"
        ,

        datetimeFormat: "YYYYMMDDTHHmmss",
    },
    {
        name: "Outlook",

        baseUrl: "https://outlook.live.com/calendar/0/deeplink/compose?",

        queryStringParams: "path=/calendar/action/compose"
            + "&rru=addevent"
            + "&subject={NAME}"
            + "&body={DETAILS}"
            + "&startdt={START_DATE}"
            + "&enddt={END_DATE}"
            + "&location={LOCATION}"
        ,

        datetimeFormat: "YYYY-MM-DDTHH:mm:ss",
    },
    {
        name: "Office 365",

        baseUrl: "https://outlook.office.com/calendar/0/deeplink/compose?",

        queryStringParams: "path=/calendar/action/compose"
            + "&rru=addevent"
            + "&subject={NAME}"
            + "&body={DETAILS}"
            + "&startdt={START_DATE}"
            + "&enddt={END_DATE}"
            + "&location={LOCATION}"
        ,

        datetimeFormat: "YYYY-MM-DDTHH:mm:ss",
    },
];

// setup function
buCalendar.setup = function(elements, eventData, calendars, buttonsClass = "")
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

                    btn.setAttribute("class", "bc-link " + (buttonsClass ? buttonsClass : ""));

                    btn.setAttribute("href", buCalendar.getUrl(eventData, calendars[j], buCalendar.calendars[k]));

                    btn.setAttribute("target", "_blank");

                    if(!calendars[j].content)
                        btn.innerHTML = calendars[j].name;
                    else
                        btn.innerHTML = calendars[j].content;

                    containerElements[i].appendChild(btn);
                }
            }
        }
    }
}

// get url
buCalendar.getUrl = function(eventData, calendarConfig , calendar)
{
    return (
        (calendar.baseUrl + calendar.queryStringParams)
        .replace("{NAME}", encodeURIComponent(eventData.name))
        .replace("{DETAILS}", encodeURIComponent(eventData.details ? eventData.details : ""))
        .replace("{START_DATE}", encodeURIComponent(moment(eventData.startDate).format(calendar.datetimeFormat) + "Z"))
        .replace("{END_DATE}", encodeURIComponent(moment(eventData.endDate).format(calendar.datetimeFormat) + "Z"))
        .replace("{LOCATION}", encodeURIComponent(eventData.location ? eventData.location : ""))
        )
        + ( calendarConfig.addQueryString ? calendarConfig.addQueryString : "" )
    ;
}