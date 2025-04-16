import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/utils/colors";
import { spacings, fontsizes } from "@/utils/sizes";

export default function Countdown({
  minutes,
  isPaused = true,
  progresspercent,
  onEnd,
}: {
  minutes?: number;
  isPaused?: boolean;
  progresspercent?: (percent: number) => void;
  onEnd?: () => void;
}) {
  const [millisecs, setMillisecs] = useState<number | null>(null);
  const [progressscore, setProgresscore] = useState<number>(0);
  const interval = useRef<NodeJS.Timeout | null>(null);
  const formattime = (t: number) => {
    return t < 10 ? `0${t}` : t;
  };

  const convertminutestomillisecs = (minutes: number) => {
    return minutes * 60 * 1000;
  };

  const countDown = () => {
    setMillisecs((time) => {
      if (time === null || time === 0) {
        interval.current && clearInterval(interval.current);
        onEnd!();
        return 0;
      }

      const lefttime = time - 1000;
      return lefttime;
    });
  };

  const calcPercent = () => {
    let progress = (millisecs! / convertminutestomillisecs(minutes!)) * 100;
    setProgresscore(progress);
    return progress;
  };

  useEffect(() => {
    setMillisecs(convertminutestomillisecs(minutes!));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      return;
    }

    interval.current = setInterval(() => {
      countDown();
    }, 1000);

    return () => {
      clearInterval(interval.current!);
    };
  }, [isPaused]);

  useEffect(() => {
    progresspercent!(calcPercent());
  }, [millisecs]);

  const minute = millisecs ? Math.floor(millisecs / 1000 / 60) % 60 : 0;
  const seconds = millisecs ? Math.floor(millisecs / 1000) % 60 : 0;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${formattime(minute)}:${formattime(
        seconds
      )}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: fontsizes.h1 + 10,
    color: Colors.whiteaccent,
    fontWeight: "bold",
    textAlign: "center",
  },
});
