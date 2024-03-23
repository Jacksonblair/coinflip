import { PropsWithChildren } from "react";
import styles from "./coin-mover.module.scss";
import { CoinState } from "../coin-flip/coin-flip";

export const CoinMover = (
    props: PropsWithChildren & {
        state: CoinState;
    }
) => {
    return (
        <div className={[styles.mover, styles[props.state]].join(" ")}>
            {props.children}
        </div>
    );
};
