import { useEffect, useState } from "react";
import { CoinMover } from "../coin-mover/coin-mover";
import styles from "./coin-flip.module.scss";

export const COIN_FLIP_DURATION = 1 * 1000;
export const COIN_ROLL_DURATION = 0.3 * 1000;
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
        if (coinState === "showing" && !result) {
            const num = Math.random() > 0.5 ? 1 : 0;
            const result = num === 0 ? "heads" : "tails";

            props.onResult(result);
            setResult(result);
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

    return (
        <CoinMover state={coinState}>
            <div className={[styles.coin, styles[coinState]].join(" ")} />
        </CoinMover>
    );
};
