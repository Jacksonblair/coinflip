import { ComponentProps } from "react";

export const Lane = (props: ComponentProps<"div">) => {
    return (
        <div
            style={{
                width: "50vw",
                maxWidth: "500px",
                minWidth: "250px",
                height: "100vh",
                backgroundColor: "white",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                display: "flex",
            }}
            {...props}
        />
    );
};
