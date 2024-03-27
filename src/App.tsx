import { useEffect, useState } from "react";
import "./App.css";
import { CoinFlip } from "./components/coin-flip/coin-flip";
import { Lane } from "./components/lane/lane";

type Flip = {
    id: string;
};

type Result = "tails" | "heads";

function App() {
    const [flips, setFlips] = useState<Flip[]>([]);
    const [results, setResults] = useState<Result[]>([]);
    const heads = results.filter((r) => r === "heads");
    const tails = results.filter((r) => r === "tails");

    const flip = () => {
        setFlips((prev) => {
            return [
                ...prev,
                {
                    id: crypto.randomUUID(),
                },
            ];
        });
    };

    useEffect(() => {
        setTimeout(() => {
            window.onresize = function () {
                // @ts-ignore
                document.body.height = window.innerHeight;
            };
            // @ts-ignore
            window.onresize(); // called to initially set the height.
        }, 1);
    }, []);

    return (
        <div
            style={{
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: "1",
                minHeight: "600px",
                overflow: "hidden",
            }}
        >
            <Lane className="lane">
                <div
                    style={{
                        position: "relative",
                        flex: "1",
                        width: "250px",
                    }}
                >
                    {flips.map((f) => {
                        return (
                            <CoinFlip
                                onResult={(result) => {
                                    setResults((prev) => [...prev, result]);
                                }}
                                onFinished={() => {
                                    setFlips((prev) =>
                                        prev.filter((p) => p.id !== f.id)
                                    );
                                }}
                                key={f.id}
                                id={f.id}
                            />
                        );
                    })}
                    {/* {!flips.length && <StaticCoin />} */}
                </div>
                <div>
                    <button onClick={() => flip()}>Flip</button>
                </div>
                <div>
                    <div> Heads: {heads.length}</div>
                    <div> Tails: {tails.length}</div>
                </div>
            </Lane>
        </div>
    );
}

export default App;
