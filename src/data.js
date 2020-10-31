import moment from "moment";

const currentDate = moment().format("YYYY-MM-D");

const data = {
  weather: { temperature: 10, icon: "PARTLY_CLOUDY_NIGHT" },
  events: [
    {
      id: "fOTgzRDUyQTctQkU2Qi00QzA5LUI2QTItNUQ0QTgyQzExRTY0",
      name: "Meeting with the team",
      start: "2020-05-02T15:00:00+10:00",
      end: "2020-05-02T16:00:00+10:00",
    },
    {
      id: "fOTgzRDUyQTctQkU2Qi00QzA5LUI2QTItNUQ0QTgyQzExRTY4",
      name: "New Event",
      start: "2020-05-02T17:30:00+10:00",
      end: "2020-05-02T20:00:00+10:00",
    },
  ],
  tasks: [
    { id: 1, name: "task", isDone: 0 },
    { id: 2, name: "another task", isDone: 0 },
  ],
  projects: ["my-website", "another-project"],
  totalTime: [
    ["18", "45"],
    ["00", "56"],
  ],
  activities: [
    [
      {
        date: "2020-04-26",
        text: "8 hrs 19 mins",
        total_seconds: 29996.112055,
        percentage: 100,
      },
      {
        date: "2020-04-27",
        text: "3 hrs 13 mins",
        total_seconds: 11585.477017,
        percentage: 29,
      },
      {
        date: "2020-04-28",
        text: "56 mins",
        total_seconds: 3415.242371,
        percentage: 11,
      },
      {
        date: "2020-04-29",
        text: "1 hr 41 mins",
        total_seconds: 6070.206872,
        percentage: 20,
      },
      {
        date: "2020-04-30",
        text: "2 hrs 50 mins",
        total_seconds: 10218.101258,
        percentage: 34,
      },
      {
        date: "2020-05-01",
        text: "31 mins",
        total_seconds: 1894.376399,
        percentage: 6,
      },
      {
        date: currentDate,
        text: "7 mins",
        total_seconds: 451.10386,
        percentage: 2,
      },
    ],
    [
      { date: "2020-10-25", text: "0 secs", total_seconds: 0, percentage: 0 },
      { date: "2020-10-26", text: "0 secs", total_seconds: 0, percentage: 0 },
      { date: "2020-10-27", text: "0 secs", total_seconds: 0, percentage: 0 },
      {
        date: "2020-10-28",
        text: "37 mins",
        total_seconds: 2268.304124,
        percentage: 100,
      },
      { date: "2020-10-29", text: "0 secs", total_seconds: 0, percentage: 0 },
      {
        date: "2020-10-30",
        text: "19 mins",
        total_seconds: 1147.005504,
        percentage: 51,
      },
      { date: currentDate, text: "0 secs", total_seconds: 0, percentage: 0 },
    ],
  ],
};

export default data;
