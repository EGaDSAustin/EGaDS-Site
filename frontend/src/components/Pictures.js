import React from "react";
import Carousel from "react-bootstrap/Carousel";

function importAll(r) {
    return r.keys().map((item, idx) => {
        return {
            name: `Picture ${idx}`,
            img: r(item),
            altText: `Picture Slide ${idx}`,
        };
    });
}

const images = importAll(
    require.context("../assets/photos", false, /\.(png|jpe?g|svg)$/)
);
const Pictures = (props) => {
    return (
        <div id="pictures">
            <br />
            <Header>
                <span
                    style={{
                        backgroundColor: "#60666C",
                        padding: "1vw 12vw",
                        borderRadius: "8px",
                    }}
                >
                    Pictures
                </span>
            </Header>
            <Carousel
                style={{
                    padding: "1vw 0vw",
                }}
            >
                {images.map((p, idx) => (
                    <Carousel.Item key={idx}>
                        <div
                            style={{
                                height: "100vh",
                                maxHeight: "54vw",
                                overflow: "hidden",
                                alignContent: "center",
                            }}
                        >
                            <img
                                style={{ marginTop: "-20%" }}
                                className="d-block w-100"
                                src={p.img}
                                alt={p.altText}
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>{caption[idx]}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Pictures;
