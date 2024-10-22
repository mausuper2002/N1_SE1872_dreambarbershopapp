import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView={"dayGridWeek"}
        headerToolbar={{
          start: "today, prev, next",
          center: "title",
          end: "timeGridWeek, timeGridDay",
        }}
        duration={{ hours: 4 }}
      />
    </div>
  );
};

export default Calendar;
