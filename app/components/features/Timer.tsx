import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { Colors } from "@/utils/colors";
import { spacings, fontsizes, flexsizes } from "@/utils/sizes";
import Roundedbutton from "../Roundedbutton";
import Countdown from "../countdown";
export default function Timer({
  focusingtasks,
  cancelfocus,
  hastimerended,
}: {
  focusingtasks: string | null;
  cancelfocus: (data: string | null) => void;
  hastimerended?: () => void;
}) {
  useKeepAwake();
  const [timerpaused, seTimerpaused] = useState<boolean>(true);
  const [progresstrack, setProgresstrack] = useState<number>(100);
  const [minu, setMin] = useState<number>(0.1);
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const handleadjust = (value: number) => {
    switch (value) {
      case 10:
        setMin(10);
        break;
      case 15:
        setMin(15);
        break;
      case 20:
        setMin(20);
        break;
      default:
        setMin((prev) => prev + 0);
        break;
    }
  };

  const onEndfunction = (payload: () => void) => {
    Vibration.vibrate(PATTERN);
    payload();
    seTimerpaused(true);
    hastimerended && hastimerended();
  };
  // setProgresstrack(0);
  return (
    <View style={styles.parentcontainer}>
      <View style={styles.container}>
        <Countdown
          isPaused={timerpaused}
          progresspercent={(percent) => setProgresstrack(percent)}
          onEnd={(argfunc) => onEndfunction(argfunc)}
          minutes={minu}
        />
        <View style={styles.subjectFocus}>
          <Text style={styles.text}>Focusing On:</Text>
          <Text style={styles.subjet}>{focusingtasks ?? "First Todo"}</Text>
        </View>
      </View>

      {/* TODO:progressbar */}
      <View style={styles.progressparent}>
        <View
          style={[styles.innertrack, { width: `${progresstrack}%` }]}
        ></View>
      </View>

      {/* action buttons */}

      {/* <Roundedbutton title="15" size={100} textStyle={{ fontSize: 30 }} /> */}
      <View style={styles.tooltimer}>
        <Roundedbutton
          title="10"
          size={80}
          textStyle={{ fontSize: 25 }}
          onClick={() => handleadjust(10)}
        />
        <Roundedbutton
          title="15"
          size={80}
          textStyle={{ fontSize: 25 }}
          onClick={() => handleadjust(15)}
        />
        <Roundedbutton
          title="20"
          size={80}
          textStyle={{ fontSize: 25 }}
          onClick={() => handleadjust(20)}
        />
      </View>
      <View style={styles.roundbuttoncta}>
        <Roundedbutton
          title={timerpaused ? "Start" : "Pause"}
          size={90}
          textStyle={styles.buttonrounded}
          onClick={() => seTimerpaused(!timerpaused)}
        />

        <Roundedbutton
          title={"Cancel"}
          size={90}
          textStyle={styles.buttonrounded}
          onClick={() => {
            cancelfocus(null);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tooltimer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacings.sm,
    width: "100%",
    paddingInline: spacings.xl,
    marginTop: spacings.xl,
  },
  progressparent: {
    backgroundColor: "grey",
    width: "100%",
    position: "relative",
    height: 20,
    // flex: 0.4,
    borderRadius: spacings.sm,
    marginTop: spacings.xvl,
  },
  innertrack: {
    backgroundColor: "purple",
    position: "absolute",
    height: "100%",
    borderRadius: spacings.sm,
  },

  parentcontainer: {
    flex: flexsizes.xl,
    flexDirection: "column",
    gap: spacings.xl,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonrounded: {
    fontSize: fontsizes.xxxl,
  },
  container: {
    flex: flexsizes.xs + 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  subjectFocus: {
    flexDirection: "column",
    marginTop: spacings.md,
    alignItems: "center",
  },
  subjet: {
    color: Colors.pinkaccent,
    fontSize: fontsizes.max,
    marginTop: spacings.md,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  text: {
    color: Colors.whiteaccent,
    fontSize: fontsizes.xvl,
  },

  roundbuttoncta: {
    flex: flexsizes.mid,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacings.max,
  },
});
