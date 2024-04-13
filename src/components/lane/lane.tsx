import { ComponentProps } from "react";

export const Lane = (props: ComponentProps<"div">) => {
    return (
        <div
            style={{
                width: "50%",
                maxWidth: "500px",
                minWidth: "250px",
                height: "100%",
                backgroundColor: "white",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                display: "flex",
                margin: "0 auto",
                minHeight: "760px",
                overflowY: "hidden",
            }}
            {...props}
        />
    );
};
