"use client";
import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

const toHtmlDateString = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export default function DateStateVariable() {
  const [mounted, setMounted] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);

  useEffect(() => {
    setStartDate(new Date());
    setMounted(true);
  }, []);

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>

      {mounted && startDate && (
        <>
          <h3>{JSON.stringify(startDate)}</h3>
          <h3>{toHtmlDateString(startDate)}</h3>
          <FormControl
            type="date"
            value={toHtmlDateString(startDate)}
            onChange={(e) => setStartDate(new Date(e.target.value))}
          />
        </>
      )}
      <hr />
    </div>
  );
}