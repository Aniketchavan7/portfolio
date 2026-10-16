"use client";

import { useEffect, useRef } from "react";

const base = "/assets/nospoti/legacy/";
const tracks = [
  { file: "afterglow.wav", title: "Afterglow", genre: "Downtempo Chill" },
  { file: "night-drive.wav", title: "Night Drive", genre: "Synthwave Arp" },
  { file: "slow-bloom.wav", title: "Slow Bloom", genre: "Ambient Lo-Fi" },
];
const screens = {
  home: {
    file: "home",
    title: "Your next favourite starts here",
    description:
      "Browse Bollywood, Punjabi, Marathi, English pop, and more. Revisit favourites, explore moods, and find music for your day.",
  },
  player: {
    file: "player",
    title: "Make this song your moment",
    description:
      "Album artwork, a playback queue, repeat and shuffle controls, and a lyrics button when you want to follow along. This image is a design preview.",
  },
  search: {
    file: "search",
    title: "Find a favourite. Or a new sound.",
    description:
      "Search songs and artists across connected sources, or explore music by mood and language. Availability depends on the song and source.",
  },
  library: {
    file: "library",
    title: "A place for your favourites",
    description:
      "Like a song, create a playlist, or import a supported Spotify or YouTube playlist link. Sign in for supported cloud library sync.",
  },
};

export function LandingExperience({ markup }: { markup: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const find = <T extends HTMLElement>(id: string) =>
      element.querySelector<T>(`#${id}`);
    const audio = new Audio(`${base}audio/${tracks[0].file}`);
    audio.preload = "metadata";
    audio.volume = 0.8;
    const canvas = find<HTMLCanvasElement>("waveform-canvas");
    const context = canvas?.getContext("2d");
    let audioContext: AudioContext | undefined;
    let analyser: AnalyserNode | undefined;
    let frame = 0;
    const format = (seconds: number) =>
      Number.isFinite(seconds)
        ? `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`
        : "0:00";
    const text = (id: string, value: string) => {
      const node = find(id);
      if (node) node.textContent = value;
    };
    const draw = () => {
      if (!canvas || !context) return;
      canvas.width =
        canvas.clientWidth * Math.min(window.devicePixelRatio || 1, 2);
      canvas.height =
        canvas.clientHeight * Math.min(window.devicePixelRatio || 1, 2);
      const bins = new Uint8Array(analyser?.frequencyBinCount || 32);
      analyser?.getByteFrequencyData(bins);
      context.clearRect(0, 0, canvas.width, canvas.height);
      const bar = canvas.width / bins.length;
      for (let i = 0; i < bins.length; i++) {
        const value = audio.paused
          ? Math.sin(i * 0.4) * 0.2 + 0.3
          : bins[i] / 255;
        const height = Math.max(4, value * canvas.height * 0.8);
        context.fillStyle = audio.paused ? "rgba(221,254,82,.25)" : "#ddfe52";
        context.fillRect(
          i * bar,
          (canvas.height - height) / 2,
          Math.max(1, bar - 4),
          height,
        );
      }
      if (
        !audio.paused &&
        !matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        frame = requestAnimationFrame(draw);
    };
    const sync = () => {
      text("time-current", format(audio.currentTime));
      text("time-total", format(audio.duration));
      const progress =
        Number.isFinite(audio.duration) && audio.duration > 0
          ? (audio.currentTime / audio.duration) * 100
          : 0;
      const fill = find("progress-bar");
      if (fill) fill.style.width = `${progress}%`;
      find("scrubber-bar")?.setAttribute(
        "aria-valuenow",
        String(Math.round(progress)),
      );
      const play = find<HTMLButtonElement>("play-btn");
      if (play) {
        play.setAttribute(
          "aria-label",
          audio.paused ? "Play demo audio" : "Pause demo audio",
        );
        play.innerHTML = audio.paused
          ? '<span aria-hidden="true">▶</span>'
          : '<span aria-hidden="true">Ⅱ</span>';
      }
    };
    const toggle = async () => {
      if (!audio.paused) {
        audio.pause();
        return;
      }
      try {
        if (!audioContext && window.AudioContext) {
          audioContext = new AudioContext();
          analyser = audioContext.createAnalyser();
          analyser.fftSize = 64;
          audioContext.createMediaElementSource(audio).connect(analyser);
          analyser.connect(audioContext.destination);
        }
        await audioContext?.resume();
        await audio.play();
      } catch {
        text("playback-status", "Preview unavailable. Try the web player.");
      }
    };
    const selectScreen = (key: keyof typeof screens) => {
      const screen = screens[key];
      const image = find<HTMLImageElement>("mobile-mockup-img");
      if (image) {
        image.src = `${base}mobile/mobile-${screen.file}.jpg`;
        image.alt = `NoSpoti ${screen.file} design mockup`;
      }
      text("flow-title", screen.title);
      text("flow-description", screen.description);
      text("flow-tag", `Design preview · ${screen.file}`);
      element
        .querySelectorAll<HTMLButtonElement>(".mobile-tab-btn")
        .forEach((button) =>
          button.setAttribute(
            "aria-pressed",
            String(button.id === `tab-${key}`),
          ),
        );
    };
    const click = (event: MouseEvent) => {
      const target = (event.target as Element).closest<HTMLElement>(
        "[data-action]",
      );
      if (!target || !element.contains(target)) return;
      const action = target.dataset.action || "";
      if (action === "togglePlay()") void toggle();
      const track = action.match(/^switchTrack\((\d)\)$/);
      if (track) {
        const index = Number(track[1]);
        const selected = tracks[index];
        if (!selected) return;
        audio.pause();
        audio.src = `${base}audio/${selected.file}`;
        text("current-track-title", selected.title);
        text("current-track-genre", selected.genre);
        element
          .querySelectorAll<HTMLButtonElement>(".track-btn")
          .forEach((button) =>
            button.setAttribute(
              "aria-pressed",
              String(button.dataset.index === String(index)),
            ),
          );
        sync();
        draw();
      }
      const tab = action.match(/^switchMobileTab\('([a-z]+)'\)$/);
      if (tab && tab[1] in screens)
        selectScreen(tab[1] as keyof typeof screens);
      if (action === "seekAudio(event)" && audio.duration) {
        const bounds = target.getBoundingClientRect();
        audio.currentTime =
          Math.max(
            0,
            Math.min(1, (event.clientX - bounds.left) / bounds.width),
          ) * audio.duration;
      }
    };
    const volume = (event: Event) => {
      audio.volume = Number((event.target as HTMLInputElement).value);
    };
    const seek = (event: KeyboardEvent) => {
      if (!Number.isFinite(audio.duration)) return;
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        audio.currentTime =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? audio.duration
              : Math.max(
                  0,
                  Math.min(
                    audio.duration,
                    audio.currentTime + (event.key === "ArrowLeft" ? -1 : 1),
                  ),
                );
      }
    };
    const onPlay = () => {
      cancelAnimationFrame(frame);
      sync();
      draw();
      text("playback-status", "Playing demo audio");
    };
    const onPause = () => {
      cancelAnimationFrame(frame);
      sync();
      draw();
      text("playback-status", "Demo paused");
    };
    element.addEventListener("click", click);
    find("volume-slider")?.addEventListener("input", volume);
    find("scrubber-bar")?.addEventListener("keydown", seek);
    audio.addEventListener("timeupdate", sync);
    audio.addEventListener("loadedmetadata", sync);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);
    const resize = () => {
      cancelAnimationFrame(frame);
      draw();
    };
    window.addEventListener("resize", resize);
    element
      .querySelectorAll<HTMLButtonElement>(".track-btn")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.index === "0"),
        ),
      );
    selectScreen("home");
    sync();
    draw();
    return () => {
      element.removeEventListener("click", click);
      find("volume-slider")?.removeEventListener("input", volume);
      find("scrubber-bar")?.removeEventListener("keydown", seek);
      window.removeEventListener("resize", resize);
      audio.removeEventListener("timeupdate", sync);
      audio.removeEventListener("loadedmetadata", sync);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      cancelAnimationFrame(frame);
      void audioContext?.close();
    };
  }, [markup]);
  return <div ref={root} dangerouslySetInnerHTML={{ __html: markup }} />;
}
