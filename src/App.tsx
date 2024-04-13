import { useEffect, useState } from "react";
import "./App.css";
import { CoinFlip } from "./components/coin-flip/coin-flip";
import { Lane } from "./components/lane/lane";
import { Footer } from "./components/footer/footer";
import AwesomeIcon from "@mui/icons-material/AutoAwesome";

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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: "1",
                overflowY: "auto",
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
                    <button onClick={() => flip()}>
                        <h2
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            Flip the coin! <AwesomeIcon />
                        </h2>
                    </button>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                    <h3 style={{ fontWeight: "400" }}>
                        Heads: <strong>{heads.length}</strong>
                    </h3>
                    <h3 style={{ fontWeight: "400" }}>
                        Tails: <strong>{tails.length}</strong>
                    </h3>
                </div>
                <br />
            </Lane>
            <Footer />
        </div>
    );
}

export default App;
