"use client";
import { useState } from "react";
import { Check, Sun, ArrowUpRight } from "lucide-react";
import { ArcMark } from "./arc-mark";

const sampleTasks = [
  {
    time: "06:30",
    title: "Morning prayer",
    detail: "06:30–07:00",
    tracked: true,
  },
  {
    time: "08:00",
    title: "LeetCode Daily",
    detail: "08:00–09:00",
    tracked: true,
  },
  {
    time: "18:30",
    title: "Evening workout",
    detail: "18:30–19:15",
    tracked: false,
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
        <span className="preview-caption">DAILY TASKS / MUST DO</span>
      </div>
      <div className="preview-body">
        <div className="preview-date">
          <span className="status-point" /> TODAY&apos;S ROADMAP
        </div>
        <h3>
          Plan the day.
          <br />
          <em>Keep the promise.</em>
        </h3>
        <p className="preview-intro">
          Every task has a start time and a deadline.
        </p>
        <div
          className="preview-metrics"
          aria-live={interactive ? "polite" : "off"}
        >
          <div>
            <span>ON TIME</span>
            <strong>
              {completed}
              <small> / 3</small>
            </strong>
          </div>
          <div>
            <span>MUST DO</span>
            <strong>2</strong>
          </div>
          <div className="preview-arc">
            <ArcMark />
          </div>
        </div>
        <div className="preview-list-heading">
          <span>
            <Sun size={14} /> Daily Tasks
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
              <span className="task-xp">
                {task.tracked ? "MUST DO" : "DAILY"}
              </span>
            </div>
          ))}
        </div>
        <div className="preview-goal-history">
          <div>
            <span>LEETCODE DAILY</span>
            <small>{[true, true, false, true, true, false, done[1]].filter(Boolean).length}/7 on time</small>
          </div>
          <div className="preview-heatmap" aria-label="LeetCode Daily sample heatmap">
            {[true, true, false, true, true, false, done[1]].map(
              (complete, index) => (
                <i className={complete ? "is-complete" : ""} key={index} />
              ),
            )}
          </div>
        </div>
        <div className="preview-bottom">
          <span>
            {interactive
              ? "Try completing a task on time"
              : "Schedule. Complete. Contribute."}
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
