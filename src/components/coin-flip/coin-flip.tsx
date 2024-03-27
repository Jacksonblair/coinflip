import { useEffect, useState } from "react";
import { CoinMover } from "../coin-mover/coin-mover";
import styles from "./coin-flip.module.scss";

export const COIN_FLIP_DURATION = 1 * 1000;
export const COIN_ROLL_DURATION = 1 * 1000;
export const SHOW_RESULT_DURATION = 2 * 1000;

export type CoinState = "flipping" | "rolling" | "showing" | "finished";

export const CoinFlip = (props: {
    id: string;
    onResult: (result: "heads" | "tails") => void;
    onFinished: () => void;
}) => {
    const [result, setResult] = useState<"heads" | "tails">();
    const [coinState, setCoinState] = useState<CoinState>("flipping");

    useEffect(() => {
        if (coinState === "flipping" && !result) {
            const num = Math.random() > 0.5 ? 1 : 0;
            const result = num === 0 ? "heads" : "tails";
            setResult(result);
        }

        if (coinState === "showing" && result) {
            props.onResult(result);
        }

        if (coinState === "finished" && result) {
            props.onFinished();
        }
    }, [result, coinState]);

    useEffect(() => {
        setTimeout(() => {
            setCoinState("rolling");
        }, COIN_FLIP_DURATION);
        setTimeout(() => {
            setCoinState("showing");
        }, COIN_FLIP_DURATION + COIN_ROLL_DURATION);
        setTimeout(() => {
            setCoinState("finished");
        }, COIN_FLIP_DURATION + COIN_ROLL_DURATION + SHOW_RESULT_DURATION);
    }, []);

    const coinClasses = [styles.coin];
    if (coinState === "flipping") {
        coinClasses.push(styles["flipping"]);
    } else if (coinState === "rolling") {
        coinClasses.push(
            result === "heads" ? styles.rollingheads : styles.rollingtails
        );
    } else if (coinState === "showing") {
        coinClasses.push(
            result === "heads" ? styles.showingheads : styles.showingtails
        );
    }

    const shadowClasses = [styles.shadow];
    if (coinState == "flipping") {
        shadowClasses.push(styles["shadowflipping"]);
    } else if (coinState === "showing") {
        shadowClasses.push(styles["shadowshowing"]);
    }

    return (
        <>
            <div className={shadowClasses.join(" ")} />
            <CoinMover state={coinState}>
                <div className={coinClasses.join(" ")} />
            </CoinMover>
        </>
    );
};
