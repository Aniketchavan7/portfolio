"use client";
import { useState } from "react";
import { Check, Sun, ArrowUpRight } from "lucide-react";
import { ArcMark } from "./arc-mark";

const sampleTasks = [
  {
    time: "07:00",
    title: "Start with a little movement",
    detail: "Health · 20 min",
    xp: 10,
  },
  {
    time: "09:00",
    title: "Make space for focused work",
    detail: "Deep work · 60 min",
    xp: 30,
  },
  {
    time: "21:00",
    title: "Reflect on the day",
    detail: "Reflection · 10 min",
    xp: 10,
  },
];

export function WinterPreview({
  interactive = false,
}: {
  interactive?: boolean;
}) {
  const [done, setDone] = useState([true, false, false]);
  const completed = done.filter(Boolean).length;
  return (
    <div
      className={`winter-preview ${interactive ? "interactive-preview" : ""}`}
    >
      <div className="preview-top">
        <span>
          <ArcMark /> WINTER ARC
        </span>
        <span className="preview-caption">A LITTLE, EVERY DAY.</span>
      </div>
      <div className="preview-body">
        <div className="preview-date">
          <span className="status-point" /> YOUR DAILY PRACTICE
        </div>
        <h3>
          A fresh page,
          <br />
          <em>a fresh start.</em>
        </h3>
        <p className="preview-intro">Keep the next promise to yourself.</p>
        <div
          className="preview-metrics"
          aria-live={interactive ? "polite" : "off"}
        >
          <div>
            <span>COMMITMENTS</span>
            <strong>
              {completed}
              <small> / 3</small>
            </strong>
          </div>
          <div>
            <span>TODAY’S GROWTH</span>
            <strong>
              {sampleTasks.reduce(
                (sum, task, i) => sum + (done[i] ? task.xp : 0),
                0,
              )}
              <small> XP</small>
            </strong>
          </div>
          <div className="preview-arc">
            <ArcMark />
          </div>
        </div>
        <div className="preview-list-heading">
          <span>
            <Sun size={14} /> The day ahead
          </span>
          <span>{Math.round((completed / 3) * 100)}%</span>
        </div>
        <div className="preview-progress">
          <span style={{ width: `${(completed / 3) * 100}%` }} />
        </div>
        <div className="preview-tasks">
          {sampleTasks.map((task, i) => (
            <div
              className={`preview-task ${done[i] ? "is-done" : ""}`}
              key={task.time}
            >
              <time>{task.time}</time>
              {interactive ? (
                <button
                  type="button"
                  className="task-checkbox"
                  aria-label={task.title}
                  aria-pressed={done[i]}
                  onClick={() =>
                    setDone(
                      done.map((value, index) =>
                        index === i ? !value : value,
                      ),
                    )
                  }
                >
                  {done[i] && <Check size={13} />}
                </button>
              ) : (
                <span className="task-checkbox" aria-hidden="true">
                  {done[i] && <Check size={13} />}
                </span>
              )}
              <div>
                <span>{task.title}</span>
                <small>{task.detail}</small>
              </div>
              <span className="task-xp">+{task.xp}</span>
            </div>
          ))}
        </div>
        <div className="preview-bottom">
          <span>
            {interactive
              ? "Try checking off a commitment"
              : "Make a promise. Keep it today."}
          </span>
          <ArrowUpRight size={16} />
        </div>
      </div>
      <div className="preview-demo-label">
        {interactive
          ? "Interactive demo · Sample tasks · Changes aren’t saved"
          : "Illustrative preview · Sample tasks"}
      </div>
    </div>
  );
}
