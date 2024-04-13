import styles from "./footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div
                style={{
                    margin: "16px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                    }}
                >
                    <a
                        href="https://www.linkedin.com/in/jackson-blair-ba2542b1/"
                        target="_blank"
                    >
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/Jacksonblair" target="_blank">
                        <GitHubIcon />
                    </a>
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: "0.9em",
                    }}
                >
                    <div>
                        Website by{" "}
                        <a
                            href="https://www.linkedin.com/in/jackson-blair-ba2542b1/"
                            target="_blank"
                        >
                            <strong>Jackson Blair</strong>
                        </a>
                    </div>
                    &nbsp;|&nbsp;
                    <div>
                        Art by{" "}
                        <a
                            href="https://www.fiverr.com/ackygama"
                            target="_blank"
                        >
                            <strong>@Ackygama</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
