import styled from "styled-components";

export const CategoryName = styled.h2`
    margin-bottom: calc(103 / 1440 * 100vw);
    padding-top: calc(160 / 1440 * 100vw);
    font-weight: 400;
    font-size: calc(42 / 1440 * 100vw);
    line-height: 160%;

    @media (max-width: 1029px) {
        padding-top: 114px;
        font-size: 30px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 103px;
        padding-top: 160px;
        font-size: 42px;
    }
`;

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, calc(386 / 1440 * 100vw));
    grid-gap: calc(40 / 1440 * 100vw);
    list-style-type: none;

    @media (max-width: 941px) {
        grid-template-columns: repeat(2, calc(386 / 941 * 100vw));
        grid-gap: calc(40 / 941 * 100vw);
    }

    @media (max-width: 527px) {
        grid-template-columns: repeat(1, calc(386 / 527 * 100vw));
        grid-gap: calc(40 / 527 * 100vw);
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(3, 386px);
        grid-gap: 40px;
    }
`;

export const Loader = styled.div`    
        margin: 100px auto;
        font-size: 25px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        text-indent: -9999em;
        -webkit-animation: load5 1.1s infinite ease;
        animation: load5 1.1s infinite ease;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }
    @-webkit-keyframes load5 {
        0%,
        100% {
            box-shadow: 0em -2.6em 0em 0em #5ece7b,
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.5),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7);
        }
        12.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.7),
                1.8em -1.8em 0 0em #5ece7b, 2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5);
        }
        25% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.5),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7), 2.5em 0em 0 0em #5ece7b,
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        37.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.7), 1.75em 1.75em 0 0em #5ece7b,
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        50% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.5),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.7), 0em 2.5em 0 0em #5ece7b,
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        62.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.5),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.7), -1.8em 1.8em 0 0em #5ece7b,
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        75% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.5),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.7), -2.6em 0em 0 0em #5ece7b,
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        87.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.5),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.7), -1.8em -1.8em 0 0em #5ece7b;
        }
    }
    @keyframes load5 {
        0%,
        100% {
            box-shadow: 0em -2.6em 0em 0em #5ece7b,
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.5),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7);
        }
        12.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.7),
                1.8em -1.8em 0 0em #5ece7b, 2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5);
        }
        25% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.5),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7), 2.5em 0em 0 0em #5ece7b,
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        37.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.7), 1.75em 1.75em 0 0em #5ece7b,
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        50% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.5),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.7), 0em 2.5em 0 0em #5ece7b,
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        62.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.5),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.7), -1.8em 1.8em 0 0em #5ece7b,
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        75% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.5),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.7), -2.6em 0em 0 0em #5ece7b,
                -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);
        }
        87.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2),
                1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2),
                2.5em 0em 0 0em rgba(0, 0, 0, 0.2),
                1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2),
                0em 2.5em 0 0em rgba(0, 0, 0, 0.2),
                -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.5),
                -2.6em 0em 0 0em rgba(0, 0, 0, 0.7), -1.8em -1.8em 0 0em #5ece7b;
        }    
`;
